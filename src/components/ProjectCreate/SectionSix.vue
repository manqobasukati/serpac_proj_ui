<template>
  <div>
    <div
      class="tw-w-xxlg tw-h-64 tw-bg-white tw-shadow tw-rounded-lg tw-flex tw-flex-col tw-p-4"
    >
      <div class="tw-flex tw-flex-col">
        <div class="tw-text-md tw-font-medium">Opportunities</div>
        <div class="tw-flex tw-flex-col tw-p-2">
          <q-select
            multiple
            use-chips
            type="text"
            borderless
            class="proj-form-input tw-h-10 tw-my-1"
            label="project skills"
            dense
          />
          <q-select
            multiple
            use-chips
            type="text"
            borderless
            class="proj-form-input tw-h-10  tw-my-1"
            label="project skills"
            dense
          />
          <q-select
            multiple
            use-chips
            type="text"
            borderless
            class="proj-form-input tw-h-10  tw-my-1"
            label="project skills"
            dense
          />
        </div>
        <div class="tw-flex tw-flex-row tw-justify-end">
          <div class="">
            <button
              class="tw-bg-pink-100   tw-text-sm tw-text-red-400  tw-rounded-md tw-p-1 tw-p-2 tw-mr-2"
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
export default Vue.extend({
  name: 'SectionSix'
});
</script>
