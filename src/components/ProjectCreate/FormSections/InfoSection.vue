<template>
  <div>
    <section-header header="Info Section" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import SectionHeader from './SectionHeader.vue';

export default Vue.extend({
  components: {
    SectionHeader
  },
  name: 'InfoSection'
});
</script>
