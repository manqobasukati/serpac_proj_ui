<template>
  <div class="tw-mt-24 tw-w-3/6">
    <user-card  />
  </div>
</template>

<script lang="ts">
import UserCard from 'src/components/Admin/Users/UserCard.vue';

import Vue from 'vue';
export default Vue.extend({
  name: 'Users',
  components: {
    UserCard
  }
});
</script>
