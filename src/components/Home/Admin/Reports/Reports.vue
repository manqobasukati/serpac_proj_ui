<template>
  <div class="row report__page  tw-mt-8">
    <div class="col-2">
      <data-point-filter @requestParameters="getProjects" />
    </div>
    <div class="col">
      <div>
        <div class="row">
          <highlights-bar :projects="projects" />
        </div>
        <div class="row">
          <div class="col">
            <div class="tw-py-3 ">
              <stacked-graph :projects="projects" />
            </div>
          </div>
          <div class="col">
            <div class="tw-py-3 tw-ml-3 tw-mr-6">
              <line-chart />
            </div>
          </div>
          <div class="col">
            <div class="tw-py-3 tw-mr-6">
              <scatter-chart :projects="projects" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <table-results :TableData="projects" class="tw-mr-6" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import DataPointFilter from './DataPointFilter.vue';
import TableResults from './TableResults/TableResults.vue';
import ContentComponent from './ContentComponent.vue';
import StackedGraph from './StackedGraph/StackedGraph.vue';
import LineChart from './LineChart/LineChart.vue';
import HighlightsBar from './HighlightsBar/HighlightsBar.vue';
import ScatterChart from './ScatterChart/ScatterChart.vue';

import { get_projects } from 'src/core/RequestHandler/admin';
import { ProjectModel } from 'src/core/Models/ProjectModel';

export default Vue.extend({
  name: 'Reports',
  components: {
    DataPointFilter,
    TableResults,
    StackedGraph,
    HighlightsBar,
    LineChart,
    ScatterChart
  },
  mounted() {
    this.$q.loading.show();
    get_projects('')
      .then(val => {
        this.projects = val.filter((val: ProjectModel) => {
          return val.project_description !== undefined;
        });
        this.$q.loading.hide();
      })
      .catch(e => {
        console.error(e);
      });
  },
  methods: {
    getProjects(data: any) {
      this.$q.loading.show();
      get_projects(data)
        .then(val => {
          this.projects = val.filter((val: ProjectModel) => {
            return val.project_description !== undefined;
          });
          this.$q.loading.hide();
        })
        .catch(e => {
          console.error(e);
        });
    }
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
