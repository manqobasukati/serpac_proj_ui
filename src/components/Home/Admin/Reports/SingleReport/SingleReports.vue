<template>
  <div>
    <div class="row">
      <div class="tw-rounded-full tw-bg-gray-200">
        <router-link to="/admin/reports/all">
          <q-icon name="arrow_back" class="tw-text-4xl " />
        </router-link>
        <q-tooltip>
        Back to results
        </q-tooltip>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'SingleReports'
});
</script>
