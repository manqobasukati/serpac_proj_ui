<template>
  <div class="tw-flex tw-flex-row">
    <div class="tw-flex tw-w-1/8 tw-flex-col tw-pt-24 tw-pl-8">
      <div class="tw-text-3xl tw-font-thin">Users</div>
    </div>
    <lane name="Admin Users" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Lane from 'src/components/Admin/Inbox/Lane.vue';

export default Vue.extend({
  name: 'Users',
  components: {
    Lane
  }
});
</script>
