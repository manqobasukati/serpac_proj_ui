<template>
  <div>
    <div class="row">
      <div class="tw-rounded-full tw-bg-gray-200">
        <router-link to="/admin/reports/all">
          <q-icon name="arrow_back" class="tw-text-4xl " />
        </router-link>
        <q-tooltip>
          Back to results
        </q-tooltip>
      </div>
      <div class="tw-text-lg tw-ml-3 tw-mt-1 tw-font-thin">
        Something here
      </div>
    </div>
    <div class="row tw-mt-3">
      <div class="col-3">
        <div>
          <div
            class="tw-w-12/16 tw-h-lg tw-bg-gray-200 tw-shadow-md tw-rounded-xlg  tw-flex tw-flex-col "
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
            class="tw-w-12/16 tw-h-lg tw-bg-gray-200 tw-shadow-md tw-rounded-xlg tw-ml-2"
          >
            <div
              class="tw-text-lg tw-font-light tw-flex tw-justify-center tw-mt-3"
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
                >{{ project.project_description.project_location || 'To be placed' }}</span
              >
            </div>
            <div class="tw-text-md tw-m-2">
              Project 
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
            class="tw-w-12/16 tw-h-lg tw-bg-gray-200 tw-shadow-md tw-rounded-xlg tw-ml-2"
          ></div>
        </div>
      </div>
      <div class="col-3">
        <div>
          <div
            class="tw-w-12/16 tw-h-lg tw-bg-gray-200 tw-shadow-md tw-rounded-xlg tw-ml-2 tw-mr-3"
          ></div>
        </div>
      </div>
    </div>
    <div class="row tw-mt-3">
      <div class="col-3">
        <div>
          <div
            class="tw-w-full tw-h-lg tw-bg-gray-200 tw-shadow-md tw-rounded-xlg  "
          ></div>
        </div>
      </div>
      <div class="col-3">
        <div>
          <div
            class="tw-w-full tw-h-lg tw-bg-gray-200 tw-shadow-md tw-rounded-xlg tw-ml-4"
          ></div>
        </div>
      </div>
      <div class="col-3">
        <div>
          <div
            class="tw-w-full tw-h-lg tw-bg-gray-200 tw-shadow-md tw-rounded-xlg tw-ml-6"
          ></div>
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
  data() {
    return {
      project: null as null | ProjectModel
    };
  },
  mounted() {
    console.log(this.$route.params);
    get_project(this.$route.params.projectId)
      .then(val => {
        console.log(val);
        this.project = val[0];
      })
      .catch(e => {
        console.error(e);
      });
  }
});
</script>
