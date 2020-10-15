<template>
  <div>
    <div
      class="tw-w-xxlg tw-h-full tw-bg-white tw-shadow tw-rounded-lg tw-flex tw-flex-col tw-p-4 "
    >
      <div class="tw-flex tw-flex-col">
        <div class="tw-text-md tw-font-medium">
          Additional comments about project
        </div>
        <div class="tw-flex tw-flex-col tw-p-2">
          <textarea
            class="proj-form-input tw-mt-2  tw-text-sm tw-h-20"
            placeholder="Comment 1 "
          />
          <textarea
            class="proj-form-input tw-mt-2  tw-text-sm tw-h-20"
            placeholder="Comment 2"
          />
        </div>
        <div class="tw-flex tw-flex-row tw-justify-end">
          <div class="">
            <button
              @click="sign_up()"
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
  name: 'SectionSeven'
});
</script>
