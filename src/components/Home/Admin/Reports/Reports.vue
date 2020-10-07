<template>
  <div class="row report__page  tw-mt-8">
    <div class="col-2">
      <data-point-filter />
    </div>
    <div class="col">
      <router-view > </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import DataPointFilter from './DataPointFilter.vue';

import { get_projects } from 'src/core/RequestHandler/admin';
import { ProjectModel } from 'src/core/Models/ProjectModel';

export default Vue.extend({
  name: 'Reports',
  components: {
    DataPointFilter
  },
  mounted() {
    get_projects()
      .then(val => {
        console.log(val);
        this.projects = val.filter((val: ProjectModel) => {
          return val.project_description !== undefined;
        });
      })
      .catch(e => {
        console.error(e);
      });
  },
  data() {
    return {
      projects: null as null | ProjectModel[]
    };
  }
});
</script>

<style scoped>
div.report__page {
  height: 85vh;
  background-color: #fbfeff;
}
</style>
