<template>
  <div>
    <div class="q-mt-lg">
      <div
        v-for="(section, key) in section_navigation.modules"
        :key="key"
        @click="changeNavigation(section)"
        class="section__menu_item"
        v-bind:class="{ section__menu_item_active: isSectionActive(section) }"
      >
        {{ section.name | removeUnderscore | capitaliseWords }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ModuleDefinition, module_definition } from 'src/core/ModuleDefinition';
import Vue from 'vue';
import { mapState } from 'vuex';

import { FILTERS } from 'src/core/helpers/filters';
import { MODULES } from 'src/store';
import { ProjectCreateInterface } from 'src/store/project_create/state';
import { PROJECT_CREATE_ACTIONS } from 'src/store/project_create/actions';

export default Vue.extend({
  name: 'ProjectCreateSidebar',
  data() {
    return {
      isActive: false
    };
  },
  filters: {
    ...FILTERS
  },
  methods: {
    isSectionActive(section: ModuleDefinition) {
      return section.name === this.get_active_section;
    },
    changeNavigation(module: ModuleDefinition) {
      const set_active_section_action = `${MODULES.PROJECT_CREATE}/${PROJECT_CREATE_ACTIONS.SET_ACTIVE_SECTION}`;
      const set_previous_section = `${MODULES.PROJECT_CREATE}/${PROJECT_CREATE_ACTIONS.SET_PREVIOUS_SECTION}`;
      const previous_section = this.get_active_section;

      this.$store
        .dispatch(set_active_section_action, module.name)
        .then(() => {
          void this.$router.push({
            path: `${module.link as string}`,
            query: { projectId: this.$route.query.projectId }
          });
          void this.$store.dispatch(set_previous_section, previous_section);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },

  computed: {
    ...mapState(MODULES.PROJECT_CREATE, {
      get_active_section(state: ProjectCreateInterface) {
        return state.active_section;
      },
      get_active_submodule(state: ProjectCreateInterface) {
        return state.active_submodule;
      },
      get_selected_project(state: ProjectCreateInterface) {
        return state.selected_project;
      }
    }),
    section_navigation() {
      // if (this.$route.params) {
      //   return module_definition['public'].modules.find(val => {
      //     return val.name === 'my_projects';
      //   }) as ModuleDefinition;
      // }
      // return module_definition['public'].modules.find(val => {
      //   return val.name === 'project_create';
      // }) as ModuleDefinition;

      if (
        this.get_active_submodule ===
        module_definition['public'].modules[1].name
      ) {
        return module_definition['public'].modules.find(val => {
          return val.name === 'my_projects';
        }) as ModuleDefinition;
      } else {
        return module_definition['public'].modules.find(val => {
          return val.name === 'project_create';
        }) as ModuleDefinition;
      }
    }
  }
});
</script>

<style scoped>
.section__menu_item {
  background-color: #aab3ccb2;
  width: 80%;
  font-size: 1.3rem;
  padding: 0.5rem;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-bottom: 10px;
}

.section__menu_item_active {
  background-color: #92acf3b2;
}
</style>
