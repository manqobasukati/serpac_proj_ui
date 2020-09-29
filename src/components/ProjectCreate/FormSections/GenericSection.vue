<template>
  <div>
    <section-header :section="get_active_section" />

    <div class="row">
      <div class="col"></div>
      <div class="col-6 q-ml-lg">
        <form-render
          v-if="get_active_section !== 'info_section'"
          :formD="form"
          :FormSection="lookUp[get_active_section]"
          @updateFormData="formUpdate"
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
import { lookup, FormData } from 'src/mixins/FormData';
import { PROJECT_CREATE_ACTIONS } from 'src/store/project_create/actions';

export default Vue.extend({
  name: 'Section1',
  mixins: [SectionsMixin],
  data() {
    return {
       form: FormData,
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
    },
    formUpdate(data: any) {
      const action = `${MODULES.PROJECT_CREATE}/${PROJECT_CREATE_ACTIONS.UPDATE_FORM_DATE_STATE}`;
      this.$store.dispatch(action, data).then((val)=>{
        this.form = this.$store.state.project_create.form_data;
        //console.log('Form',this.form)
      }).catch((e)=>{
        console.log('Data')
      })
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
