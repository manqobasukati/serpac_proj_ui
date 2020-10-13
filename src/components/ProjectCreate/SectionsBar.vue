<template>
  <div>
    <div class="tw-flex tw-flex-row">
      <div class="w-32 tw-mr-2" v-for="(section, key) in sectionData" :key="key">
        <div
          :class="{ 'tw-bg-pink-200': section.active }"
          class="tw-flex tw-items-center tw-justify-center tw-px-8 tw-py-4 tw-w-full tw-bg-pink-100 tw-rounded-lg"
        >
          <p class="tw-text-lg tw-font-bold tw-text-red-400">
            {{ section.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { SimpleSections } from 'src/core/Additional/SectionDescriptions';

export default Vue.extend({
  name: 'SectionsBar',
  data() {
    return {
      sectionData: SimpleSections
    };
  }
});
</script>
