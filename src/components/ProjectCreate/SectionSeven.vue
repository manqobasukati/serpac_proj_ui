<template>
  <div>
    <div
      class="tw-w-xxlg tw-h-56 tw-bg-white tw-shadow tw-rounded-lg tw-flex tw-flex-col tw-p-4"
    >
      <div class="tw-flex tw-flex-col">
        <div class="tw-text-md tw-font-medium">Project value</div>
        <div class="tw-flex tw-flex-row tw-p-2">
          <input
            type="text"
            class="proj-form-input tw-w-full tw-h-10  tw-text-sm tw-mx-1"
            placeholder="Issue here"
          />
          <q-select
            use-chips
            type="text"
            borderless
            class="proj-form-input tw-h-10  tw-text-sm tw-myx-1"
            label="project skills"
            dense
          />
        </div>
      </div>

      <div class="tw-flex tw-flex-row tw-justify-end">
        <div class="">
          <button
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
export default Vue.extend({
  name: 'SectionSeven'
});
</script>
