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
                  v-model="phase.selected_fields"
                  @add="selectField(phase.name)"
                  @remove="removeItem($event, phase.name)"
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
import { get_hints } from 'src/core/helpers/hints';

export default Vue.extend({
  name: 'SectionFive',
  props: ['context', 'FormD'],
  data() {
    return {
      selectOptions: null as null | string[],
      currentPhase: null as null | any,
      selectedFields: [],
      FormData: {
        project_timelines: [
          {
            name: '',
            start_date: '',
            selected_fields: [] as [] | any,
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
      this.asignSelectedFields();
      console.log('watching', this.FormData);
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

    this.getOptions();
    this.FormData = this.FormD;
    this.asignSelectedFields();
    console.log('mounted', this.FormData);
  },

  filters: {
    ...FILTERS
  },
  methods: {
    removeItem(remove: any, phase_name: any) {
      console.log('1', remove, phase_name);
      this.FormData.project_timelines.forEach(val => {
        if (val.name === phase_name) {
          if (val.selected_fields.length > 0) {
          
            val.meta.splice(remove.index, 1);
          }
        }
      });
    },
    asignSelectedFields() {
      this.FormData.project_timelines.forEach(val => {
        val['selected_fields'] = [];
        val.meta.forEach((element: any) => {
          val.selected_fields.push(element.name);
        });
      });
    },
    getOptions() {
      get_static()
        .then(val => {
          this.selectOptions = val['relevant_fields_phases'];
        })
        .catch(e => {
          console.log(e);
        });
    },
    addHint(section: string, field_name: string) {
      const action = `${MODULES.PROJECT_CREATE}/${PROJECT_CREATE_ACTIONS.ADD_HINT}`;

      get_hints()
        .then((val: any) => {
          const hint = val[section].find((v: HintInterface) => {
            return v.field_name === field_name;
          });

          this.$store.dispatch(action, hint).catch(e => {
            console.log(e);
          });
        })
        .catch(e => {
          console.log(e);
        });
    },
    selectField(phase_name: string) {
      console.log('phasing', phase_name);
      this.FormData.project_timelines.forEach(val => {
        if (val.name === phase_name) {
          if (val.selected_fields.length > 0) {
            const last = val.selected_fields[val.selected_fields.length - 1];
            val.meta.push({
              name: last,
              value: 0
            });
            //this.asignSelectedFields();
          }
        }
      });
    },
    addPhase() {
      this.FormData.project_timelines.push({
        name: '',
        start_date: '',
        end_data: '',
        selected_fields: [],
        meta: []
      });
    },
    Save() {
      this.$emit('updateForm', this.FormData);
    }
  }
});
</script>
