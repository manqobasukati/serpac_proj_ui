<template>
  <div class="tw-flex tw-flex-row">
    <div v-if="projects">
     
      <div
        v-for="(high, key) in Highlights"
        :key="key"
        class="tw-w-40 tw-inline-flex tw-flex-col tw-space-y-1 tw-items-center tw-justify-center tw-px-10 tw-pt-3 tw-pb-1 tw-w-full tw-bg-gray-200 tw-shadow-md tw-rounded-lg"
      >
        <p class="tw-text-2xl tw-font-thin">{{ high.value(projects) }}</p>
        <p class="tw-text-xl tw-font-light">{{ high.name }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
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
  mounted(){
    console.log('gsha', this.projects)
  },
  watch: {
    projects() {
      if (this.projects) {
        console.log('Projects', this.projects)
        void Promise.resolve((resolve: any, reject: any) => {
          resolve(this.projects);
        })
      }
    }
  }
});
</script>
