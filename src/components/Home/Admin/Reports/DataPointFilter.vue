<template>
  <div class="tw-h-full">
    <div
      class="tw-w-64 tw-h-full tw-mt-8 tw-mb-2 tw-ml-5 tw-bg-gray-200 tw-shadow-xl tw-rounded-xlg"
    >
      <div class="tw-flex tw-flex-col">
        <div class="tw-text-lg tw-font-medium tw-px-4 tw-py-5">Data Points</div>

        <div
          class="tw-inline-flex tw-flex-col tw-space-y-2 tw-items-center jtw-ustify-center w-56 tw-px-4"
        >
          <div class="tw-self-start tw-text-xs tw-font-medium">Dates</div>

          <div class="tw-w-full">
            <input
              type="text"
              class="proj-form-input"
              placeholder="Projected submitted"
            />
          </div>
        </div>
        <div
          class="tw-inline-flex tw-flex-col tw-space-y-2 tw-items-center jtw-ustify-center w-56 tw-px-4"
        >
          <div class="tw-mt-3 tw-self-start tw-text-xs tw-font-medium">
            Description
          </div>
          <div class="tw-w-full">
            <input
              type="text"
              class="proj-form-input"
              placeholder="Economy sector"
            />
          </div>
          <div class="tw-w-full">
            <input
              type="text"
              class="proj-form-input"
              placeholder="Investor name"
            />
          </div>
          <div class="tw-w-full">
            <input
              type="text"
              class="proj-form-input"
              placeholder="Project existence"
            />
          </div>
        </div>
        <div
          class="tw-inline-flex tw-flex-col tw-space-y-2 tw-items-center jtw-ustify-center w-56 tw-px-4"
        >
          <div class="tw-mt-3 tw-self-start tw-text-xs tw-font-medium">
            Project location
          </div>
          <div class="tw-w-full">
            <input
              type="text"
              class="proj-form-input"
              placeholder="Inkhundla"
            />
          </div>
          <div class="tw-w-full">
            <input type="text" class="proj-form-input" placeholder="Region" />
          </div>
        </div>
        <div
          class="tw-inline-flex tw-flex-col tw-space-y-2 tw-items-center jtw-ustify-center w-56 tw-px-4"
        >
          <div class="tw-mt-3 tw-self-start tw-text-xs tw-font-medium">
            Project value
          </div>
          <div class="tw-w-full">
            <input
              type="text"
              class="proj-form-input"
              placeholder="Investment value"
            />
          </div>
          <div class="tw-w-full">
            <input
              type="text"
              class="proj-form-input"
              placeholder="funding status"
            />
          </div>
          <div class="tw-w-full">
            <input
              type="text"
              class="proj-form-input"
              placeholder="Project scope"
            />
          </div>
        </div>
        <div
          class="tw-inline-flex tw-flex-col tw-space-y-2 tw-items-center jtw-ustify-center w-56 tw-px-4"
        >
          <div class="tw-mt-3 tw-self-start tw-text-xs tw-font-medium">
            Expected jobs
          </div>
          <div class="tw-w-full">
            <input
              type="text"
              class="proj-form-input"
              placeholder="Permanent jobs"
            />
          </div>
          <div class="tw-w-full">
            <input
              type="text"
              class="proj-form-input"
              placeholder="Temporary jobs"
            />
          </div>
        </div>
        <div
          class="tw-inline-flex tw-flex-col tw-space-y-2 tw-items-center jtw-ustify-center w-56 tw-px-4"
        >
          <div class="tw-mt-3 tw-self-start tw-text-xs tw-font-medium">
            Opportunities
          </div>
          <div class="tw-w-full">
            <q-select
              multiple
              use-chips
              v-model="filterData.local_sourced_inputs"
              :options="localSourcedInputsOptions"
              type="text"
              outlined
              input-class="proj-form-input"
              label="locally sourced inputs"
              dense
              
            />
          </div>
          <div class="tw-w-full">
           <q-select
              multiple
              use-chips
              v-model="filterData.external_sourced_inputs"
              :options="externallySourcedInputsOptions"
              outlined
              type="text"
              input-class="proj-form-input"
              label="externally sourced inputs"
              dense
             
            />
          </div>
          <div class="tw-w-full">
           <q-select
              multiple
              use-chips
              v-model="filterData.project_skills"
              :options="projectSkillsOptions"
              outlined
              type="text"
              input-class="proj-form-input"
              label="project skills"
              dense
             
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'DataPointFilter',
  data() {
    return {
      localSourcedInputsOptions: ['labor', 'time'],
      externallySourcedInputsOptions:['electricity'],
      projectSkillsOptions:['Needed'],
      filterData: {
        external_sourced_inputs:[],
        local_sourced_inputs: [],
        project_skills:[]
      }
    };
  }
});
</script>
