<template>
  <div>
    <div
      class="tw-w-full tw-h-lg tw-bg-gray-200 tw-shadow-md tw-rounded-xlg tw-px-3"
    >
      <div class="tw-pt-10">
        here
        <canvas ref="scatterChart"></canvas>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Chart from 'chart.js';
import { ProjectModel } from 'src/core/Models/ProjectModel';

export default Vue.extend({
  name: 'LineChart',
  props: ['projects'],
  mounted() {
    this.createChart();
  },
  methods: {
    createChart() {
      this.chart = new Chart(this.$refs.scatterChart as HTMLCanvasElement, {
        type: 'scatter',
        data: {
          datasets: [
            {
              label: 'Scatter Dataset',
              data: this.projects.map((val: ProjectModel) => {
                return {
                  x: val?.project_description?.project_location?.coordinates[0],
                  y: val?.project_description?.project_location?.coordinates[1]
                };
              })
            }
          ]
        },
        options: {
          scales: {
            xAxes: [
              {
                type: 'linear',
                position: 'bottom'
              }
            ]
          }
        }
      });
    }
  },
  data() {
    return {
      currentRef: null as null | HTMLCanvasElement,
      chart: null as null | Chart
    };
  }
});
</script>
