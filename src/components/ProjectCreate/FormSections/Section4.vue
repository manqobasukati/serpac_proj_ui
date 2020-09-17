<template>
  <div>
    <section-header header="Section 4 - Expected job on completion" />
    <div class="row">
      <div class="col"></div>
      <div class="col-6 q-ml-lg">
        <q-card class="q-mt-lg" square>
          <q-card-section>
            <q-input
              label="Total permanent jobs to be created on completion of project"
            />
            <q-input
              label="Also indicate the number of temporal and/ construction jobs to be created"
            />
          </q-card-section>
        </q-card>
      </div>
      <div class="col"></div>
    </div>
    <navigate-sections />
  </div>
</template>

<script lang="ts">
import SectionHeader from './SectionHeader.vue';
import NavigateSections from './NavigateSections.vue';

import Vue from 'vue';
export default Vue.extend({
  components: {
    SectionHeader,
    NavigateSections
  },
  name: 'Section4'
});
</script>
