<template>
  <div class="tw-py-2">
    <div
      class="tw-inline-flex tw-items-center tw-justify-center tw-px-3 tw-pt-1 tw-pb-4 tw-w-full tw-bg-white tw-shadow"
    >
      <div
        class="tw-inline-flex tw-flex-col tw-space-y-6 tw-items-center tw-justify-center tw-w-full tw-self-start"
      >
        <p class="tw-self-start tw-text-2xl">
          {{ project.project_description.description }}
        </p>
        <p class="tw-self-start tw-text-md tw-text-gray-700">
          {{ project.project_description.description }}
        </p>
        <div
          class="tw-inline-flex  tw-items-center tw-justify-center tw-self-start"
        >
          <div class="tw-w-48">
            <div
              class="tw-flex tw-tems-center tw-justify-center tw-pl-2 tw-pr-2 tw-py-2 tw-w-3/4 tw-bg-red-200 tw-rounded-full"
            >
              <p class="tw-text-sm  tw-mr-1">
                {{ project.project_description.project_location }}
              </p>
            </div>
          </div>
          <div class="tw-w-48">
            <div
              class="tw-flex tw-tems-center tw-justify-center tw-pl-2 tw-pr-2 tw-py-2 tw-w-3/4 tw-bg-green-200 tw-rounded-full"
            >
              <p class="tw-text-sm tw-mr-1">
                {{ project.project_description.economy_sector }}
              </p>
            </div>
          </div>
        </div>
        <div class="tw-w-40 tw-self-end">
          <q-btn
            class="tw-text-white bg-blue"
            label="View project"
            @click="viewProject(project)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ProjectModel } from 'src/core/Models/ProjectModel';
import Vue from 'vue';
export default Vue.extend({
  name: 'ProjectCard',
  props: ['project'],
  methods: {
    viewProject(project: ProjectModel) {
      void this.$router.push({
        path: `/admin/all-projects/${project._id as string}`,
        params: { projectId: project._id as string }
      });
    }
  }
});
</script>
