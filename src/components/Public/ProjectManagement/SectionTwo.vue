<template>
  <div>
    <div
      class="tw-w-xxlg tw-h-full tw-bg-white tw-shadow tw-rounded-lg tw-flex tw-flex-col tw-p-4"
    >
      <div class="tw-flex tw-flex-col">
        <div class="tw-text-md tw-font-medium">Project value</div>
        <div class="tw-flex tw-flex-col tw-p-2">
          <input
            type="text"
            class="proj-form-input tw-w-full tw-h-8  tw-text-sm tw-my-1"
            v-model="FormData.project_value.total_inv_value"
            :disabled="context === 'admin_inbox'"
            placeholder="Total investment value ( E )"
            @focus="addHint('section_2', 'project_total_inv_value')"
          />
          <q-select
            borderless
            :options="fundingStatusOptions"
            class="proj-form-input tw-w-full tw-h-8  tw-text-sm tw-my-1"
            v-model="FormData.project_value.funding_status"
            :disabled="context === 'admin_inbox'"
            @focus="addHint('section_2', 'project_funding_status')"
            label="Funding status"
          />
          <input
            type="text"
            class="proj-form-input tw-w-full tw-h-8  tw-text-sm tw-my-1"
            v-model="FormData.project_value.percentage_of_funding"
            :disabled="context === 'admin_inbox'"
            @focus="addHint('section_2', 'project_percentage_of_funding')"
            placeholder="Percentage of funding ( % )"
          />
          <q-select
            borderless
            :options="projectScopeOptions"
            v-model="FormData.project_value.project_scope"
            :disabled="context === 'admin_inbox'"
            class="proj-form-input tw-w-full tw-h-8  tw-text-sm tw-my-1"
            @focus="addHint('section_2', 'project_scope')"
            label="Local or FDI"
          />
        </div>
      </div>

      <div class="tw-flex tw-flex-row tw-justify-end">
        <div class="">
          <button
            v-if="context !== 'admin_inbox'"
            @click="Save()"
            class="tw-bg-pink-100   tw-text-sm tw-text-red-400  tw-rounded-md  tw-p-2 tw-mr-2"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import {
  get_static,
  TinkhundlaOptions,
  TinkhundlaPolygons
} from 'src/core/Additional/Contstants';
import { MODULES } from 'src/store';
import { PROJECT_CREATE_ACTIONS } from 'src/store/project_create/actions';
import { HintInterface } from 'src/store/project_create/state';

import { hints } from './hints';
import { ContentModel } from 'src/core/Models/ContentModel';
import { get_hints } from 'src/core/helpers/hints';
export default Vue.extend({
  name: 'SectionTwo',
  watch: {
    FormD() {
      this.FormData = this.FormD;
    }
  },
  mounted() {
    this.FormData = this.FormD;
    this.getOptions();
    get_static()
      .then((val: ContentModel) => {
        this.projectScopeOptions = val['investment_scopes'];
        this.fundingStatusOptions = val['funding_status'];
      })
      .catch(e => {
        console.log(e);
      });
    this.FormData = this.FormD;
  },
  props: ['context', 'FormD'],
  data() {
    return {
      fundingStatusOptions: null as null | string[],
      projectScopeOptions: null as null | string[],
      FormData: {
        project_value: {
          total_inv_value: '',
          funding_status: '',
          percentage_of_funding: '',
          project_scope: ''
        }
      }
    };
  },
  methods: {
    getOptions() {
      get_static()
        .then(val => {
          console.log('Scopes', val);
          this.projectScopeOptions = val['investment_scopes'];
        })
        .catch(e => {
          console.log(e);
        });
    },
    addHint(section: string, field_name: string) {
      const action = `${MODULES.PROJECT_CREATE}/${PROJECT_CREATE_ACTIONS.ADD_HINT}`;

      get_hints()
        .then((val: any) => {
          console.log(val);
          const hint = val[section].find((v: HintInterface) => {
            return v.field_name === field_name;
          });

          this.$store
            .dispatch(action, hint)
            .then(val => {
              console.log('Val 1', val);
            })
            .catch(e => {
              console.log(e);
            });
        })
        .catch(e => {
          console.log(e);
        });
    },
    Save() {
      this.$emit('updateForm', this.FormData);
    }
  }
});
</script>


<style scoped>
input[type="text"]:disabled {
  color: black;
}

input[type="select"]:disabled{
  color:black
}

</style>
