<template>
  <div>
    <div class="row" style="height:95vh">
      <div class="col-2">
        <project-create-sidebar />
      </div>
      <q-separator vertical />

      <div class="col-9 q-pa-sm q-mt-lg">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import { FILTERS } from 'src/core/helpers/filters';

import ProjectCreateSidebar from './ProjectCreateSidebar.vue';
import { SectionsMixin } from 'src/mixins/SectionsMixin';
import { ProjectCreateInterface } from 'src/store/project_create/state';
import { MODULES } from 'src/store';
import { ProjectModel } from 'src/core/Models/ProjectModel';
import { map_form_model } from 'src/core/helpers/map_model_form';

export default Vue.extend({
  name: 'UserLayout',
  mixins: [SectionsMixin],
  components: {
    ProjectCreateSidebar
  },
  data() {
    return {};
  },
  filters: {
    ...FILTERS
  },
  watch: {
    get_project() {
      if (this.$route.params) {
        const data = this.get_project;

        this.$data.formData = map_form_model(data as ProjectModel);
        console.log('Formdata', this.$data.formData);
      }
    }
  },
  computed: {
    ...mapState(MODULES.PROJECT_CREATE, {
      get_project(state: ProjectCreateInterface) {
        console.log('called');
        return state.selected_project;
      }
    })
  }
});
</script>
