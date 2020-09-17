<template>
  <div>
    <section-header header="Section 1 - Give project description" />

    <div class="row">
      <div class="col"></div>
      <div class="col-6 q-ml-lg">
          <form-render FormSection="project_description" />
      </div>
      <div class="col"></div>
    </div>
    <save-button />

    <navigate-sections />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import SectionHeader from './SectionHeader.vue';
import NavigateSections from './NavigateSections.vue';
import SaveButton from './SaveButton.vue';
import FormRender from './FormRender.vue'

import { SectionsMixin } from 'src/mixins/SectionsMixin';

export default Vue.extend({
  name: 'Section1',
  mixins: [SectionsMixin],
  components: {
    FormRender,
    SectionHeader,
    NavigateSections,
    SaveButton
  }
});
</script>
e
