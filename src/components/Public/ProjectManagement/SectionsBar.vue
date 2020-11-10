<template>
  <div>
    <div class="tw-flex tw-flex-row tw-justify-center ">
      <div
        class="w-42 tw-mr-2"
        v-for="(section, key) in sectionData"
        :key="key"
      >
        <div
          @click="selectSection(section.name)"
          :class="{ 'tw-bg-pink-200': section.active }"
          class="tw-flex tw-items-center tw-justify-center tw-px-8 tw-py-4 tw-w-full tw-bg-pink-100 tw-rounded-lg"
        >
          <p class="tw-flex  tw-text-xs tw-font-bold tw-text-red-400">
            {{ section.ui_name }}
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
  props: ['active_section'],
  data() {
    return {
      sectionData: SimpleSections
    };
  },
  watch: {
    active_section() {
      this.sectionData.forEach(val => {
        val.active = false;
      });

      this.sectionData.forEach(val => {
        if (val.name === this.active_section) {
          val.active = true;
        }
      });
    }
  },
  methods: {
    selectSection(section: string) {
      this.sectionData.forEach(val => {
        val.active = false;
      });

      this.sectionData.forEach(val => {
        if (val.name === section) {
          val.active = true;
        }
      });

      this.$emit('selectSection', section);
    }
  }
});
</script>
