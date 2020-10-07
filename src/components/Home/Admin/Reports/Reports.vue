<template>
  <div class="row report__page  tw-mt-8">
    <div class="col-2">
      <data-point-filter />
    </div>
    <div class="col">
      <div class="row">
        <highlights-bar />
      </div>
      <div class="row">
        <div class="col">
          <div class="tw-py-3 ">
            <stacked-graph />
          </div>
        </div>
        <div class="col">
          <div class="tw-py-3 tw-ml-3 tw-mr-6">
            <content-component />
          </div>
        </div>
        <div class="col">
          <div class="tw-py-3 tw-mr-6">
            <content-component />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <table-results class="tw-mr-6" :TableData="projects" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import DataPointFilter from './DataPointFilter.vue';
import HighlightsBar from './HighlightsBar.vue';
import TableResults from './TableResults/TableResults.vue';
import StackedGraph from './StackedGraph/StackedGraph.vue';
import ContentComponent from './ContentComponent.vue';
import { get_projects } from 'src/core/RequestHandler/admin';
import { ProjectModel } from 'src/core/Models/ProjectModel';

export default Vue.extend({
  name: 'Reports',
  components: {
    DataPointFilter,
    HighlightsBar,
    ContentComponent,
    TableResults,
    StackedGraph
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
