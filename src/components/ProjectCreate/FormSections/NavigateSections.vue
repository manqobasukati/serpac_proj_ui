<template>
  <div>
    <q-page-sticky position="bottom-right" :offset="[20, 20]">
      <q-btn
        rounded
        size="xl"
        icon="keyboard_arrow_right"
        @click="navigateNextSection()"
      />
    </q-page-sticky>
    <q-page-sticky position="bottom-left" :offset="[350, 20]">
      <q-btn
        rounded
        size="xl"
        icon="keyboard_arrow_left"
        v-on:click="navigateNextSection()"
      />
    </q-page-sticky>
  </div>
</template>

<script lang="ts">
import { ModuleDefinition, module_definition } from 'src/core/ModuleDefinition';
import { MODULES } from 'src/store';
import { PROJECT_CREATE_ACTIONS } from 'src/store/project_create/actions';
import { ProjectCreateInterface } from 'src/store/project_create/state';
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'NavigateSections',
  data() {
    return {};
  },
  methods: {
    navigateNextSection() {

      const modules = module_definition['main'].modules.find(val => {
        return val.name === 'project_create';
      });

      if (modules) {
        const module = modules.modules.find(val => {
          return val.name === this.getNextSection;
        });

        const set_active_section_action = `${MODULES.PROJECT_CREATE}/${PROJECT_CREATE_ACTIONS.SET_ACTIVE_SECTION}`;

       void this.$store
        .dispatch(set_active_section_action, module?.name)
        .then(() => {
          void this.$router.push({ path: `${module?.link as string}` });
        });


    }
  },
  computed: {
    ...mapState(MODULES.PROJECT_CREATE, {
      get_active_section(state: ProjectCreateInterface) {
        return state.active_section;
      }
    }),
    getNextSection() {
      const sections = module_definition['main'].modules
        .find(val => {
          return val.name === 'project_create';
        })
        ?.modules.map(val => {
          return val.name;
        });

      const index = sections?.indexOf(this.get_active_section as string);

      if (sections && index) {
        return sections[index + 1] || '';
      }

      return this.get_active_section;
    }
  }
  }
});
</script>
