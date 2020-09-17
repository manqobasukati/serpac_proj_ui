import { ProjectModel } from 'src/core/Models/ProjectModel';
import Vue from 'vue';

export const FormData = {
  id: '',
  project_created: new Date(),
  project_submitted: null,
  project_description: {
    description: {
      model:'My project info',
      type:'input'
    },
    project_location: 'my location',
    economy_sector: 'Energy',
    project_existense: 'New',
    name_of_investor: 'Manqoba Sukati'
  },
  project_value: {
    total_inv_value: '10000',
    funding_status: true,
    percentage_of_funding: '80%',
    project_scope: 'local'
  }
};

export const SectionsMixin = Vue.extend({
  data() {
    return {
      message: 'Hello from mixins',
      formData: FormData
    };
  },
  created() {
    console.log('Mixin Created', this.message);
  },
  mounted() {
    console.log();
  }
});
