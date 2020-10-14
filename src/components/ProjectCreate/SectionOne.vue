<template>
  <div>
    <div
      class="tw-w-xxlg tw-h-lg tw-bg-white tw-shadow tw-rounded-lg tw-flex tw-flex-col tw-p-4 tw-mt-3"
    >
      <div class="tw-flex tw-flex-col">
        <div class="tw-text-md tw-font-medium">Project Decription</div>
        <div class="tw-flex tw-flex-row tw-p-2">
          <input
            type="text"
            class="proj-form-input tw-w-full tw-h-8 tw-text-sm"
            placeholder="Project title"
          />
          <input
            type="text"
            class="proj-form-input tw-ml-3  tw-text-sm"
            placeholder="Economy sector"
          />
          <input
            type="text"
            class="proj-form-input tw-ml-3"
            placeholder="Economy sector"
          />
        </div>
      </div>
      <div class="tw-flex tw-flex-col">
        <div class="tw-text-md tw-font-medium">Project location</div>
        <div class="tw-flex tw-flex-row tw-p-2">
          <input
            type="text"
            class="proj-form-input tw-w-full tw-h-8  tw-text-sm"
            placeholder="Region"
          />
          <input
            type="text"
            class="proj-form-input tw-ml-3  tw-text-sm"
            placeholder="Inkhundla"
          />
          <q-icon name="location_on" color="grey-8" class="tw-p-2" />
        </div>
      </div>
       <div class="tw-flex tw-flex-col">
        <div class="tw-text-md tw-font-medium">More</div>
        <div class="tw-flex tw-flex-col tw-p-2">
          <input
            type="text"
            class="proj-form-input tw-w-full tw-h-8  tw-text-sm"
            placeholder="Region"
          />
          <textarea
           
            class="proj-form-input tw-mt-2  tw-text-sm tw-h-20"
            placeholder="Inkhundla"
          />
        
        </div>
      </div>
      <div class="tw-flex tw-flex-row tw-justify-end">
          <div class="" >
            <button class="tw-bg-pink-100   tw-text-sm tw-text-red-400  tw-rounded-md tw-p-1 tw-p-2 tw-mr-2">Save</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>
