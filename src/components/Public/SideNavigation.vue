<template>
  <div class="tw-absolute tw-inset-y-0 tw-left-0 tw-w-56 tw-bg-gray-200     ">
    <div class="tw-flex tw-flex-col tw-h-full tw-p-8">
      <div class="tw-p-3">
        <q-icon name="account_circle" size="8rem" color="grey-5" />
      </div>
      <div class="tw-flex tw-flex-col tw-justify-between tw-flex-1">
        <div>
          <div v-for="(item, key) in items" :key="key">
            <div
              @click="changeRoute(item.link)"
              class="tw-flex tw-p-1 tw-flex-row tw-text-lg tw-mt-2 tw-justify-between  tw-font-bold tw-text-blue-500"
            >
              <div style="font-size:17px">
                {{ item.name | removeUnderscore | capitaliseWords }}
              </div>

              <q-icon
                class="tw-p-1 tw-ml-2 tw-mr-1 "
                :name="item.icon"
                size="22px"
              >
              </q-icon>
            </div>
            <div
              v-if="item.name === 'my_projects' && show_my_projects"
              class="tw-flex tw-px-3 tw-bg-gray-100"
            >
              <ul class="list-disc">
                <li
                  @click="viewProject(project)"
                  class="tw-text-blue-400 hover:tw-underline"
                  v-for="(project, key) in get_current_projects"
                  :key="key"
                >
                  {{ project.project_description.title }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="">
          <div
            @click="logout()"
            class="tw-flex tw-p-1 tw-flex-row tw-text-lg tw-mt-2 tw-justify-between  tw-font-bold tw-text-blue-500"
          >
            <div style="font-size:17px">
              logout
            </div>
            <q-icon class="tw-p-1 tw-ml-2 tw-mr-1 " name="logout" size="22px">
            </q-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

import { FILTERS } from 'src/core/helpers/filters';
import { MODULES } from 'src/store/index';
import { PROJECT_CREATE_ACTIONS } from 'src/store/project_create/actions';
import { ProjectCreateInterface } from 'src/store/project_create/state';
import { ProjectModel } from 'src/core/Models/ProjectModel';

export default Vue.extend({
  name: 'SideNavigation',
  props: ['items'],
  mounted() {
    this.current_user_projects();
  },
  data() {
    return {
      my_projects: [],
      show_my_projects: false
    };
  },

  methods: {
    logout() {
      localStorage.removeItem('serpac_tool_username');
      localStorage.removeItem('serpac_tool_token');
      localStorage.removeItem('serpac_tool_user_id');
      void this.$router.push({ path: '/' });
    },
    viewProject(project: ProjectModel) {
      const action = `${MODULES.PROJECT_CREATE}/${PROJECT_CREATE_ACTIONS.SET_SELECTED_PROJECT}`;

      this.$store
        .dispatch(action)
        .then(() => {
          void this.$router.push({
            path: `/public/project/${project._id as string}`
          });
        })
        .catch(() => {
          console.log('If anything happens');
        });
    },
    current_user_projects() {
      const get_projects_action = `${MODULES.PROJECT_CREATE}/${PROJECT_CREATE_ACTIONS.CURRENT_USER_PROJECTS}`;
      const user_id = localStorage.getItem('serpac_tool_user_id');
      void this.$store.dispatch(get_projects_action, user_id);
    },
    changeRoute(link: string) {
      //
      if (link === '/public/project') {
        void this.$router.push({ path: link });
      } else if (link === '/public/my-projects') {
        this.show_my_projects = !this.show_my_projects;
      } else if (link === '/public/user') {
        void this.$router.push({
          path: `${link}/${localStorage.getItem(
            'serpac_tool_user_id'
          ) as string}`
        });
      }
    }
  },
  computed: {
    ...mapState(MODULES.PROJECT_CREATE, {
      get_current_projects(state: ProjectCreateInterface) {
        return state.current_user_projects;
      }
    })
  },
  filters: {
    ...FILTERS
  }
});
</script>
