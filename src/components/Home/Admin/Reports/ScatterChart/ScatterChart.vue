<template>
  <div
    class="tw-w-full tw-h-lg tw-bg-gray-200 tw-shadow-md tw-rounded-xlg tw-px-3"
  >
    <svg id="my_dataviz" class="tw-ml-10 tw-p-1" width="400" height="400"></svg>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Chart from 'chart.js';
import * as d3 from 'd3';
import { json, schemeBlues } from 'd3';
import { geoCentroid } from 'd3-geo';

import { ProjectModel } from 'src/core/Models/ProjectModel';

import Tinkhundla from '../../../../../mixins/Tinkhundla';

import region from './../../../.././../core/geojson/eswatini_region_layer.json';

import { transformGeojson } from './../../../../../core/handlers/map';

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

      void d3
        .json('http://0.0.0.0:8000/regions_na.json')
        .then(val => {
          console.log('PROJECTS', this.projects);
          transformGeojson(val, this.projects);
          this.ready(val);
        })
        .catch(e => {
          console.log('Error', e);
        });
    },
    ready(topo: any, projection_?: any) {
      let center = geoCentroid(topo);

      const width = this.svg.attr('width');
      const height = this.svg.attr('height');
      let scale = 150;
      let offset = [width / 2, height / 2];
      let projection = d3
        .geoMercator()
        .scale(scale)
        .center(center)
        .translate(offset as [number, number]);

      let path = d3.geoPath().projection(projection);
      const bounds = path.bounds(topo);

      let hscale = (scale * width) / (bounds[1][0] - bounds[0][0]);
      let vscale = (scale * height) / (bounds[1][1] - bounds[0][1]);
      scale = hscale < vscale ? hscale : vscale;
      offset = [
        width - (bounds[0][0] + bounds[1][0]) / 2,
        height - (bounds[0][1] + bounds[1][1]) / 2
      ];

      projection = d3
        .geoMercator()
        .center(center)
        .scale(scale)
        .translate(offset as [number, number]);
      path = path.projection(projection);

      this.svg
        .append('g')
        .selectAll('path')
        .data(topo.features)
        .enter()
        .append('path')
        // draw each country
        .attr('d', d3.geoPath().projection(projection))
        // set the color of each country
        .style('stroke', 'rgba(255, 99, 132, 1)')
        .attr('fill', 'rgba(255, 99, 132, 0.2)');
    },
    createChart() {
      this.chart = new Chart(this.$refs.scatterChart as HTMLCanvasElement, {
        type: 'scatter',
        data: {
          datasets: [
            {
              label: 'Scatter Dataset',

              data: Tinkhundla.map(val => {
                return {
                  x: val.center.geometry.coordinates[0],

                  y: val.center.geometry.coordinates[1]
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
