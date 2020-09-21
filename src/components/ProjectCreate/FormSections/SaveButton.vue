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
import { SectionsMixin } from 'src/mixins/SectionsMixin';
import { project_create } from 'src/core/RequestHandler/project_create';
import {
  map_form_model,
  map_model_form
} from 'src/core/helpers/map_model_form';

export default Vue.extend({
  name: 'SaveButton',
  mixins: [SectionsMixin],
  methods: {
    MySave() {
      const request = map_model_form(this.$data.formData);

      // if (request._id === null) {
      //   delete request._id;
      // }

      // const data = await project_create(request);

      this.$data.formData = map_form_model(request);

      console.log('data', map_form_model(request), this.$data.formData);
    }
  }
});
</script>
