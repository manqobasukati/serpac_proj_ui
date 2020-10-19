<template>
  <div class="tw-flex tw-h-full tw-w-full tw-flex-row report__page tw-pt-12 tw-items-stretch" >
    <data-point-filter class="tw-ml-5" @requestParameters="getProjects" />

    <div v-if="view === 'multiple'" class="tw-flex tw-flex-col  tw-pl-6 tw-justify-self-center tw-flex-1">
      <div class="">
        <highlights-bar :projects="projects" />
      </div>
      <div class="tw-flex tw-flex-row">
        <div class="tw-flex tw-flex-1">
          <div class="tw-py-3 tw-w-full ">
            <stacked-graph :projects="projects" />
          </div>
        </div>
        <div class="tw-flex tw-flex-1">
          <div class="tw-py-3 tw-ml-3 tw-mr-6 tw-w-full">
            <line-chart />
          </div>
        </div>
        <div class="tw-flex tw-flex-1">
          <div class="tw-py-3 tw-mr-6 tw-w-full">
            <scatter-chart :projects="projects" />
          </div>
        </div>
      </div>
      <div class="tw-flex ">
        <div class="">
          <table-results
            :TableData="projects"
            class="tw-mr-6"
            @setView="setView"
          />
        </div>
      </div>
    </div>
    <div class="col" v-else-if="view === 'single'">
      <single-report @setView="setView" :projectId="projectId" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import DataPointFilter from './DataPointFilter.vue';
import TableResults from './TableResults/TableResults.vue';

import StackedGraph from './StackedGraph/StackedGraph.vue';
import LineChart from './LineChart/LineChart.vue';
import HighlightsBar from './HighlightsBar/HighlightsBar.vue';
import ScatterChart from './ScatterChart/ScatterChart.vue';
import SingleReport from './SingleReport/SingleReports.vue';

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
    ScatterChart,
    SingleReport
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
    setView(data: any) {
      if (data.view === 'single') {
        console.log('Ulana', data);
        this.projectId = data.projectId;
        this.view = data.view;
      } else {
        this.view = data.view;
      }
    },
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
      view: 'multiple',
      projects: null as null | ProjectModel[],
      projectId: null as null | string
    };
  }
});
</script>

<style scoped>
div.report__page {
 
  background-color: #fbfeff;
}
</style>
