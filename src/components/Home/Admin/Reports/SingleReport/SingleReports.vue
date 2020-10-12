<template>
  <div>
    <div class="row ">
      <div class="tw-rounded-full tw-bg-gray-200">
        <q-icon name="arrow_back" class="tw-text-4xl " @click="setView()" />

        <q-tooltip>
          Back to results
        </q-tooltip>
      </div>
      <div class="tw-text-lg tw-ml-3 tw-mt-1 tw-font-thin">
        Something here
      </div>
    </div>
    <div class="row tw-mt-12">
      <div class="col-3">
        <div>
          <div
            class="tw-w-12/16 tw-h-md tw-bg-gray-200 tw-shadow-md tw-rounded-xlg  tw-flex tw-flex-col "
          >
            <div
              class="tw-text-lg tw-font-light tw-flex tw-justify-center tw-mt-3"
            >
              Project Details
            </div>
            <div class="tw-text-md tw-m-2">
              Project id
              <span
                class="tw-rounded-xlg tw-font-light tw-bg-blue-200 tw-p-1 tw-ml-2"
                >{{ project._id }}</span
              >
            </div>
            <div class="tw-text-md tw-m-2">
              Project Title
              <span
                class="tw-rounded-xlg tw-font-light tw-bg-blue-200 tw-p-1"
                >{{ project.title || 'To be placed' }}</span
              >
            </div>
            <div class="tw-text-md tw-m-2">
              Project Submitted
              <span
                class="tw-rounded-xlg tw-font-light tw-bg-blue-200 tw-p-1"
                >{{ project.project_submitted || 'To be placed' }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div>
          <div
            class="tw-w-12/16 tw-h-md tw-bg-gray-200 tw-shadow-md tw-rounded-xlg tw-ml-2"
          >
            <div
              class="tw-text-lg tw-font-light tw-flex tw-justify-center tw-pt-3"
            >
              Project Description
            </div>
            <div class="tw-text-md tw-m-2">
              Project description
              <span
                class="tw-rounded-xlg tw-font-light tw-bg-blue-200 tw-p-1 tw-ml-2"
                >{{ project.project_description.description }}</span
              >
            </div>
            <div class="tw-text-md tw-m-2">
              Project Location
              <span
                class="tw-rounded-xlg tw-font-light tw-bg-blue-200 tw-p-1"
                >{{
                  project.project_description.project_location.properties
                    .inkhundla || 'To be placed'
                }}</span
              >
            </div>
            <div class="tw-text-md tw-m-2">
              Project
              <span
                class="tw-rounded-xlg tw-font-light tw-bg-blue-200 tw-p-1"
                >{{ project.project_submitted || 'To be placed' }}</span
              >
            </div>
            <div class="tw-text-md tw-m-2">
              Economy sector
              <span
                class="tw-rounded-xlg tw-font-light tw-bg-blue-200 tw-p-1"
                >{{
                  project.project_description.economy_sector || 'To be placed'
                }}</span
              >
            </div>
            <div class="tw-text-md tw-m-2">
              Investor name
              <span
                class="tw-rounded-xlg tw-font-light tw-bg-blue-200 tw-p-1"
                >{{
                  project.project_description.name_of_investor || 'To be placed'
                }}</span
              >
            </div>
            <div class="tw-text-md tw-m-2">
              Project existence
              <span
                class="tw-rounded-xlg tw-font-light tw-bg-blue-200 tw-p-1"
                >{{
                  project.project_description.project_existense ||
                    'To be placed'
                }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div>
          <div
            class="tw-w-12/16 tw-h-md tw-bg-gray-200 tw-shadow-md tw-rounded-xlg tw-ml-2"
          >
            <div
              class="tw-text-lg tw-font-light tw-flex tw-justify-center tw-pt-3"
            >
              Project Value
            </div>
            <div class="tw-text-md tw-m-2">
              Total invesment value
              <span
                class="tw-rounded-xlg tw-font-light tw-bg-blue-200 tw-p-1"
                >{{
                  project.project_value.total_inv_value || 'To be placed'
                }}</span
              >
            </div>
            <div class="tw-text-md tw-m-2">
              Funding status
              <span
                class="tw-rounded-xlg tw-font-light tw-bg-blue-200 tw-p-1"
                >{{
                  project.project_value.funding_status || 'To be placed'
                }}</span
              >
            </div>
            <div class="tw-text-md tw-m-2">
              Percentage of funding
              <span
                class="tw-rounded-xlg tw-font-light tw-bg-blue-200 tw-p-1"
                >{{
                  project.project_value.percentage_of_funding || 'To be placed'
                }}</span
              >
            </div>
            <div class="tw-text-md tw-m-2">
              Project scope
              <span
                class="tw-rounded-xlg tw-font-light tw-bg-blue-200 tw-p-1"
                >{{
                  project.project_value.project_scope || 'To be placed'
                }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div>
          <div
            class="tw-w-12/16 tw-h-md tw-bg-gray-200 tw-shadow-md tw-rounded-xlg tw-ml-2 tw-mr-3"
          >
            <div
              class="tw-text-lg tw-font-light tw-flex tw-justify-center tw-pt-3"
            >
              Employment opportunities
            </div>
            <div class="tw-text-md tw-m-2">
              Permanent jobs
              <span
                class="tw-rounded-xlg tw-font-light tw-bg-blue-200 tw-p-1"
                >{{
                  project.expected_jobs.permanent_jobs || 'To be placed'
                }}</span
              >
            </div>
            <div class="tw-text-md tw-m-2">
              Temporay jobs
              <span
                class="tw-rounded-xlg tw-font-light tw-bg-blue-200 tw-p-1"
                >{{
                  project.expected_jobs.permanent_jobs || 'To be placed'
                }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row tw-mt-3">
      <div class="col-3">
        <div>
          <div
            class="tw-w-full tw-h-md tw-bg-gray-200 tw-shadow-md tw-rounded-xlg  "
          >
            <div
              class="tw-text-lg tw-font-light tw-flex tw-justify-center tw-pt-3"
            >
              Opportunities
            </div>
            <div class="tw-text-md tw-m-2">
              Locally sourced inputs
              <span
                v-for="(input, key) in project.opportunities
                  .local_sourced_inputs"
                :key="key"
                class="tw-rounded-xlg tw-font-light tw-bg-blue-200 tw-p-1"
                >{{ input }}</span
              >
            </div>
            <div class="tw-text-md tw-m-2">
              Externally sourced inputs
              <span
                v-for="(input, key) in project.opportunities
                  .external_sourced_inputs"
                :key="key"
                class="tw-rounded-xlg tw-font-light tw-bg-blue-200 tw-p-1"
                >{{ input }}</span
              >
            </div>
            <div class="tw-text-md tw-m-2">
              Project skills
              <span
                v-for="(input, key) in project.opportunities.project_skills"
                :key="key"
                class="tw-rounded-xlg tw-font-light tw-bg-blue-200 tw-p-1"
                >{{ input }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div>
          <div
            class="tw-w-full tw-h-md tw-bg-gray-200 tw-shadow-md tw-rounded-xlg tw-ml-4"
          >
            <div
              class="tw-text-lg tw-font-light tw-flex tw-justify-center tw-pt-3"
            >
              Project Timelines
            </div>
            <div
              class="tw-flex tw-flex-col"
              v-for="(phase, key) in project.project_timelines.phases"
              :key="key"
            >
              <div class="tw-text-md tw-m-2">
                {{ phase.name || 'To be place' }}
              </div>
              <div>
                <span class="tw-rounded-xlg tw-font-light tw-bg-blue-200 tw-p-1"
                  >start data :{{ phase.start_date.substring(0, 10) }}</span
                >
                <span class="tw-rounded-xlg tw-font-light tw-bg-blue-200 tw-p-1"
                  >end data :{{ phase.start_date.substring(0, 10) }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div>
          <div
            class="tw-w-full tw-h-md tw-bg-gray-200 tw-shadow-md tw-rounded-xlg tw-ml-6"
          >
            <div
              class="tw-text-lg tw-font-light tw-flex tw-justify-center tw-pt-3"
            >
              Key enablers
            </div>
            <div
              class="tw-flex tw-flex-col"
              v-for="(enabler, key) in project.key_enablers"
              :key="key"
            >
              <div class="tw-text-md tw-m-2">
                {{ enabler.name || 'To be place' }}
                <span
                  class="tw-rounded-xlg tw-font-light tw-bg-blue-200 tw-p-1"
                  >{{ enabler.stake_holder }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ProjectModel } from 'src/core/Models/ProjectModel';
import { get_project } from 'src/core/RequestHandler/project_create';

import Vue from 'vue';
export default Vue.extend({
  name: 'SingleReports',
  props: ['projectId'],
  data() {
    return {
      project: null as null | ProjectModel
    };
  },
  methods: {
    setView() {
      this.$emit('setView', { view: 'multiple' });
    }
  },
  mounted() {
    this.$q.loading.show();
    get_project(this.projectId)
      .then(val => {
        this.project = val[0];
        this.$q.loading.hide();
      })
      .catch(e => {
        console.error(e);
      });
  }
});
</script>
