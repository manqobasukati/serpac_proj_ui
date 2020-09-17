<template>
  <div>
    <section-header header="Section 5 - Project Timelines" />
    <div class="row">
      <div class="col"></div>
      <div class="col-6 q-ml-lg">
        <q-card class="q-mt-lg" square>
          <q-card-section>
            <q-input
              label="List the key phases for project implementation including the expected start and finish dates "
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
  name: 'Section5'
});
</script>
