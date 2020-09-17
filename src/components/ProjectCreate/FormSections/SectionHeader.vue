<template>
  <div class="text-h6" >{{ section }}</div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'SectionHeader',
  props: ['section']
});
</script>
