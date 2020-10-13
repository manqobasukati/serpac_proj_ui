<template>
  <div class="tw-h-full">
    <div
      class="tw-w-64 tw-h-full tw-mb-2 tw-ml-5 tw-bg-gray-200 tw-shadow-xl tw-rounded-xlg"
    >
      <div class="tw-flex tw-flex-col">
        <div class="tw-text-lg tw-font-medium tw-px-4 tw-py-5">Data Points</div>

        <div
          class="tw-inline-flex tw-flex-col tw-space-y-2 tw-items-center jtw-ustify-center w-56 tw-px-4"
        >
          <div class="tw-self-start tw-text-xs tw-font-medium">Dates</div>

          <div class="tw-w-full">
            <input
              type="date"
              v-model="requestData.project_submitted"
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
              v-model="requestData.project_description.economy_sector"
              class="proj-form-input"
              placeholder="Economy sector"
            />
          </div>
          <div class="tw-w-full">
            <input
              type="text"
              v-model="requestData.project_description.name_of_investor"
              class="proj-form-input"
              placeholder="Investor name"
            />
          </div>
          <div class="tw-w-full">
            <input
              type="text"
              v-model="requestData.project_description.project_existence"
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
            <q-select
              v-model="requestData.project_location.region"
              :options="regionOptions"
              borderless
              class="proj-form-input tw-h-12 "
              type="text"
              label="Regions"
              dense
            />
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
              v-model="requestData.project_value.project_existence"
              class="proj-form-input"
              placeholder="Investment value"
            />
          </div>
          <div class="tw-w-full">
            <input
              type="text"
              class="proj-form-input"
              v-model="requestData.project_value.funding_status"
              placeholder="funding status"
            />
          </div>
          <div class="tw-w-full">
            <input
              type="text"
              class="proj-form-input"
              v-model="requestData.project_value.project_scope"
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
              v-model="requestData.expected_jobs.permanent_jobs"
              placeholder="Permanent jobs"
            />
          </div>
          <div class="tw-w-full">
            <input
              type="text"
              class="proj-form-input"
              v-model="requestData.expected_jobs.temporal_jobs"
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
              v-model="requestData.opportunities.local_sourced_inputs"
              :options="localSourcedInputsOptions"
              type="text"
              borderless
              class="proj-form-input tw-h-12 "
              label="locally sourced inputs"
              dense
            />
          </div>
          <div class="tw-w-full">
            <q-select
              multiple
              use-chips
              v-model="requestData.opportunities.external_sourced_inputs"
              :options="externallySourcedInputsOptions"
              borderless
              class="proj-form-input tw-h-12 "
              type="text"
              label="externally sourced inputs"
              dense
            />
          </div>
          <div class="tw-w-full">
            <q-select
              multiple
              use-chips
              v-model="requestData.opportunities.project_skills"
              :options="projectSkillsOptions"
              type="text"
              borderless
              class="proj-form-input tw-h-12 "
              label="project skills"
              dense
            />
          </div>

          <div class="tw-w-full tw-mt-3">
            <button
              @click="onSearchProjects()"
              class="tw-flex tw-items-center tw-justify-start tw-pl-20 tw-pr-24 tw-py-3 tw-w-full tw-bg-blue-300 tw-rounded-lg tw-shadow-sm tw-text-xs"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { generatParameters } from 'src/core/helpers/request';
import Vue from 'vue';
export default Vue.extend({
  name: 'DataPointFilter',
  data() {
    return {
      requestData: {
        project_submitted: '',
        project_description: {
          economy_sector: 'Agriculture',
          name_of_investor: '',
          project_existence: ''
        },
        project_location: {
          properties: {
            inkhundla: '',
            region: ''
          }
        },
        project_value: {
          total_inv_value: '',
          funding_status: '',
          project_scope: ''
        },
        expected_jobs: {
          permanent_jobs: 0,
          temporal_jobs: 0
        },
        opportunities: {
          project_skills: [],
          local_sourced_inputs: [],
          external_sourced_inputs: []
        }
      },
      localSourcedInputsOptions: ['labor', 'time'],
      externallySourcedInputsOptions: ['electricity'],
      projectSkillsOptions: ['Needed'],
      regionOptions: ['HhoHho', 'Manzini', 'Lubombo', 'Shiselweni'],
      filterData: {
        external_sourced_inputs: [],
        local_sourced_inputs: [],
        project_skills: []
      }
    };
  },
  methods: {
    onSearchProjects() {
      console.log(this.requestData);
      const val = generatParameters(this.requestData);

      this.$emit('requestParameters', val);
    }
  }
});
</script>
