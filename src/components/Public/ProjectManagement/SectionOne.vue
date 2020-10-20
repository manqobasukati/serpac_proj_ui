<template>
  <div>
    <div
      class="tw-w-xxlg tw-h-full tw-bg-white tw-shadow tw-rounded-lg tw-flex tw-flex-col tw-p-4  "
    >
      <div class="tw-flex tw-flex-col">
        <div class="tw-text-md tw-font-medium">Project Decription</div>
        <div class="tw-flex tw-flex-row tw-p-2">
          <input
            type="text"
            class="proj-form-input tw-w-full tw-h-8 tw-text-sm"
            placeholder="Project title"
            :disabled="context === 'admin_inbox'"
            @focus="addHint('section_1', 'project_title')"
            v-model="FormData.project_description.title"
          />
          <q-select
            type="text"
            label="Economy sector"
            borderless
            dense
            class="proj-form-input tw-h-8 tw-ml-3  tw-text-sm tw-text-gray-300"
            :options="economicSectorOptions"
            :disabled="context === 'admin_inbox'"
            @focus="addHint('section_1', 'project_sector')"
            v-model="FormData.project_description.economy_sector"
          />
          <q-select
            type="text"
            dense
            borderless
            :options="projectExistenceOptions"
            class="proj-form-input tw-h-8 tw-ml-3  tw-text-sm"
            :disabled="context === 'admin_inbox'"
            v-model="FormData.project_description.project_existence"
            label="Project existence"
          />
        </div>
      </div>
      <div class="tw-flex tw-flex-col">
        <div class="tw-text-md tw-font-medium">Project location</div>
        <div class="tw-flex tw-flex-row tw-p-2">
          <q-select
            v-model="
              FormData.project_description.project_location.properties.region
            "
            :options="['Manzini', 'HhoHho', 'Shisewleni', 'Lubombo']"
            borderless
            class="proj-form-input tw-w-full tw-h-8  tw-text-sm"
            :disabled="context === 'admin_inbox'"
            placeholder="Region"
          />
          <q-select
            type="text"
            borderless
            :options="inkhundlaOptions"
            class="proj-form-input tw-ml-3 tw-h-8  tw-text-sm"
            :disabled="context === 'admin_inbox'"
            v-model="
              FormData.project_description.project_location.properties.inkhundla
            "
            placeholder="Inkhundla"
          />

          <div class=" tw-pb-2 tw-px-2">
            <q-icon
              @click="set_map_active()"
              name="location_on"
              color="grey-8"
            />
            <q-tooltip>
              map
            </q-tooltip>
          </div>
        </div>
      </div>
      <div v-if="map_active" class="tw-flex tw-flex-col">
        <map-select @coordinates="setPosition" />
      </div>
      <div class="tw-flex tw-flex-col">
        <div class="tw-text-md tw-font-medium">More</div>
        <div class="tw-flex tw-flex-col tw-p-2">
          <input
            type="text"
            v-model="FormData.project_description.name_of_investor"
            class="proj-form-input tw-w-full tw-h-8  tw-text-sm"
            :disabled="context === 'admin_inbox'"
            @focus="addHint('section_1', 'project_investor_name')"
            placeholder="Investor name"
          />
          <textarea
            class="proj-form-input tw-mt-2  tw-text-sm tw-h-20"
            v-model="FormData.project_description.description"
            @focus="addHint('section_1', 'project_description')"
            placeholder="Please give a concise project description"
            :disabled="context === 'admin_inbox'"
          />
        </div>
      </div>
      <div class="tw-flex tw-flex-row tw-justify-end">
        <div class="">
          <button
            v-if="context !== 'admin_inbox'"
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
import mapboxgl from 'mapbox-gl';

import { TinkhundlaOptions } from 'src/core/Additional/Contstants';

import {
  EconomicSectors,
  ProjectExistence
} from 'src/core/Additional/Contstants';

import MapSelect from './MapSelect.vue';
import { MODULES } from 'src/store';
import { PROJECT_CREATE_ACTIONS } from 'src/store/project_create/actions';
import { hints } from './hints';
import { HintInterface } from 'src/store/project_create/state';

export default Vue.extend({
  components: {
    MapSelect
  },
  watch: {
    FormD() {
      this.FormData = this.FormD;
    }
  },
  mounted() {
    console.log('Section 1', this.FormD);
    this.FormData = this.FormD;
  },
  data() {
    return {
      map_active: false,
      economicSectorOptions: EconomicSectors,
      projectExistenceOptions: ProjectExistence,
      inkhundlaOptions: TinkhundlaOptions(),
      mapbox: null as null | mapboxgl.Map,
      mapbox_token:
        'pk.eyJ1IjoibWFucW9iYTEiLCJhIjoiY2s4dmdhcTE4MDAzeTNocXBzMXh0ajRteiJ9.KDLMyWdvIUck-sK5Q1UW3g',
      FormData: {
        project_description: {
          title: '',
          project_existence: '',
          economy_sector: '',
          name_of_investor: '',
          description: '',
          project_location: {
            type: 'Point',
            coordinates: null as null | number[],
            properties: {
              inkhundla: '',
              region: ''
            }
          }
        }
      }
    };
  },
  props: ['context', 'FormD'],
  methods: {
    addHint(section: string, field_name: string) {
      console.log('Projects');
      const action = `${MODULES.PROJECT_CREATE}/${PROJECT_CREATE_ACTIONS.ADD_HINT}`;

      const hint = hints[section].find((val: HintInterface) => {
        return val.field_name === field_name;
      });
      this.$store
        .dispatch(action, hint)
        .then(val => {
          console.log('Val', val);
        })
        .catch(e => {
          console.log(e);
        });
    },
    setPosition(data: number[]) {
      this.FormData.project_description.project_location.coordinates = data;
      console.log(this.FormData);
    },
    set_map_active() {
      this.addHint('section_1', 'project_map');
      this.map_active = !this.map_active;
    },

    Save() {
      this.$emit('updateForm', this.FormData);
    }
  }
});
</script>
