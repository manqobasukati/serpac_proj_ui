<template>
  <div>
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
            :disabled="context === 'admin_inbox'"
          />
          <q-select
            multiple
            use-chips
            type="text"
            borderless
            :options="LocallySourcedInputsOptions"
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import {
  ExternallySourcedInputsOptions,
  LocallySourcedInputsOptions,
  ProjectSkillsOptions
} from 'src/core/Additional/Contstants';

export default Vue.extend({
  name: 'SectionSix',
  props: ['context', 'FormD'],
  data() {
    return {
      ExternallySourcedInputsOptions,
      LocallySourcedInputsOptions,
      ProjectSkillsOptions,
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
    console.log('Section 5', this.FormD);
    this.FormData = this.FormD;
  },
  methods: {
    Save() {
      this.$emit('updateForm', this.FormData);
    }
  }
});
</script>
