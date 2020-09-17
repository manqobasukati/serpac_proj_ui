<template>
  <div>
    <q-card class="q-mt-lg" square>
      <q-card-section>
        <div v-for="(data, key) in formData[FormSection]" :key="key">
          <div v-if="data.type === 'input'">
            <q-input :label="data.label" v-model="data.model" />
          </div>
          <div v-if="data.type === 'select'">
            <q-select
              v-model="data.model"
              :options="data.options"
              :label="data.label"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { SectionsMixin } from 'src/mixins/SectionsMixin';

export default Vue.extend({
  name: 'FormRender',
  props: ['FormSection'],
  mixins: [SectionsMixin]
});
</script>
