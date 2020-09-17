<template>
  <div>
    <section-header header="Section 3 - Project funding" />
    <div class="row">
      <div class="col"></div>
      <div class="col-6 q-ml-lg">
        <q-card class="q-mt-lg" square>
          <q-card-section>
            <q-input label="Is funding secured for the project?" />
            <q-input label="Indicate % funding secured" />
            <q-input
              label="Is this local or FDI?"
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
  name: 'Section3'
});
</script>
