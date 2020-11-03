<template>
  <div
    class="tw-w-xxlg tw-h-full tw-bg-white tw-shadow tw-rounded-lg tw-flex tw-flex-col tw-p-4"
  >
    <div class="tw-flex tw-flex-col">
      <div class="tw-text-md tw-font-medium">Opportunities</div>
      <div class="tw-flex tw-flex-col tw-p-2">
        <q-select
          multiple
          use-chips
          type="text"
          borderless
          :options="ProjectSkillsOptions"
          v-model="FormData.opportunities.project_skills"
          class="proj-form-input tw-h-10 tw-my-1"
          label="project skills"
          dense
          @focus="addHint('section_5', 'project_project_skills')"
          :disabled="context === 'admin_inbox'"
        />
        <q-select
          multiple
          use-chips
          type="text"
          borderless
          :options="LocallySourcedInputsOptions"
          @focus="addHint('section_5', 'project_locally_sourced_inputs')"
          v-model="FormData.opportunities.local_sourced_inputs"
          class="proj-form-input tw-h-10  tw-my-1"
          label="Locally sourced inputs"
          :disabled="context === 'admin_inbox'"
          dense
        />
        <q-select
          multiple
          use-chips
          type="text"
          borderless
          :options="ExternallySourcedInputsOptions"
          v-model="FormData.opportunities.external_sourced_inputs"
          @focus="addHint('section_5', 'project_externally_sourced_inputs')"
          class="proj-form-input tw-h-10  tw-my-1"
          label="Externally sourced inputs"
          :disabled="context === 'admin_inbox'"
          dense
        />
      </div>
      <div class="tw-flex tw-flex-row tw-justify-end">
        <div class="">
          <button
            @click="Save()"
            v-if="context !== 'admin_inbox'"
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

import { get_static } from 'src/core/Additional/Contstants';
import { MODULES } from 'src/store';
import { PROJECT_CREATE_ACTIONS } from 'src/store/project_create/actions';
import { HintInterface } from 'src/store/project_create/state';
import { hints } from './hints';
import { get_hints } from 'src/core/helpers/hints';

export default Vue.extend({
  name: 'SectionSix',
  props: ['context', 'FormD'],
  data() {
    return {
      ExternallySourcedInputsOptions: null as null | string[],
      LocallySourcedInputsOptions: null as null | string[],
      ProjectSkillsOptions: null as null | string[],
      FormData: {
        opportunities: {
          project_skills: [],
          local_sourced_inputs: [],
          external_sourced_inputs: []
        }
      }
    };
  },
  watch: {
    FormD() {
      this.FormData = this.FormD;
    }
  },
  mounted() {
    this.getOptions();
    this.FormData = this.FormD;
  },
  methods: {
    getOptions() {
      get_static()
        .then(val => {
          this.ProjectSkillsOptions = val['project_skills'];
          this.LocallySourcedInputsOptions = val['locally_sourced_inputs'];
          this.ExternallySourcedInputsOptions =
            val['externally_sourced_inputs'];

          console.log(val);
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
