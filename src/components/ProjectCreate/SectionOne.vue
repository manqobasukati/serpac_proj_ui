<template>
  <div>
    <div
      class="tw-w-xxlg tw-h-lg tw-bg-white tw-shadow tw-rounded-lg tw-flex tw-flex-col tw-p-4 "
    >
      <div class="tw-flex tw-flex-col">
        <div class="tw-text-md tw-font-medium">Project Decription</div>
        <div class="tw-flex tw-flex-row tw-p-2">
          <input
            type="text"
            class="proj-form-input tw-w-full tw-h-8 tw-text-sm"
            placeholder="Project title"
            v-model="FormData.project_description.title"
          />
          <q-select
            type="text"
            label="Economy sector"
            borderless
            dense
            class="proj-form-input tw-h-8 tw-ml-3  tw-text-sm tw-text-gray-300"
          
            :options="economicSectorOptions"
            v-model="FormData.project_description.economy_sector"
          />
          <q-select
            type="text"
            dense
            borderless
            :options="projectExistenceOptions"
            class="proj-form-input tw-h-8 tw-ml-3  tw-text-sm"
            v-model="FormData.project_description.project_existence"
            label="Project existence"
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
            v-model="FormData.project_description.project_location.properties.inkhundla"
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
            v-model="FormData.project_description.name_of_investor"
            class="proj-form-input tw-w-full tw-h-8  tw-text-sm"
            placeholder="Investor name"
          />
          <textarea
            class="proj-form-input tw-mt-2  tw-text-sm tw-h-20"
            v-model="FormData.project_description.description"
            placeholder="Please give a concise project description"
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

import {
  EconomicSectors,
  ProjectExistence
} from './../../core/Additional/Contstants';

export default Vue.extend({
  data() {
    return {
      economicSectorOptions: EconomicSectors,
      projectExistenceOptions: ProjectExistence,
      FormData: {
        project_description: {
          title: '',
          project_existence: '',
          economy_sector: '',
          name_of_investor: '',
          description: '',
          project_location:{
            type:'Point',
            properties:{
              inkhundla:'SIPHOCOSINI'
            }
          }
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
