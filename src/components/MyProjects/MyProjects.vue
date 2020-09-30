<template>
  <div>
    <div class="row">
      <div class="col"></div>
      <div class="col-10">
        <div style="text-align:center" class="text-h5 q-mt-sm">My Projects</div>
        <div v-if="get_projects">
          <q-scroll-area style="height:80vh"
            ><div
              class="row q-mt-sm"
              v-for="(project, key) in get_projects"
              :key="key"
            >
              <div class="col"></div>
              <div v-if="project" class="col-6">
                <q-card square>
                  <q-card-section>
                    <div v-if="project.project_description" class="text-h6">
                      {{ project.project_description.description }}
                    </div>
                    <div class="pair">
                      <div
                        class="text-subtitle1"
                        v-if="project.project_description"
                      >
                        Project location -
                        <span class="text-grey">{{
                          project.project_description.project_location
                        }}</span>
                      </div>
                      <div
                        class="text-subtitle1"
                        v-if="project.project_description"
                      >
                        Name of investor -
                        <span class="text-grey">{{
                          project.project_description.name_of_investor
                        }}</span>
                      </div>
                    </div>
                  </q-card-section>

                  <q-card-actions>
                    <q-space />

                    <q-btn @click="viewProject(project)" label="View" dense />
                  </q-card-actions>
                </q-card>
              </div>
              <div class="col"></div></div
          ></q-scroll-area>
        </div>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { ProjectModel } from 'src/core/Models/ProjectModel';
import { MODULES } from 'src/store';
import { ADMIN_ACTIONS } from 'src/store/admin/actions';
import { AdminInterface } from 'src/store/admin/state';
import { PROJECT_CREATE_ACTIONS } from 'src/store/project_create/actions';
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'MyProjects',
  mounted() {
    this.triggerProjectSearch();
  },
  methods: {
    viewProject(project: ProjectModel) {
      const action = `${MODULES.PROJECT_CREATE}/${PROJECT_CREATE_ACTIONS.SET_SELECTED_PROJECT}`;

      this.$store
        .dispatch(action)
        .then(() => {
          void this.$router.push({
            path: `/public/project/info-section`,
            query: { projectId: project._id as string },
            params: {
              projectId: project._id as string
            }
          });
        })
        .catch(() => {
          console.log('If anything happens');
        });
    },
    triggerProjectSearch() {
      const action = `${MODULES.ADMIN}/${ADMIN_ACTIONS.ALL_PROJECTS}`;
      void this.$store
        .dispatch(action)
        .then(val => {
          console.log('Fetched data', val);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  computed: {
    ...mapState(MODULES.ADMIN, {
      get_projects(state: AdminInterface) {
        return state.projects?.filter(val => {
          return val.project_description !== undefined;
        });
      }
    })
  }
});
</script>
