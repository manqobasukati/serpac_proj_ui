<template>
  <div>
    <div
      class="tw-w-xxlg tw-h-full tw-bg-white tw-shadow tw-rounded-lg tw-flex tw-flex-col tw-p-4"
    >
      <div class="tw-flex tw-flex-col">
        <div class="tw-text-md tw-font-medium">Project Phases</div>
        <div v-for="(phase, key) in FormData.project_timelines" :key="key">
          <div class="tw-flex tw-flex-col">
            <div class="tw-flex tw-flex-row tw-p-2">
              <input
                type="text"
                v-model="phase.name"
                class="proj-form-input tw-w-full tw-h-8  tw-text-sm tw-m-1"
                placeholder="Phase name"
              />
              <input
                type="date"
                v-model="phase.start_date"
                class="proj-form-input tw-w-full tw-h-8  tw-text-sm tw-m-1"
                placeholder="Start date"
              />
              <input
                type="date"
                v-model="phase.end_data"
                class="proj-form-input tw-w-full tw-h-8  tw-text-sm tw-m-1"
                placeholder="End data"
              />
            </div>
            <div class="tw-flex tw-flex-col tw-p-3 tw-ml-10">
              <div class="tw-flex tw-flex-row">
                <q-select
                  multiple
                  use-chips
                  map-options
                  :disable="!phase.name"
                  v-model="selectedFields"
                  @input="selectField(phase.name)"
                  :options="selectOptions"
                  type="text"
                  borderless
                  dense
                  class="proj-form-input  tw-h-10  tw-text-sm tw-m-1"
                  label="Select fields relevent to phase"
                />
              </div>
              <div
                v-for="(single_meta, key) in phase.meta"
                :key="key"
                class="tw-flex tw-flex-col"
              >
                <div class="tw-flex tw-flex-col tw-p-2">
                  <div class="tw-text-xs tw-font-semibold">
                    {{ single_meta.name | removeUnderscore | capitaliseWords }}
                  </div>
                  <input
                    type="text"
                    v-model="single_meta.value"
                    class="proj-form-input tw-w-full tw-h-8  tw-text-sm tw-m-1"
                    :placeholder="single_meta.name"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tw-flex tw-flex-row tw-justify-end tw-p-2">
          <div
            @click="addPhase"
            class="tw-rounded-full tw-shadow tw-px-2 tw-w-8"
          >
            <q-icon name="add" />
          </div>
        </div>
        <div class="tw-flex tw-flex-row tw-justify-end">
          <div class="">
            <button
              @click="Save()"
              class="tw-bg-pink-100   tw-text-sm tw-text-red-400  tw-rounded-md tw-p-2 tw-mr-2"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { FILTERS } from './../../core/helpers/filters';

export default Vue.extend({
  name: 'SectionFive',
  data() {
    return {
      selectOptions: ['temporal_jobs', 'permanent_jobs', 'total_inv_value'],
      selectedFields: [],
      FormData: {
        project_timelines: [
          {
            name: '',
            start_date: '',
            end_data: '',
            meta: [] as [] | any
          }
        ]
      }
    };
  },
  filters: {
    ...FILTERS
  },
  methods: {
    selectField(phase_name: string) {
      console.log(phase_name, this.selectedFields);
      this.FormData.project_timelines.forEach(val => {
        if (val.name === phase_name) {
          if (this.selectedFields.length > 0) {
            const last = this.selectedFields[this.selectedFields.length - 1];
            val.meta.push({
              name: last,
              value: 0
            });
          }
        }
      });
    },
    addPhase() {
      this.FormData.project_timelines.push({
        name: '',
        start_date: '',
        end_data: '',
        meta: []
      });
    },
    Save() {
      this.$emit('updateForm', this.FormData);
    }
  }
});
</script>
