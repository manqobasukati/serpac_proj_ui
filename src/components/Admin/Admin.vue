<template>
  <div class="tw-flex tw-flex-row">
    <top-navigation />
    <div class=" tw-h-full">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import TopNavigation from './TopNavigation.vue';

export default Vue.extend({
  name: 'NewAdmin',
  components: {
    TopNavigation
  }
});
</script>
