<template>
  <div>
    <div class="row q-mt-sm">
      <div class="col"></div>
      <div class="col-8">
        <q-card flat>
          <q-card-section>
            <div class="row">
              <div class="col"></div>
              <div class="col-8">
                <q-input outlined label="Enter search criteria here" />
              </div>
              <div class="col">
                <q-btn
                  class="bg-primary text-white q-ml-lg"
                  @click="searchProjects()"
                  label="Search"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col"></div>
    </div>

    <div v-if="get_projects">
      <q-scroll-area
        style="height:80vh"
        ><div
          class="row q-mt-sm"
          v-for="(project, key) in get_projects"
          :key="key"
        >
          <div class="col"></div>
          <div class="col-6">
            <q-card square>
              <q-card-section>
                <div class="text-h6">
                  {{ project.project_description.description.substring(0, 15) }}
                </div>
                <div class="text-subtitle1">
                  {{ project.project_description.name_of_investor }}
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
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

import { MODULES } from 'src/store';
import { AdminInterface } from 'src/store/admin/state';
import { ADMIN_ACTIONS } from 'src/store/admin/actions';
import { ProjectModel } from 'src/core/Models/ProjectModel';

export default Vue.extend({
  name: 'AllProjects',
  methods: {
    viewProject(project: ProjectModel) {
      void this.$router.push({
        path: `/admin/all-projects/${project._id as string}`,
        params: { projectId: project._id as string }
      });
    },
    searchProjects() {
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
        console.log('projects', state.projects);
        return state.projects;
      }
    })
  }
});
</script>
