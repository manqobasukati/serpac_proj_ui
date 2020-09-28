<template>
  <div>
    <section-header :section="get_active_section" />

    <div class="row">
      <div class="col"></div>
      <div class="col-6 q-ml-lg">
        <form-render
          v-if="get_active_section !== 'info_section'"
          :FormSection="lookUp[get_active_section]"
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
          </q-card-section>
        </q-card>
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
