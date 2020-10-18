<template>
  <div>
    <div class="tw-flex tw-flex-col tw-mt-6">
      <div class="tw-py-6">
        <sections-bar @selectSection="changeActiveSection" />
      </div>
      <div class="tw-py-6">
        <div
          class="tw-flex tw-justify-between tw-items-stretch tw-flex-row tw-divide-x tw-divide-gray-300"
        >
          <div class="tw-flex tw-w-full tw-justify-center tw-py-20">
            <section-one
              v-if="'Section 1' === active_section"
              class="tw-p-2 "
              @updateForm="updateForm"
            />
            <section-two
              v-if="'Section 2' === active_section"
              class="tw-p-2"
              @updateForm="updateForm"
            />
            <section-three
              v-if="'Section 3' === active_section"
              class="tw-p-2"
              @updateForm="updateForm"
            />
            <section-four
              v-if="'Section 4' === active_section"
              class="tw-p-2"
              @updateForm="updateForm"
            />
            <section-five
              v-if="'Section 5' === active_section"
              @updateForm="updateForm"
              class="tw-p-2"
            />
            <section-six
              v-if="'Section 6' === active_section"
              @updateForm="updateForm"
            />
             <section-seven
              v-if="'Section 7' === active_section"
              @updateForm="updateForm"
            />
          </div>
          <div class="tw-flex  tw-p-16 tw-bg-gray-100">
            <div class="tw-text-md">Hint box comes here</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import { FILTERS } from 'src/core/helpers/filters';


import { ProjectCreateInterface } from 'src/store/project_create/state';
import { MODULES } from 'src/store';

import SectionsBar from './SectionsBar.vue';
import SectionOne from './SectionOne.vue';
import SectionTwo from './SectionTwo.vue';
import SectionThree from './SectionThree.vue';
import SectionFour from './SectionFour.vue';
import SectionFive from './SectionFive.vue';
import SectionSix from './SectionSix.vue';
import SectionSeven from './SectionSeven.vue';

import { ModelObj } from 'src/mixins/FormData';
import { project_create } from 'src/core/RequestHandler/project_create';
import { ProjectModel } from 'src/core/Models/ProjectModel';

export default Vue.extend({
  name: 'UserLayout',

  components: {
    SectionsBar,
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    SectionFive,
    SectionSix,
    SectionSeven
  },
  data() {
    return {
      active_section: 'Section 1',
      formData: ModelObj
    };
  },
  filters: {
    ...FILTERS
  },
  watch: {
    get_project() {
      console.log('Log');
      // if (this.$route.params) {
      //   const data = this.get_project;

      //   this.$data.formData = map_form_model(data as ProjectModel);
      //   console.log('Formdata', this.$data.formData);
      // }
    }
  },
  methods: {
    updateForm(data: any) {
      const key: string = Object.keys(data)[0];
      console.log(data[key]);
      this.formData[key] = data[key];

      console.log('Form now', this.formData);

      if (!this.$route.params.projectId) {
        const request = {
          ...this.formData,
          _id: null,
          project_created: new Date()
        };

        if (!request._id) {
          let { ['_id']: _, ...result } = request;

          project_create(result as ProjectModel)
            .then(val => {
             
              this.formData = val;
              this.$route.params.projectId = val._id;
              console.log(this.$route.params);
            })
            .catch(e => {
              console.log(e);
            });
        }
      } else {
        project_create(this.formData as ProjectModel)
          .then(val => {
            console.log('Here', val);
            this.formData = val;
            this.$route.params.projectId = val._id;
            console.log(this.$route.params);
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    changeActiveSection(data: string) {
      this.active_section = data;
    }
  },
  computed: {
    ...mapState(MODULES.PROJECT_CREATE, {
      get_project(state: ProjectCreateInterface) {
        return state.selected_project;
      }
    })
  }
});
</script>
