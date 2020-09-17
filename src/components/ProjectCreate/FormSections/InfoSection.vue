<template>
  <div>
    <section-header header="Info Section" />
    <navigate-sections />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import SectionHeader from './SectionHeader.vue';
import NavigateSections from './NavigateSections.vue';

export default Vue.extend({
  components: {
    SectionHeader,
    NavigateSections
  },
  name: 'InfoSection'
});
</script>
