import {
  map_form_model,
  map_model_form
} from 'src/core/helpers/map_model_form';
import { ProjectModel } from 'src/core/Models/ProjectModel';
import { project_create } from 'src/core/RequestHandler/project_create';
import { FormData } from 'src/mixins/FormData';

import Vue from 'vue';

export const SectionsMixin = Vue.extend({
  data() {
    return {
      message: 'Hello from mixins',
      formData: FormData
    };
  },
  methods: {
    saveForm() {
      const request = map_model_form(this.formData);

      project_create(request)
        .then(val => {
          console.log(val.payload);
          this.formData = map_form_model(val.payload) as any;
        })
        .catch(val => {
          console.log(val);
        });
    }
  },
  created() {
    console.log('Mixin Created', this.message);
  },
  mounted() {
    console.log();
  }
});
