import {
  map_form_model,
  map_model_form
} from 'src/core/helpers/map_model_form';
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
    onInput() {
      // const request = JSON.parse(JSON.stringify(map_model_form(this.formData)));
      // //this.formData = JSON.parse(JSON.stringify(map_form_model(request)));
      // console.log('Input request', request);
    },
    saveForm() {
      const request = JSON.parse(JSON.stringify(map_model_form(this.formData)));
      console.log('Save request', request);

      // if (request._id === null) {
      //   delete request._id;
      // }

      // const data = await project_create(request);

      // this.formData = JSON.parse(JSON.stringify(map_form_model(request)));

      // console.log('Form', this.formData);
    }
  },
  created() {
    console.log('Mixin Created', this.message);
  },
  mounted() {
    console.log();
  }
});
