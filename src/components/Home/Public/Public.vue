<template>
  <div>
    <div v-if="false" class="q-ma-lg">
      <div class="row" style="height:15vh"></div>
      <div class="row q-pa-lg q-ml-lg justify-center">
        <div
          v-for="(item, key) in navigation_options"
          :key="key"
          @click="change_navigation(item)"
          class="col navigation__option q-pa-md q-ma-md"
        >
          <q-icon :name="item.icon" style="font-size: 5rem; color:#2076D2" />
          <div class="text-h6">
            {{ item.name | removeUnderscore | capitaliseWords }}
          </div>
        </div>
      </div>
    </div>
    <div class="tw-flex tw-flex-row">
      <side-navigation :items="navigation_options" />

      <div class="tw-relative tw-ml-64 tw-mt-6 tw-text-lg">
        Something will come here
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { FILTERS } from 'src/core/helpers/filters';
import { ModuleDefinition, module_definition } from 'src/core/ModuleDefinition';
import { MODULES } from 'src/store';
import { PROJECT_CREATE_ACTIONS } from 'src/store/project_create/actions';
import Vue from 'vue';

import SideNavigation from './SideNavigation.vue';

export default Vue.extend({
  name: 'Public',
  components: {
    SideNavigation
  },
  data() {
    return {
      navigation_options: module_definition['public'].modules
    };
  },

  methods: {
    change_navigation(module: ModuleDefinition) {
      const action = `${MODULES.PROJECT_CREATE}/${PROJECT_CREATE_ACTIONS.SET_ACTIVE_SUBMODULE}`;

      this.$store
        .dispatch(action, module.name)
        .then(() => {
          if (module.link) {
            if (module.link === '/public/my-projects') {
              const get_projects_action = `${MODULES.PROJECT_CREATE}/${PROJECT_CREATE_ACTIONS.CURRENT_USER_PROJECTS}`;
              const user_id = localStorage.getItem('serpac_tool_user_id');
              void this.$store.dispatch(get_projects_action, user_id);
            }
            void this.$router.push({ path: `${module.link}` });
          }
        })
        .catch(val => {
          console.error(val);
        });
    }
  },
  filters: {
    ...FILTERS
  }
});
</script>

<style scoped>
div.navigation__option {
  text-align: center;

  border-color: #092877;
  border-radius: 10px;
}
</style>
