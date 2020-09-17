<template>
  <div>
    <section-header header="Section 1 - Give project description" />

    <div class="row">
      <div class="col"></div>
      <div class="col-6 q-ml-lg">
        <q-card class="q-mt-lg" square>
          <q-card-section>
          

            <div v-for="(data, key) in formData.description" :key="key">
              <div v-if="data.type === 'input'">
                <q-input :label="data.label" v-model="data.model" />
              </div>
            </div>
          </q-card-section>
        </q-card>

        <q-card class="q-mt-lg" square>
          <q-card-section>
            <q-input
              label="Is it a totally new project or extension.."
              v-model="formData.project_description.project_existense"
            />
            <q-input
              label="Name of company investing"
              v-model="formData.project_description.name_of_investor"
            />
          </q-card-section>
        </q-card>
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

import { SectionsMixin } from 'src/mixins/SectionsMixin';

export default Vue.extend({
  name: 'Section1',
  mixins: [SectionsMixin],

  components: {
    SectionHeader,
    NavigateSections,
    SaveButton
  }
});
</script>
e
