<template>
  <div>
    <div
      class="tw-w-xxlg tw-h-56 tw-bg-white tw-shadow tw-rounded-lg tw-flex tw-flex-col tw-p-4"
    >
      <div class="tw-flex tw-flex-col">
        <div class="tw-text-md tw-font-medium">Project issues</div>
        <div
          v-for="(issue, key) in FormData.key_enablers"
          :key="key"
          class="tw-flex tw-flex-row tw-p-2"
        >
          <input
            type="text"
            class="proj-form-input tw-w-full tw-h-10  tw-text-sm tw-mx-1"
            placeholder="Issue here"
            v-model="issue.name"
          />
          <q-select
            use-chips
            type="text"
            borderless
            :options="StakeHoldersOptions"
            class="proj-form-input tw-h-10  tw-text-sm tw-myx-1"
            label="Enabler"
            v-model="issue.stake_holder"
            dense
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
      </div>

      <div class="tw-flex tw-flex-row tw-justify-end">
        <div class="">
          <button
            @click="Save()"
            class="tw-bg-pink-100   tw-text-sm tw-text-red-400  tw-rounded-md  tw-p-2 tw-mr-2"
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

import { StakeHoldersOptions } from './../../core/Additional/Contstants';

export default Vue.extend({
  name: 'SectionSeven',
  data() {
    return {
      StakeHoldersOptions,
      FormData: {
        key_enablers: [
          {
            name: '',
            stakeholder: ''
          }
        ]
      }
    };
  },
  methods: {
    Save() {
      this.$emit('updateForm', this.FormData);
    },
    addPhase() {
      this.FormData.key_enablers.push({
        name: '',
        stakeholder: ''
      });
    }
  }
});
</script>
