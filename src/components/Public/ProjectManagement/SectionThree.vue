<template>
  <div
    class="tw-w-xxlg tw-h-48 tw-bg-white tw-shadow tw-rounded-lg tw-flex tw-flex-col tw-p-4"
  >
    <div class="tw-flex tw-flex-col">
      <div class="tw-text-md tw-font-medium">Expected jobs</div>
      <div class="tw-flex tw-flex-col tw-p-2">
        <input
          type="text"
          class="proj-form-input tw-w-full tw-h-8  tw-text-sm tw-my-1"
          placeholder="Temporal jobs"
          v-model="FormData.expected_jobs.temporal_jobs"
          :disabled="context === 'admin_inbox'"
          @focus="addHint('section_3', 'project_temporal_jobs')"
        />
        <input
          type="text"
          class="proj-form-input tw-w-full tw-h-8  tw-text-sm tw-my-1"
          placeholder="Permanent jobs"
          v-model="FormData.expected_jobs.permanent_jobs"
          @focus="addHint('section_3', 'project_temporal_jobs')"
          :disabled="context === 'admin_inbox'"
        />
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
</template>

<script lang="ts">
import { MODULES } from 'src/store';
import { PROJECT_CREATE_ACTIONS } from 'src/store/project_create/actions';
import { HintInterface } from 'src/store/project_create/state';
import Vue from 'vue';
import { hints } from './hints';
export default Vue.extend({
  name: 'SectionFour',
  watch: {
    FormD() {
      this.FormData = this.FormD;
    }
  },
  mounted() {
    this.FormData = this.FormD;
  },
  props: ['context', 'FormD'],
  data() {
    return {
      FormData: {
        expected_jobs: {
          temporal_jobs: 0,
          permanent_jobs: 0
        }
      }
    };
  },
  methods: {
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
    Save() {
      this.$emit('updateForm', this.FormData);
    }
  }
});
</script>
