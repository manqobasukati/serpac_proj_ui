<template>
  <div>
    <q-card class="q-mt-lg" v-if="form_data" square>
      <q-card-section>
        <div v-for="(data, key) in form_data[FormSection]" :key="key">
          <div v-if="data.type === 'input'" class="q-mb-sm">
            <q-input :label="data.label" v-model="data.model" @input="updateFormData()" />
          </div>

          <div v-if="data.type === 'select'" class="q-mb-sm">
            <q-select
              v-model="data.model"
              :options="data.options"
              :label="data.label"
            />
          </div>
          <div v-if="data.type === 'multiple-select'" class="q-mb-sm">
            <q-select
              filled
              v-model="data.model"
              multiple
              :options="data.options"
              use-chips
              stack-label
              :label="data.label"
            />
          </div>
          <div v-if="Array.isArray(data)">
            <div v-for="(array_data, key) in data" :key="key">
              <div class="row" v-if="array_data.nested">
                <div class="col" v-if="array_data.type === 'input'">
                  <q-input
                    :label="array_data.label"
                    v-model="array_data.model"
                  />
                </div>
                <div
                  class="col"
                  v-for="(nested, key) in array_data.nested"
                  :key="key"
                >
                  <div class="col" v-if="nested.type === 'input'">
                    <q-input :label="nested.label" v-model="nested.model" />
                  </div>

                  <div v-if="nested.type === 'select'" class="col q-mb-sm">
                    <q-select
                      v-model="nested.model"
                      :options="nested.options"
                      :label="nested.label"
                    />
                  </div>
                  <div
                    v-if="nested.type === 'multiple-select'"
                    class="col q-mb-sm"
                  >
                    <q-select
                      filled
                      v-model="nested.model"
                      multiple
                      :options="nested.options"
                      use-chips
                      stack-label
                      :label="nested.label"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import { SectionsMixin } from 'src/mixins/SectionsMixin';
import { MODULES } from 'src/store';
import { ProjectCreateInterface } from 'src/store/project_create/state';
import { FormData } from 'src/mixins/FormData';
import { PROJECT_CREATE_MUTATIONS } from 'src/store/project_create/mutations';

export default Vue.extend({
  name: 'FormRender',
  props: ['FormSection'],
  data() {
    return {
      form_data:JSON.parse(JSON.stringify(FormData))
    };
  },
  methods: {
    updateFormData() {
      const mutaion = `${MODULES.PROJECT_CREATE}/${PROJECT_CREATE_MUTATIONS.UPDATE_FORM_DATA}`;
      this.$store.commit(mutaion, this.form_data);
    }
  },
  computed: {
    ...mapState(MODULES.PROJECT_CREATE, {
      formData(state: ProjectCreateInterface): unknown {
        //const data = JSON.parse(JSON.stringify(state.form_data));
        this.form_data = JSON.stringify(JSON.stringify(state.form_data))
        return JSON.stringify(JSON.stringify(state.form_data));
      }
    })
  }
});
</script>
