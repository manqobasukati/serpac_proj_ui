<template>
  <div>
    <section-header
      header="Section 7 - Key Enablers necessary to fast-track implementation of project"
    />
    <div class="row">
      <div class="col"></div>
      <div class="col-6 q-ml-lg">
        <q-card class="q-mt-lg" square>
          <q-card-section>
            <q-input
              label="Provide list of key issues to be sorted to get the project going"
            />
             <q-input
              label="Provide list of key issues to be sorted to get the project going"
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
  name: 'Section7'
});
</script>
