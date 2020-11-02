<template>
  <div
    class="tw-flex tw-justify-center tw-items-center  tw-h-lg  tw-bg-gray-200 tw-shadow-md tw-rounded-xlg tw-px-3"
  >
    <div v-if="projects" class="tw-w-full tw-h-full tw-py-8">
      <canvas ref="stackedChart"></canvas>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Chart from 'chart.js';

import { createLabelArray, createDataArray } from 'src/core/handlers/graph';

export default Vue.extend({
  name: 'StackedGraph',
  props: ['projects'],
  mounted() {
    if (this.projects) {
      void Promise.resolve((resolve: any, reject: any) => {
        resolve(this.projects);
      }).then(val => {
        this.createChart(this.projects);
      });
    }
  },
  watch: {
    projects() {
      if (this.projects) {
        //this.createChart();
        void Promise.resolve((resolve: any) => {
          resolve(this.projects);
        }).then(() => {
          this.createChart(this.projects);
        });
      }
    }
  },
  methods: {
    createChart(data: any) {
      this.chart = new Chart(this.$refs.stackedChart as HTMLCanvasElement, {
        type: 'horizontalBar',

        data: {
          labels: createLabelArray(data).economic_sectors,

          datasets: [
            {
              label: 'Projects by sector',
              data: createDataArray(
                createLabelArray(data).economic_sectors,
                'economy_sector',
                data
              ) as number[],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ],
            xAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
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
