<template>
  <div class="text-h6" >{{ header }}</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'SectionHeader',
  props: ['header']
});
</script>
