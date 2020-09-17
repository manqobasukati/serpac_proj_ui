<template>
  <div>
    <section-header header="Section 2 - Project value" />

    <div class="row">
      <div class="col"></div>
      <div class="col-6 q-ml-lg">
        <q-card class="q-mt-lg" square>
          <q-card-section>
            <q-input
              label="What is the total value of the Investment to be made"
            />
              <q-input label="Total investment value" v-model="formData.project_value.total_inv_value" />
          </q-card-section>
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

import { SectionsMixin } from 'src/mixins/SectionsMixin';

import Vue from 'vue';
export default Vue.extend({
  mixins:[SectionsMixin],
  components: {
    SectionHeader,
    NavigateSections
  },

  name: 'Section2'
});
</script>
