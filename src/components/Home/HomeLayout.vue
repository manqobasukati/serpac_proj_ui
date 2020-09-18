<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          {{ project_name | removeUnderscore | capitaliseWords }}
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import Vue from 'vue';

import { FILTERS } from 'src/core/helpers/filters';
import { module_definition } from 'src/core/ModuleDefinition';

export default Vue.extend({
  name: 'HomeLayout',
  data() {
    return {
      drawer: false,
      miniState: true,
      left: false,
      navigationItems: module_definition['public'].modules.map(() => {
        return;
      }),
      project_name: module_definition['public'].name
    };
  },
  filters: {
    ...FILTERS
  }
});
</script>

<style scoped>
.section__menu_item {
  background-color: #92acf3b2;
  width: 80%;
  font-size: 1.3rem;
  padding: 0.5rem;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-bottom: 10px;
}
</style>
