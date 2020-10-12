<template>
  <div
    class="tw-w-full tw-h-lg tw-bg-gray-200 tw-shadow-md tw-rounded-xlg tw-px-3"
  >
    <div class="tw-flex tw-flex-col">
      <div class="tw-flex tw-flex-row tw-mt-3">
        <toggle-button class="tw-ml-32" v-on:toggleValue="changeMap" />
      </div>
      <svg
        id="my_dataviz"
        class="tw-ml-10 -tw-mt-10"
        width="400"
        height="350"
      ></svg>
    </div>
  </div>
</template>
x
<script lang="ts">
import Vue from 'vue';
import Chart from 'chart.js';
import * as d3 from 'd3';
import { json, schemeBlues } from 'd3';
import { geoCentroid } from 'd3-geo';

import { ProjectModel } from 'src/core/Models/ProjectModel';

import Tinkhundla from '../../../../../mixins/Tinkhundla';

import region from './../../../.././../core/geojson/eswatini_region_layer.json';

import region_na from './../../../.././../core/geojson/regions_na.json';
import inkhundla_na from './../../../.././../core/geojson/inkhundla_na.json';

import {
  transformGeojson,
  convertToRange,
  getMin,
  getMax
} from './../../../../../core/handlers/map';

import ToggleButton from './ToggleButton.vue';

export default Vue.extend({
  name: 'LineChart',
  props: ['projects'],
  components: {
    ToggleButton
  },
  mounted() {
    this.loadSvg();
    // this.createChart();
  },
  methods: {
    changeMap(data: any) {
      if (data) {
      
        this.layer = inkhundla_na;
        this.svg.selectAll('*').remove();
        this.loadSvg();
      } else {
        this.layer = region_na;
        this.svg.selectAll('*').remove();
        this.loadSvg();
      }
    },
    loadSvg() {
      this.svg = d3.select('svg');

      let val: unknown = this.layer;

      val = transformGeojson(val, this.projects);

      this.ready(val);
    },
    ready(topo: any, projection_?: any) {
      let center = geoCentroid(topo);

      const min = getMin(topo.features, 'number_of_projects');
      const max = getMax(topo.features, 'number_of_projects');

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

      let hscale = (scale * width * 0.9) / (bounds[1][0] - bounds[0][0]);
      let vscale = (scale * height * 0.9) / (bounds[1][1] - bounds[0][1]);
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
        .attr('fill', (d: any) => {
          const v = d.properties.number_of_projects;
          const opacity = convertToRange(v, [0, max], [0, 1]);

          return `rgba(255, 99, 132,${opacity})`;
        });
    }
  },
  data() {
    return {
      svg: null as null | any,
      toggleLayer: null as null | any,
      layer: region_na
    };
  }
});
</script>
