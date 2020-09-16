<template>
  <div>
    <section-header header="Section 1 - Give project description" />

    <div class="row">
      <div class="col"></div>
      <div class="col-6 q-ml-lg">
        <q-card class="q-mt-lg" square>
          <q-card-section>
            <q-input label="What is the project" />
            <q-input label="Where is the project happening " />
            <q-input label="Are you producing for local market or export" />
          </q-card-section>
        </q-card>

        <q-card class="q-mt-lg" square>
          <q-card-section>
            <q-input label="Is it a totally new project or extension.." />
            <q-input label="Name of company investing" />
          </q-card-section>
        </q-card>
      </div>
      <div class="col"></div>
    </div>

    <navigate-sections />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { FORM_FUNCTIONS } from 'src/core/helpers/form_generator';

import SectionHeader from './SectionHeader.vue';
import NavigateSections from './NavigateSections.vue';

export default Vue.extend({
  name: 'Section1',
  components: {
    SectionHeader,
    NavigateSections
  },
  methods: {
    ...FORM_FUNCTIONS
  }
});
</script>
e
