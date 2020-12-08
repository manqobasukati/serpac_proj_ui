<template>
  <div
    class="tw-flex tw-flex-col tw-container tw-items-center tw-flex-1 tw-mr-64"
  >
    <section-bar @selectSection="changeActiveSection" class="tw-mb-4 " />

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
    <section-seven
      v-if="'Section 7' === active_section"
      :context="'admin_inbox'"
      :FormD="FormData"
    />
    <section-eight
      v-if="'Section 8' === active_section"
      :context="'admin_inbox'"
      :projectID="FormData._id"
    />
    <comment-box :project="FormData" :section="active_section" />
    <div class="tw-flex tw-flex-row tw-w-1/3 tw-mt-3">
      <q-select
        borderless
        v-model="project_status"
        label="Move project to"
        :options="projectStatusOptions"
        type="text"
        class="proj-form-input  tw-h-10  tw-text-sm tw-m-1"
      />
      <div class="tw-p-1">
        <button
          @click="moveProject"
          class="tw-bg-red-200 tw-w-16 tw-rounded-md tw-h-10 tw-shadow-lg focus:tw-shadow-sm focus:tw-outline-none"
        >
          move
        </button>
      </div>
    </div>
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
import SectionSeven from 'src/components/Public/ProjectManagement/SectionSeven.vue';
import SectionEight from 'src/components/Public/ProjectManagement/SectionEight.vue';
import { get_project } from 'src/core/RequestHandler/project_create';
import { MODULES } from 'src/store';
import { ADMIN_ACTIONS } from 'src/store/admin/actions';

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
    CommentBox,
    SectionEight,
    SectionSeven
  },
  watch: {
    projectId() {
      get_project(this.projectId)
        .then(val => {
          this.FormData = val[0];
        })
        .catch(e => {
          console.error(e);
        });
    }
  },
  data() {
    return {
      active_section: 'Section 1',
      project_status: '',
      projectStatusOptions: [
        'New Projects',
        'Initial scoping',
        'Work group assesment',
        'Facilitating Enablers',
        'Ready to Launch',
        'Implementation Ongoing'
      ],
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
  mounted() {
    get_project(this.projectId)
      .then(val => {
        this.FormData = val[0];
      })
      .catch(e => {
        console.error(e);
      });
  },
  methods: {
    changeActiveSection(data: string) {
      this.active_section = data;
    },
    moveProject() {
      const action = `${MODULES.ADMIN}/${ADMIN_ACTIONS.UPDATE_PROJECT_STATUS}`;
      const payload = {
        ...this.FormData,
        project_status: this.project_status
      };

      this.$store
        .dispatch(action, payload)
        .then(() => {
          this.project_status = '';
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  computed: {
    project() {
      return get_project(this.projectId);
    }
  }
});
</script>
