<template>
  <div>
    <section-header header="Section 2 - Project value" />

    <div class="row">
      <div class="col"></div>
      <div class="col-6 q-ml-lg">
        <form-render FormSection="project_value" />
       
      </div>
      <div class="col"></div>
    </div>
    <navigate-sections />
  </div>
</template>

<script lang="ts">
import SectionHeader from './SectionHeader.vue';
import NavigateSections from './NavigateSections.vue';
import FormRender from './FormRender.vue';

import { SectionsMixin } from 'src/mixins/SectionsMixin';

import Vue from 'vue';
export default Vue.extend({
  mixins: [SectionsMixin],
  components: {
    FormRender,
    SectionHeader,
    NavigateSections
  },
  name: 'Section2'
});
</script>
