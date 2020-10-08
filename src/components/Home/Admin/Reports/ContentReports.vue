<template>
  <div>
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
</template>

<script lang="ts">
import Vue from 'vue';

import TableResults from './TableResults/TableResults.vue';
import ContentComponent from './ContentComponent.vue';
import StackedGraph from './StackedGraph/StackedGraph.vue';
import LineChart from './LineChart/LineChart.vue';
import HighlightsBar from './HighlightsBar.vue';
import ScatterChart from './ScatterChart/ScatterChart.vue';

export default Vue.extend({
  name: 'ContentReports',
  props: ['projects'],
  components: {
    TableResults,
    StackedGraph,
    HighlightsBar,
    LineChart,
    ScatterChart
  }
});
</script>
