<template>
  <div>
    <div
      class="tw-w-full tw-h-lg tw-bg-gray-200 tw-shadow-md tw-rounded-xlg tw-px-3"
    >
      <div class="tw-pt-10">
        <canvas ref="scatterChart"></canvas>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Chart from 'chart.js';

export default Vue.extend({
  name: 'LineChart',
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
              data: [
                {
                  x: -10,
                  y: 0
                },
                {
                  x: 0,
                  y: 10
                },
                {
                  x: 10,
                  y: 5
                }
              ]
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
