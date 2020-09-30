<template>
  <div>
    <q-card class="q-mt-lg" v-if="formD" square>
      <q-card-section>
        <div v-for="(data, key) in formD[FormSection]" :key="key">
          <div v-if="data.type === 'input'" class="q-mb-sm">
            <q-input
              :label="data.label"
              v-model="data.model"
              @input="updateFormData()"
            />
          </div>

          <div v-if="data.type === 'select'" class="q-mb-sm">
            <q-select
              v-model="data.model"
              :options="data.options"
              :label="data.label"
              @input="updateFormData()"
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
              @input="updateFormData()"
            />
          </div>
          <div v-if="data.type === 'date'" class="q-mb-sm">
            <q-input filled v-model="data.model" mask="date" :rules="['date']">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    ref="qDateProxy"
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="data.model">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div v-if="Array.isArray(data)">
            <div v-for="(array_data, key) in data" :key="key">
              <div class="row" v-if="array_data.nested">
                <div class="col" v-if="array_data.type === 'input'">
                  <q-input
                    :label="array_data.label"
                    v-model="array_data.model"
                    @input="updateFormData()"
                  />
                </div>
                <div
                  class="col"
                  v-for="(nested, key) in array_data.nested"
                  :key="key"
                >
                  <div class="col" v-if="nested.type === 'input'">
                    <q-input
                      :label="nested.label"
                      v-model="nested.model"
                      @input="updateFormData()"
                    />
                  </div>

                  <div v-if="nested.type === 'select'" class="col q-mb-sm">
                    <q-select
                      v-model="nested.model"
                      :options="nested.options"
                      :label="nested.label"
                      @input="updateFormData()"
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
                      @input="updateFormData()"
                    />
                  </div>

                  <div v-if="nested.type === 'date'" class="q-mb-sm">
                    <q-input
                      v-model="nested.model"
                      mask="date"
                      :rules="['date']"
                    >
                      <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                          <q-popup-proxy
                            ref="qDateProxy"
                            transition-show="scale"
                            transition-hide="scale"
                          >
                            <q-date v-model="nested.model">
                              <div class="row items-center justify-end">
                                <q-btn
                                  v-close-popup
                                  label="Close"
                                  color="primary"
                                  flat
                                />
                              </div>
                            </q-date>
                          </q-popup-proxy>
                        </q-icon>
                      </template>
                    </q-input>
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

export default Vue.extend({
  name: 'FormRender',
  props: ['FormSection', 'formD'],
  methods: {
    updateFormData() {
      this.$emit('updateFormData', this.formD);
    }
  }
});
</script>
