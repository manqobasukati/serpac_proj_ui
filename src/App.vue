<template>
  <div id="q-app" class="tw-w-screen tw-h-screen tw-overflow-hidden">
    <router-view class="tw-h-full tw-w-full"/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

import './assets/css/tailwind.css'

export default Vue.extend({
  name: 'App'
});
</script>


