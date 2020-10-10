<template>
  <div>
    <div
      class="tw-w-full tw-h-lg tw-bg-gray-200 tw-shadow-md tw-rounded-xlg tw-px-3"
    >
      <div class="tw-pt-10">
        here
        <svg id="my_dataviz" width="400" height="300"></svg>
        <canvas
          ref="scatterChart"
          v-if="false"
          width="400"
          height="300"
        ></canvas>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Chart from 'chart.js';
import * as d3 from 'd3';
import { schemeBlues } from 'd3';

import { ProjectModel } from 'src/core/Models/ProjectModel';

import Tinkhundla from '../../../../../mixins/Tinkhundla';

import region from './../../../.././../core/geojson/eswatini_region_layer.json';

export default Vue.extend({
  name: 'LineChart',
  props: ['projects'],
  mounted() {
    this.loadSvg();
    // this.createChart();
  },
  methods: {
    loadSvg() {
      this.svg = d3.select('svg');
      const width = this.svg.attr('width');
      const height = this.svg.attr('height');

      // Map and projection
      const path = d3.geoPath();
      const projection = d3
        .geoMercator()
        .scale(2900)
        //-31.1367, 26.3054
        .center([26.316667, -31.133333])
        .translate([width / 20, height / 0.8]);

      // https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson
      // http://192.168.8.105:8000/inkhundla.json
      //http://192.168.8.105:8000/eswatini_region_layer.json
      void d3
        .json('http://0.0.0.0:8000/ink.json')
        .then(val => {
          this.ready(val, projection);
        })
        .catch(e => {
          console.log('Error', e);
        });
    },
    ready(topo: any, projection: any) {
      this.svg
        .append('g')
        .selectAll('path')
        .data(topo.features)
        .enter()
        .append('path')
        // draw each country
        .attr('d', d3.geoPath().projection(projection))
        // set the color of each country
        .style('stroke', 'black')
        .attr('fill', 'rgba(255, 99, 132, 0.2)');
    },
    createChart() {
      this.chart = new Chart(this.$refs.scatterChart as HTMLCanvasElement, {
        type: 'scatter',
        data: {
          datasets: [
            {
              label: 'Scatter Dataset',
              // data: this.projects.map((val: ProjectModel) => {
              //   return {
              //     x: val?.project_description?.project_location?.coordinates[0],
              //     y: val?.project_description?.project_location?.coordinates[1]
              //   };
              // })
              data: Tinkhundla.map(val => {
                console.log(val.center.geometry.coordinates[1]);
                function mercator(x, y) {
                  return [x, Math.log(Math.tan(Math.PI / 4 + y / 2))];
                }

                return {
                  x: mercator(
                    val.center.geometry.coordinates[0],
                    val.center.geometry.coordinates[1]
                  )[0],
                  y: mercator(
                    val.center.geometry.coordinates[0],
                    val.center.geometry.coordinates[1]
                  )[1]
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
      chart: null as null | Chart,
      svg: null as null | any
    };
  }
});
</script>
