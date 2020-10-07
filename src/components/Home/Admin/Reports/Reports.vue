<template>
  <div>
    <div class="row report__page">
      <div class="col-2">
        <data-point-filter />
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import DataPointFilter from './DataPointFilter.vue';

export default Vue.extend({
  name: 'Reports',
  components: {
    DataPointFilter
  }
});
</script>

<style scoped>
div.report__page {
  height: 85vh;
  background-color: #fbfeff;
}
</style>
