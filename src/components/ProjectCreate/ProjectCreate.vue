<template>
  <div>
    <div class="tw-flex tw-flex-col tw-mt-6">
      <div class="tw-py-6">
        <sections-bar  @selectSection="changeActiveSection"  />
      </div>
      <div class="tw-py-6">
        <div class="tw-flex tw-justify-between tw-items-stretch tw-flex-row tw-divide-x tw-divide-gray-300">
          <div class="tw-flex tw-w-full tw-justify-center tw-py-20">
            <section-one
              v-if="'Section 1' === active_section"
              class="tw-p-2 "
            />
            <section-two v-if="'Section 2' === active_section" class="tw-p-2" />
            <section-three
              v-if="'Section 3' === active_section"
              class="tw-p-2"
            />
            <section-four
              v-if="'Section 4' === active_section"
              class="tw-p-2"
            />
            <section-five
              v-if="'Section 5' === active_section"
              class="tw-p-2"
            />
            <section-six v-if="'Section 6' === active_section" />
            <section-seven v-if="'Section 7' === active_section" />
          </div>
          <div class="tw-flex tw-ml-6  tw-p-2 tw-py-20 tw-px-20 tw-bg-gray-100">
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

import ProjectCreateSidebar from './ProjectCreateSidebar.vue';
import { SectionsMixin } from 'src/mixins/SectionsMixin';
import { ProjectCreateInterface } from 'src/store/project_create/state';
import { MODULES } from 'src/store';
import { ProjectModel } from 'src/core/Models/ProjectModel';
import { map_form_model } from 'src/core/helpers/map_model_form';

import SectionsBar from './SectionsBar.vue';
import SectionOne from './SectionOne.vue';
import SectionTwo from './SectionTwo.vue';
import SectionThree from './SectionThree.vue';
import SectionFour from './SectionFour.vue';
import SectionFive from './SectionFive.vue';
import SectionSix from './SectionSix.vue';
import SectionSeven from './SectionSeven.vue';

export default Vue.extend({
  name: 'UserLayout',
  mixins: [SectionsMixin],
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
      active_section: 'Section 1'
    };
  },
  filters: {
    ...FILTERS
  },
  watch: {
    get_project() {
      if (this.$route.params) {
        const data = this.get_project;

        this.$data.formData = map_form_model(data as ProjectModel);
        console.log('Formdata', this.$data.formData);
      }
    }
  },
  methods:{
    changeActiveSection(data:string){
      this.active_section = data;
    }
  },
  computed: {
    ...mapState(MODULES.PROJECT_CREATE, {
      get_project(state: ProjectCreateInterface) {
        console.log('called');
        return state.selected_project;
      }
    })
  }
});
</script>
