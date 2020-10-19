<template>
  <div class="tw-flex tw-flex-col">
    <div class="tw-text-lg tw-font-thin">Project Title here</div>
    <section-bar @selectSection="changeActiveSection" class="tw-mb-4" />
    <section-one
      v-if="'Section 1' === active_section"
      class="tw-p-2 "
      :context="'admin_inbox'"
      :FormD="FormData"
    />
    <section-two
      v-if="'Section 2' === active_section"
      :context="'admin_inbox'"
      :FormD="FormData"
      class="tw-p-2"
    />
    <section-three
      v-if="'Section 3' === active_section"
      :context="'admin_inbox'"
      :FormD="FormData"
      class="tw-p-2"
    />
    <section-four
      v-if="'Section 4' === active_section"
      :context="'admin_inbox'"
      :FormD="FormData"
      class="tw-p-2"
    />
    <section-five
      v-if="'Section 5' === active_section"
      :context="'admin_inbox'"
      :FormD="FormData"
      class="tw-p-2"
    />
    <section-six
      v-if="'Section 6' === active_section"
      :context="'admin_inbox'"
      :FormD="FormData"
    />
    <comment-box />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import CommentBox from './CommentBox.vue';
import SectionBar from 'src/components/Public/ProjectManagement/SectionsBar.vue';
import SectionOne from 'src/components/Public/ProjectManagement/SectionOne.vue';
import SectionTwo from 'src/components/Public/ProjectManagement/SectionTwo.vue';
import SectionThree from 'src/components/Public/ProjectManagement/SectionThree.vue';
import SectionFour from 'src/components/Public/ProjectManagement/SectionFour.vue';
import SectionFive from 'src/components/Public/ProjectManagement/SectionFive.vue';
import SectionSix from 'src/components/Public/ProjectManagement/SectionSix.vue';
import { get_project } from 'src/core/RequestHandler/project_create';

export default Vue.extend({
  name: 'ProjectView',
  props: ['projectId'],
  components: {
    SectionBar,
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    SectionFive,
    SectionSix,
    CommentBox
  },
  watch: {
    projectId() {
      console.log('Proj id', this.projectId);
      get_project(this.projectId)
        .then(val => {
          console.log('Value', val);
          this.FormData = val[0];
          console.log('FormD', this.FormData);
        })
        .catch(e => {
          console.error(e);
        });
    }
  },
  data() {
    return {
      active_section: 'Section 1',
      FormData: {
        project_description: {
          title: '',
          project_existence: '',
          economy_sector: '',
          name_of_investor: '',
          description: '',
          project_location: {
            type: 'Point',
            properties: {
              inkhundla: 'SIPHOCOSINI',
              region: 'HhoHho'
            }
          }
        }
      }
    };
  },
  methods: {
    changeActiveSection(data: string) {
      this.active_section = data;
    }
  },
  computed: {
    project() {
      return get_project(this.projectId);
    }
  }
});
</script>
