<template>
  <div
    @click="navigateToProject(project._id)"
    class="tw-flex tw-flex-col tw-bg-white tw-p-1 tw-shadow-sm tw-rounded-md tw-my-1"
  >
    <div class="tw-text-md">{{ project.project_description.title }}</div>
    <div class="tw-text-xs tw-font-thin">
      {{ project.project_description.description }}
    </div>
    <div class="tw-flex tw-flex-row tw-self-end tw-px-3">
      <div class="tw-text-xs tw-font-thin">{{ project.project_created.substring(0,10) }}</div>
      <div class="tw-flex">
        <div
          v-if="project.project_description.economy_sector === 'Energy'"
          class="tw-rounded-full tw-h-2 tw-w-2 tw-bg-pink-200 tw-p-2 tw-mx-2"
        ></div>
         <div
           v-if="project.project_description.economy_sector === 'Agriculture'"
          class="tw-rounded-full tw-h-2 tw-w-2 tw-bg-green-200 tw-p-2 tw-mx-2"
        ></div>
         <div
            v-if="project.project_description.economy_sector === 'Telecommunications'"
          class="tw-rounded-full tw-h-2 tw-w-2 tw-bg-blue-200 tw-p-2 tw-mx-2"
        ></div>
        <div class="tw-text-xs tw-font-thin">
          {{ project.project_description.economy_sector }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Project',
  props: ['project'],
  methods: {
    navigateToProject(project_id: string) {
      void this.$router.push({
        path: `/admin/inbox/${project_id}`
      });
    }
  }
});
</script>
