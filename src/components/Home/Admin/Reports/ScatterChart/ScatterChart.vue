<template>
  <div>
    <div
      class="tw-w-full tw-h-lg tw-bg-gray-200 tw-shadow-md tw-rounded-xlg tw-px-3"
    >
      <div class="tw-pt-10">
        here
        <svg id="my_dataviz" width="400" height="300"></svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Chart from 'chart.js';
import * as d3 from 'd3';
import { schemeBlues, queue } from 'd3';

import { ProjectModel } from 'src/core/Models/ProjectModel';

import Tinkhundla from '../../../../../mixins/Tinkhundla';

import region from './../../../.././../core/geojson/eswatini_region_layer.json';

export default Vue.extend({
  name: 'LineChart',
  props: ['projects'],
  mounted() {
    this.loadSvg();
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
        .scale(70)
        .center([0, 20])
        .translate([width / 2, height / 2]);

      // // Data and color scale
      //const data = d3.map();
      const colorScale = d3
        .scaleThreshold()
        .domain([100000, 1000000, 10000000, 30000000, 100000000, 500000000])
        .range(schemeBlues[7]);

      // // Load external data and boot
      let json;


      void d3
        .json('http://192.168.2.11:8000/inkhundla.json')
        .then(val => {
          console.log('Features', val);
          json = val;
          this.ready(json, projection);
        })
        .catch(e => {
          console.log('Error', e);
        });

      // void d3
      //   .csv(
      //     'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world_population.csv'
      //   )
      //   .then(val => {});
    },
    ready(topo: any, projection: any) {
      // Draw the map
      console.log('Nothin', topo);
      this.svg
        .append('g')
        .selectAll('path')
        .data(topo.features)
        .enter()
        .append('path')
        // draw each country
        .attr('d', d3.geoPath().projection(projection))
        // set the color of each country
        .attr('fill', 'rgba(255, 99, 132, 0.2)');

      console.log('Top', topo);
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
