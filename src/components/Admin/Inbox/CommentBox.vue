<template>
  <div
    class="tw-w-xxlg tw-h-full tw-bg-white tw-shadow tw-rounded-lg tw-flex tw-flex-col tw-p-4 tw-ml-2 tw-mt-4 "
  >
    <div class="tw-flex tw-flex-col">
      <div class="tw-text-md tw-font-medium">Comments</div>
      <div class="tw-flex tw-flex-row tw-p-2">
        <textarea
          type="text"
          class="proj-form-input tw-w-full tw-h-8 tw-text-sm"
          placeholder="Add comment here"
        />
      </div>
    </div>
    <div class="tw-flex tw-flex-row tw-justify-end">
      <div class="">
        <button
        
          class="tw-bg-pink-100   tw-text-sm tw-text-red-400  tw-rounded-md tw-p-1 tw-p-2 tw-mr-2"
        >
          add comment
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'CommentBox',
  props: ['section']
});
</script>
