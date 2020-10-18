<template>
  <div>
    <div
      class="tw-w-full tw-h-lg tw-bg-gray-200 tw-shadow-md tw-rounded-xlg tw-px-3"
    >
      <div class="tw-pt-10">
        <canvas ref="stackedChart"></canvas>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Chart from 'chart.js';
import { createLabelArray } from 'src/core/handlers/graph';

export default Vue.extend({
  name: 'LineChart',
  mounted() {
    //if (this.projects) {
    this.createChart();
    //}
  },

  props: ['projects'],
  methods: {
    createChart() {
      this.chart = new Chart(this.$refs.stackedChart as HTMLCanvasElement, {
        type: 'line',
        data: {
          labels: createLabelArray(this.projects).months_of_the_year,
          datasets: [
            {
              label: 'Projects created over time',
              data: [3, 14, 5, 2, 4, 4, 6, 8, 3, 6, 10, 2],
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
