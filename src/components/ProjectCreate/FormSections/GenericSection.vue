<template>
  <div>
    <section-header :section="get_active_section" />

    <div class="row">
      <div class="col"></div>
      <div class="col-6 q-ml-lg">
        <form-render
          v-if="get_active_section !== 'info_section'"
          :formD="form"
          :FormSection="lookUp[get_active_section]"
          @updateFormData="formUpdate"
        />
        <q-card
          v-if="get_active_section === 'info_section'"
          class="q-pa-md"
          square
        >
          <q-card-section>
            <div>
              This form wizzard enables you to create and submit projects.
              <ul>
                <li>By clicking save a new project will be created.</li>
              </ul>
            </div>
            <q-btn
              class="q-ml-lg"
              v-if="!old_project"
              color="primary"
              @click="createProject()"
              label="Create new project"
            ></q-btn>
          </q-card-section>
        </q-card>
      </div>
      <div class="col"></div>
    </div>
    <div
      class="row q-mt-sm "
      style="text-align:right"
      v-if="
        get_active_section !== 'info_section' &&
          get_active_section !== 'section_7'
      "
    >
      <div class="col"></div>
      <div class="col-6">
        <q-btn flat color="primary" @click="MySave()" label="Save" />
      </div>
      <div class="col"></div>
    </div>
    <div
      class="row q-mt-sm "
      style="text-align:right"
      v-if="get_active_section === 'section_7'"
    >
      <div class="col"></div>
      <div class="col-6">
        <q-btn flat color="primary" @click="MySave()" label="Save and Submit" />
      </div>
      <div class="col"></div>
    </div>

    <navigate-sections />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

import SectionHeader from './SectionHeader.vue';
import NavigateSections from './NavigateSections.vue';
import FormRender from './FormRender.vue';

import { SectionsMixin } from 'src/mixins/SectionsMixin';
import { MODULES } from 'src/store';
import { ProjectCreateInterface } from 'src/store/project_create/state';
import { lookup, FormData } from 'src/mixins/FormData';
import {
  get_project,
  project_create
} from 'src/core/RequestHandler/project_create';
import {
  map_form_model,
  map_model_form
} from 'src/core/helpers/map_model_form';
import { ProjectModel } from 'src/core/Models/ProjectModel';

export default Vue.extend({
  name: 'Section1',
  mixins: [SectionsMixin],
  data() {
    return {
      form: FormData,
      lookUp: lookup,
      old_project: this.$route.query.projectId
    };
  },
  mounted() {
    if (this.old_project) {
     
      get_project(this.$route.query.projectId as string)
        .then(data => {
          this.form = map_form_model(data[0]);
        })
        .catch(val => {
          console.error(val);
        });
    }
  },
  created() {
    if (this.old_project) {
      get_project(this.$route.query.projectId as string)
        .then(data => {
          this.form = map_form_model(data[0]);
          console.log(this.form);
        })
        .catch(val => {
          console.error(val);
        });
    }
  },
  watch: {
    old_project() {
      get_project(this.$route.query.projectId as string)
        .then(data => {
          this.form = map_form_model(data[0]);
          console.log('Data baba', data);
        })
        .catch(val => {
          console.error(val);
        });

      this.old_project = this.$route.query.projectId;
    }
  },
  components: {
    FormRender,
    SectionHeader,
    NavigateSections
  },
  methods: {
    hyphen_to_underscore(word: string) {
      return word.split('-').join('_');
    },
    formUpdate(data: any) {
      this.form = data;
    },
    createProject() {
      //get logged in user
      const user_id = localStorage.getItem('serpac_tool_user_id');

      let intermediate_req = map_model_form(this.form);

      //add loggend in user details
      const request = {
        ...intermediate_req,
        project_owners: [user_id]
      };

      if (request._id === null) {
        delete request._id;
      }
      project_create(request as ProjectModel)
        .then(val => {
          this.form = map_form_model(val);
          this.$q.notify({
            message: 'Successfully created new project, please proceed',
            color: 'primary'
          });
          void this.$router.push({
            path: '/public/project/section-1',
            query: { projectId: val._id }
          });

          this.old_project = this.$route.query.projectId;
          console.log('From server', val);
        })
        .catch(e => {
          console.log(e);
        });
    },
    MySave() {
      const request = map_model_form(this.form);

      if (request._id === null) {
        delete request._id;
      }

      if (this.get_active_section === 'section_7') {
        request.project_submitted = new Date();
      }

      project_create(request)
        .then(val => {
          console.log(val);
          this.form = map_form_model(val);
          this.$q.notify({ message: 'updated project', color: 'primary' });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },

  computed: {
    ...mapState(MODULES.PROJECT_CREATE, {
      get_active_section(state: ProjectCreateInterface) {
        return state.active_section;
      }
    })
  }
});
</script>
