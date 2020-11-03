<template>
  <div>
    <div
      class="tw-w-xxlg tw-h-full tw-bg-white tw-shadow tw-rounded-lg tw-flex tw-flex-col tw-p-4"
    >
      <div class="tw-flex tw-flex-col">
        <div class="tw-text-md tw-font-medium">Project issues</div>
        <div
          v-for="(issue, key) in FormData.key_enablers"
          class="tw-flex tw-flex-col"
          :key="key"
        >
          <div class="tw-flex tw-flex-row tw-p-2">
            <input
              type="text"
              class="proj-form-input tw-w-full tw-h-10  tw-text-sm tw-mx-1"
              placeholder="Issue here"
              v-model="issue.name"
              @focus="addHint('section_6', 'project_issue')"
              :disabled="context === 'admin_inbox'"
            />
            <q-select
              use-chips
              type="text"
              borderless
              :options="StakeHoldersOptions"
              class="proj-form-input tw-h-10  tw-text-sm tw-myx-1"
              label="Enabler"
              v-model="issue.stake_holder"
              dense
              @focus="addHint('section_6', 'project_enabler')"
              :disabled="context === 'admin_inbox'"
            />
          </div>
          <div class="tw-p-2 tw-ml-10">
            <textarea
              type="text"
              class="proj-form-input tw-w-full tw-h-10  tw-text-sm tw-mx-1"
              placeholder="Add comment about issue"
              @focus="addHint('section_6', 'project_comment')"
              :disabled="!issue.name && context === 'admin_inbox'"
            />
          </div>
        </div>

        <div class="tw-flex tw-flex-row tw-justify-end tw-p-2">
          <div
            v-if="context !== 'admin_inbox'"
            @click="addPhase"
            class="tw-rounded-full tw-shadow tw-px-2 tw-w-8"
          >
            <q-icon name="add" />
          </div>
        </div>
      </div>

      <div class="tw-flex tw-flex-row tw-justify-end">
        <div class="">
          <button
            v-if="context !== 'admin_inbox'"
            @click="Save()"
            class="tw-bg-pink-100   tw-text-sm tw-text-red-400  tw-rounded-md  tw-p-2 tw-mr-2"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import {
  get_static,
  StakeHoldersOptions
} from 'src/core/Additional/Contstants';
import { MODULES } from 'src/store';
import { PROJECT_CREATE_ACTIONS } from 'src/store/project_create/actions';
import { hints } from './hints';
import { HintInterface } from 'src/store/project_create/state';
import { get_hints } from 'src/core/helpers/hints';

export default Vue.extend({
  name: 'SectionSeven',
  props: ['context', 'FormD'],
  data() {
    return {
      StakeHoldersOptions: null as null | string[],

      FormData: {
        key_enablers: [
          {
            name: '',
            stakeholder: ''
          }
        ]
      }
    };
  },
  watch: {
    FormD() {
      this.FormData = this.FormD;
    }
  },
  mounted() {
    //this.FormData = this.FormD;
    this.getOptions();
  },
  methods: {
    getOptions() {
      get_static()
        .then(val => {
          this.StakeHoldersOptions = val['enablers'];
          console.log(val);
        })
        .catch(e => {
          console.log(e);
        });
    },
    addHint(section: string, field_name: string) {
      const action = `${MODULES.PROJECT_CREATE}/${PROJECT_CREATE_ACTIONS.ADD_HINT}`;

      get_hints()
        .then((val: any) => {
          const hint = val[section].find((v: HintInterface) => {
            return v.field_name === field_name;
          });

          this.$store
            .dispatch(action, hint)
            .then(val => {
              console.log('Val 1', val);
            })
            .catch(e => {
              console.log(e);
            });
        })
        .catch(e => {
          console.log(e);
        });
    },
    Save() {
      this.$emit('updateForm', this.FormData);
    },
    addPhase() {
      this.FormData.key_enablers.push({
        name: '',
        stakeholder: ''
      });
    }
  }
});
</script>
