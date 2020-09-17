<template>
  <div>
    <section-header header="Section 6 - MSME Opportunities" />
    <div class="row">
      <div class="col"></div>
      <div class="col-6 q-ml-lg">
        <q-card class="q-mt-lg" square>
          <q-card-section>
            <q-input label="What skills will be needed for the project?" />
            <q-input label="List key inputs that will be sourced locally" />
            <q-input label="Key inputs that will sourced externally" />
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
  name: 'Section6'
});
</script>
