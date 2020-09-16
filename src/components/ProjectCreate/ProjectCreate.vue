<template>
  <div>
    <div class="row" style="height:95vh">
      <div class="col-2">
        <project-create-sidebar />
      </div>
      <q-separator vertical />

      <div class="col-9 q-pa-sm q-mt-lg">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { FILTERS } from 'src/core/helpers/filters';

import ProjectCreateSidebar from './ProjectCreateSidebar.vue';

export default Vue.extend({
  name: 'UserLayout',
  components: {
    ProjectCreateSidebar
  },
  data() {
    return {};
  },
  filters: {
    ...FILTERS
  }
});
</script>


