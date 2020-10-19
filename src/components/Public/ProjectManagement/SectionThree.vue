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
        />
        <input
          type="text"
          class="proj-form-input tw-w-full tw-h-8  tw-text-sm tw-my-1"
          placeholder="Permanent jobs"
          v-model="FormData.expected_jobs.permanent_jobs"
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
import Vue from 'vue';
export default Vue.extend({
  name: 'SectionFour',
  watch: {
    FormD() {
      this.FormData = this.FormD;
    }
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
    Save() {
      this.$emit('updateForm', this.FormData);
    }
  }
});
</script>
