<template>
  <div>
    <div class="tw-flex tw-flex-col tw-mt-6 ">
      <div class="tw-py-6 ">
        <sections-bar @selectSection="changeActiveSection" />

        <form-completion-bar v-if="formData" :formData="formData" />
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
              :FormD="formData"
            />
            <section-two
              v-if="'Section 2' === active_section"
              class="tw-p-2"
              @updateForm="updateForm"
              :FormD="formData"
            />
            <section-three
              v-if="'Section 3' === active_section"
              class="tw-p-2"
              @updateForm="updateForm"
              :FormD="formData"
            />
            <section-four
              v-if="'Section 4' === active_section"
              class="tw-p-2"
              @updateForm="updateForm"
              :FormD="formData"
            />
            <section-five
              v-if="'Section 5' === active_section"
              @updateForm="updateForm"
              :FormD="formData"
              class="tw-p-2"
            />
            <section-six
              v-if="'Section 6' === active_section"
              :FormD="formData"
              @updateForm="updateForm"
            />
            <section-seven
              v-if="'Section 7' === active_section"
              :FormD="formData"
              @updateForm="updateForm"
            />
            <section-eight
              @submitForm="submitForm"
              v-if="'Section 8' === active_section"
              :projectID="formData._id"
            />
          </div>
          <div class="tw-flex  tw-p-2 tw-bg-gray-100">
            <hint-box />
          </div>
        </div>
      </div>
    </div>
    <q-dialog v-model="create">
      <q-card>
        <q-card-section>
          <div class="text-h6">Project creation</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          You are about to create a project, the process is seperated into eight
          sections. Each section captures a unique part of your project, try to
          answer to the best of your abilities

          <ul class="tw-list-disc tw-pl-6">
            <li>
              Should you not understand what a question requires of you, a hint
              appears on the right pane each and every time you select a field.
            </li>
            <li>
              When you are done filling a section please press the save button.
            </li>
            <li>
              hould you not finish filling details about the project, save and
              when you return it shall be under
              <b>My Projects</b>.
            </li>
            <li>
              When you are done filling all the relevant details, On section
              eight please press the save and submit button.
            </li>
          </ul>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
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
import SectionEight from './SectionEight.vue';
import HintBox from './HintBox.vue';
import FormCompletionBar from './FormCompletionBar.vue';

import { ModelObj } from 'src/mixins/FormData';
import {
  get_project,
  project_create
} from 'src/core/RequestHandler/project_create';
import { ProjectModel, ProjectStatuses } from 'src/core/Models/ProjectModel';

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
    SectionSeven,
    HintBox,
    SectionEight,
    FormCompletionBar
  },
  props: ['projectId'],
  data() {
    return {
      active_section: 'Section 1',
      formData: ModelObj,
      create: false
    };
  },
  filters: {
    ...FILTERS
  },
  mounted() {
    if (this.projectId) {
      get_project(this.projectId)
        .then(val => {
          this.formData = val[0];
        })
        .catch(e => {
          console.error(e);
        });
    } else {
      this.create = !this.create;
    }
  },
  watch: {
    projectId() {
      if (this.projectId) {
        get_project(this.projectId)
          .then(val => {
            this.formData = val[0];
          })
          .catch(e => {
            console.error(e);
          });
      } else {
        //assume that project is being created
        this.formData = ModelObj;
      }
    }
  },
  methods: {
    submitForm() {
      const request = {
        ...this.formData,
        project_submitted: new Date()
      };
      project_create(request as ProjectModel)
        .then(val => {
          this.formData = val;
          this.$route.params.projectId = val._id;
          this.$q.notify({
            message: 'succesfully saved...',
            color: 'white',
            textColor: 'pink-4'
          });
        })
        .catch(e => {
          console.log(e);
        });
    },
    updateForm(data: any) {
      
      const key: string = Object.keys(data)[0];

      this.formData[key] = data[key];

      if (!this.$route.params.projectId) {
        const request: Partial<ProjectModel> = {
          ...this.formData,
          project_status: ProjectStatuses.new_projects,
          _id: null,
          project_created: new Date(),
          project_owners: []
        };

        if (!request._id) {
          let { ['_id']: _, ...result } = request;

          const project_owner = localStorage.getItem('serpac_tool_user_id');

          result.project_owners?.push(project_owner as string);

          project_create(result as ProjectModel)
            .then(val => {
              this.formData = val;
              this.$route.params.projectId = val._id;
              console.log('In proejct create', this.formData);
              this.$q.notify({
                message: 'succesfully created project',
                badgeTextColor: 'pink-6'
              });
            })
            .catch(e => {
              console.log(e);
            });
        }
      } else {
        const project_owner = localStorage.getItem('serpac_tool_user_id');
        if (!this.formData.project_owners.includes(project_owner)) {
          this.formData.project_owners.push(project_owner);
        }
        project_create(this.formData as ProjectModel)
          .then(val => {
            this.formData = val;
            this.$route.params.projectId = val._id;
            console.log('In proejct create 1', this.formData);
            this.$q.notify({
              message: 'succesfully saved...',
              color: 'white',
              textColor: 'pink-4'
            });
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    changeActiveSection(data: string) {
      console.log('This form', this.formData);
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
