import { FormData } from 'src/mixins/FormData';

import Vue from 'vue';

export const SectionsMixin = Vue.extend({
  data() {
    return {
      message: 'Hello from mixins',
      formData: FormData
    };
  },
  methods:{
    saveForm(){
       console.log('SaveForm')
    }
  },
  created() {
    console.log('Mixin Created', this.message);
  },
  mounted() {
    console.log();
  }
});
