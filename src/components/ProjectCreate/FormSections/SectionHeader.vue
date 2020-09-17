<template>
  <div class="text-h6">{{ sectionInfo.header || 'No header' }}</div>
</template>

<script lang="ts">
import Vue from 'vue';

import { SectionDescriptions } from 'src/core/Additional/SectionDescriptions';

export default Vue.extend({
  name: 'SectionHeader',
  props: ['section'],

  computed: {
    sectionInfo() {
      return SectionDescriptions[this.section as string];
    }
  },
  mounted() {
    console.log('Mounted')
   
  }
});
</script>
