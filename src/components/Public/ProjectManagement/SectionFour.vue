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
                @focus="addHint('section_4', 'project_phase')"
                class="proj-form-input tw-w-full tw-h-8  tw-text-sm tw-m-1"
                placeholder="Phase name"
                :disabled="context === 'admin_inbox'"
              />
              <input
                type="date"
                v-model="phase.start_date"
                @focus="addHint('section_4', 'project_start_date')"
                class="proj-form-input tw-w-full tw-h-8  tw-text-sm tw-m-1"
                placeholder="Start date"
                :disabled="context === 'admin_inbox'"
              />
              <input
                type="date"
                v-model="phase.end_data"
                @focus="addHint('section_4', 'project_phase_milestones')"
                class="proj-form-input tw-w-full tw-h-8  tw-text-sm tw-m-1"
                placeholder="End data"
                :disabled="context === 'admin_inbox'"
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
                  @focus="addHint('section_4', 'project_phase_milestones')"
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
                    @focus="addHint('section_4', 'project_temporal_jobs')"
                    v-model="single_meta.value"
                    :disabled="context === 'admin_inbox'"
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
              v-if="context !== 'admin_inbox'"
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
import { FILTERS } from 'src/core/helpers/filters';
import { MODULES } from 'src/store';
import { PROJECT_CREATE_ACTIONS } from 'src/store/project_create/actions';
import { HintInterface } from 'src/store/project_create/state';
import { hints } from './hints';
import { get_static } from 'src/core/Additional/Contstants';

export default Vue.extend({
  name: 'SectionFive',
  props: ['context', 'FormD'],
  data() {
    return {
      selectOptions: null as null | string[],
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
  watch: {
    FormD() {
      this.FormData = this.FormD;
    }
  },
  mounted() {
    get_static()
      .then(val => {
        this.selectOptions = val['economic_sectors'];
     
      })
      .catch(e => {
        console.log(e);
      });
    this.FormData = this.FormD;
    this.FormData = this.FormD;
    this.getOptions();
  },

  filters: {
    ...FILTERS
  },
  methods: {
    getOptions() {
      get_static()
        .then(val => {
          this.selectOptions = val['relevant_fields_phases'];
          console.log(val);
        })
        .catch(e => {
          console.log(e);
        });
    },
    addHint(section: string, field_name: string) {
      const action = `${MODULES.PROJECT_CREATE}/${PROJECT_CREATE_ACTIONS.ADD_HINT}`;

      const hint = hints[section].find((val: HintInterface) => {
        return val.field_name === field_name;
      });
      this.$store
        .dispatch(action, hint)
        .then(val => {
          console.log('Val', val);
        })
        .catch(e => {
          console.log(e);
        });
    },
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
