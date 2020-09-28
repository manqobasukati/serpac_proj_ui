import { mapState } from 'vuex';
import {
  map_form_model,
  map_model_form
} from 'src/core/helpers/map_model_form';
import { FormData } from 'src/mixins/FormData';

import Vue from 'vue';
import { MODULES } from 'src/store';
import { AdminInterface } from 'src/store/admin/state';
import { ProjectModel } from 'src/core/Models/ProjectModel';
import { get_projects } from 'src/core/RequestHandler/admin';
import { stat } from 'fs';
import { ProjectCreateInterface } from 'src/store/project_create/state';
import { project_create } from 'src/core/RequestHandler/project_create';

export const SectionsMixin = Vue.extend({
  data() {
    return {
      message: 'Hello from mixins',
      formData: FormData
    };
  },

  methods: {
    onInput() {
      // const request = JSON.parse(JSON.stringify(map_model_form(this.formData)));
      // //this.formData = JSON.parse(JSON.stringify(map_form_model(request)));
      // console.log('Input request', request);
    },
    saveForm() {
      const request = JSON.parse(JSON.stringify(map_model_form(this.formData)));
      project_create(request)
        .then(val => {
          this.formData = map_form_model(val);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
});
