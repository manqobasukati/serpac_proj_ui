<template>
  <div>
    <div class="row q-mt-sm " style="text-align:right">
      <div class="col"></div>
      <div class="col-6">
        <q-btn flat color="primary" @click="MySave()" label="Save" />
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

import { SectionsMixin } from 'src/mixins/SectionsMixin';
import { project_create } from 'src/core/RequestHandler/project_create';
import {
  map_form_model,
  map_model_form
} from 'src/core/helpers/map_model_form';
import { ProjectCreateInterface } from 'src/store/project_create/state';
import { MODULES } from 'src/store';
import { PROJECT_CREATE_ACTIONS } from 'src/store/project_create/actions';

export default Vue.extend({
  name: 'SaveButton',
  methods: {
    MySave() {
     
      const request = map_model_form(this.formData);

      if (request._id === null) {
        delete request._id;
      }

      console.log('FormWhat',this.formData );

      const action = `${MODULES.PROJECT_CREATE}/${PROJECT_CREATE_ACTIONS.UPDATE_FORM_DATA}`;
      this.$store
        .dispatch(action, this.formData)
        .then(val => {
          console.log('Done here'); 
        })
        .catch(e => {
          console.error(e);
        });
    }
  },

  computed: {
    ...mapState(MODULES.PROJECT_CREATE, {
      formData(state: ProjectCreateInterface): unknown {
        const data = JSON.parse(JSON.stringify(state.form_data));
        console.log('State data',data)
        return data;
      }
    })
  }
});
</script>
