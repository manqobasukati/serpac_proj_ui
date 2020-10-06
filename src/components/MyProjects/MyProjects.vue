<template>
  <div>
    <div class="row">
      <div class="col"></div>
      <div class="col-10">
        <div style="text-align:center" class="text-h5 q-mt-sm">My Projects</div>
        <div v-if="get_current_projects">
          <q-scroll-area style="height:80vh"
            ><div
              class="row q-mt-sm"
              v-for="(project, key) in get_current_projects"
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
                    <q-btn
                      @click="DeleteProject(project)"
                      label="Delete"
                      flat
                      color="primary"
                    />
                    <q-btn
                      @click="viewProject(project)"
                      label="View"
                      flat
                      color="primary"
                    />
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
import { ProjectCreateInterface } from 'src/store/project_create/state';
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'MyProjects',
  mounted() {
    this.current_user_projects();
  },
  methods: {
    current_user_projects() {
      const get_projects_action = `${MODULES.PROJECT_CREATE}/${PROJECT_CREATE_ACTIONS.CURRENT_USER_PROJECTS}`;
      const user_id = localStorage.getItem('serpac_tool_user_id');
      void this.$store.dispatch(get_projects_action, user_id);
    },
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
    DeleteProject(project: ProjectModel) {
      const action = `${MODULES.PROJECT_CREATE}/${PROJECT_CREATE_ACTIONS.REMOVE_PROJECT}`;
      this.$store
        .dispatch(action, project)
        .then(() => {
          this.$q.notify({ message: 'Deleted project' });
        })
        .catch(e => {
          console.error(e);
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
    ...mapState(MODULES.PROJECT_CREATE, {
      get_current_projects(state: ProjectCreateInterface) {
        console.log('This', state.current_user_projects);
        return state.current_user_projects;
      }
    })
  }
});
</script>
