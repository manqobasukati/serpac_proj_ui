<template>
  <div class="tw-flex tw-flex-row">
    <div class="tw-flex tw-flex-row" v-if="projects">
      <div
        v-for="(high, key) in Highlights"
        :key="key"
        class=" tw-inline-flex tw-w-3/4 tw-flex-col tw-items-center tw-justify-center tw-px-10 tw-pt-3 tw-pb-1  tw-bg-gray-200 tw-shadow-md tw-rounded-lg tw-mx-2"
      >
        <p class="tw-text-2xl tw-font-thin">
          {{ high.value(projects) | formMoney }}
        </p>
        <p class="tw-text-xl tw-font-light">{{ high.name }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { FILTERS } from 'src/core/helpers/filters';
import Vue from 'vue';

import { Highlights } from './Highlights';

export default Vue.extend({
  name: 'HighlightsBar',
  props: ['projects'],
  data() {
    return {
      Highlights
    };
  },
  watch: {
    projects() {
      if (this.projects) {
        console.log('Projects', this.projects);
        void Promise.resolve((resolve: any, reject: any) => {
          resolve(this.projects);
        });
      }
    }
  },
  filters: {
    ...FILTERS
  }
});
</script>
