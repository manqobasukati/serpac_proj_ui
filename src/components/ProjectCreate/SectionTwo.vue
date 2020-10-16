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
            placeholder="Total investment value"
          />
          <input
            type="text"
            class="proj-form-input tw-w-full tw-h-8  tw-text-sm tw-my-1"
            v-model="FormData.project_value.funding_status"
            placeholder="Funding status"
          />
          <input
            type="text"
            class="proj-form-input tw-w-full tw-h-8  tw-text-sm tw-my-1"
            v-model="FormData.project_value.percentage_of_funding"
            placeholder="Percentage of funding"
          />
          <input
            type="text"
            v-model="FormData.project_value.project_scope"
            class="proj-form-input tw-w-full tw-h-8  tw-text-sm tw-my-1"
            placeholder="Local or FDI"
          />
        </div>
      </div>

      <div class="tw-flex tw-flex-row tw-justify-end">
        <div class="">
          <button
            @click="Save()"
            class="tw-bg-pink-100   tw-text-sm tw-text-red-400  tw-rounded-md tw-p-1 tw-p-2 tw-mr-2"
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
  name: 'SectionTwo',
  data() {
    return {
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
  methods:{
    Save(){
      this.$emit('updateForm', this.FormData)
     
    }
  }
});
</script>
