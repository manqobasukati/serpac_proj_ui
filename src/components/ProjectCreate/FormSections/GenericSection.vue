<template>
  <div>
    <section-header :section="get_active_section" />

    <div class="row">
      <div class="col"></div>
      <div class="col-6 q-ml-lg">
        <form-render :FormSection="lookUp[get_active_section]" />
      </div>
      <div class="col"></div>
    </div>
    <save-button />

    <navigate-sections />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

import SectionHeader from './SectionHeader.vue';
import NavigateSections from './NavigateSections.vue';
import SaveButton from './SaveButton.vue';
import FormRender from './FormRender.vue';

import { SectionsMixin } from 'src/mixins/SectionsMixin';
import { MODULES } from 'src/store';
import { ProjectCreateInterface } from 'src/store/project_create/state';
import { lookup } from 'src/mixins/FormData';



export default Vue.extend({
  name: 'Section1',
  mixins: [SectionsMixin],
  data() {
    return {
      lookUp: lookup
    };
  },
  components: {
    FormRender,
    SectionHeader,
    NavigateSections,
    SaveButton
  },
  methods: {
    hyphen_to_underscore(word: string) {
      return word.split('-').join('_');
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
e
