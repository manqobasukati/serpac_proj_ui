<template>
  <div>
    <div
      class="tw-w-xxlg tw-h-full tw-bg-white tw-shadow tw-rounded-lg tw-flex tw-flex-col tw-p-4"
    >
      <div class="tw-flex tw-flex-col">
        <div class="tw-text-md tw-font-medium">Project Phases</div>
        <div
          v-for="(phase, key) in FormData.project_timelines"
          :key="key"
          class="tw-flex tw-flex-row tw-p-2"
        >
          <input
            type="text"
            v-model="phase.name"
            class="proj-form-input tw-w-full tw-h-8  tw-text-sm tw-m-1"
            placeholder="Phase name"
          />
          <input
            type="text"
            v-model="phase.start_date"
            class="proj-form-input tw-w-full tw-h-8  tw-text-sm tw-m-1"
            placeholder="Start date"
          />
          <input
            type="text"
            v-model="phase.end_data"
            class="proj-form-input tw-w-full tw-h-8  tw-text-sm tw-m-1"
            placeholder="End data"
          />
        </div>
        <div class="tw-flex tw-flex-row tw-justify-end tw-p-2">
          <div
            @click="addPhase"
            class="tw-rounded-full tw-shadow tw-px-2 tw-w-8"
          >
            <q-icon name="add" />
          </div>
        </div>
        <div class="tw-flex tw-flex-row tw-justify-end">
          <div class="">
            <button
              @click="Save()"
              class="tw-bg-pink-100   tw-text-sm tw-text-red-400  tw-rounded-md tw-p-2 tw-mr-2"
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
  name: 'SectionFive',
  data() {
    return {
      FormData: {
        project_timelines: [
          {
            name: '',
            start_date: '',
            end_data: ''
          }
        ]
      }
    };
  },
  methods: {
    addPhase() {
      this.FormData.project_timelines.push({
        name: '',
        start_date: '',
        end_data: ''
      });
    },
    Save() {
      this.$emit('updateForm', this.FormData);
    }
  }
});
</script>
