<template>
  <div>
    <top-navigation />
    <div class="tw-mt-10">
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
