<template>
  <div
    class="tw-w-xxlg tw-h-full tw-bg-white tw-shadow tw-rounded-lg tw-flex tw-flex-col tw-p-4"
  >
    <div class="tw-flex tw-flex-col">
      <div class="tw-text-md tw-font-medium">Project documents</div>
      <div v-if="context !== 'admin_inbox'">
        <div
          class="tw-flex tw-flex-row tw-p-2"
          v-for="(file, key) in files"
          :key="key"
        >
          <input
            type="text"
            v-model="file.name"
            class="proj-form-input tw-w-full tw-h-8  tw-text-sm tw-my-1"
            placeholder="Enter file name"
          />
          <q-file
            v-model="file.url"
            filled
            class="tw-rounded-sm tw-ml-2"
            bottom-slots
            dense
            borderless
            label="Label"
            counter
          >
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop />
            </template>
            <template v-slot:append>
              <q-icon name="close" class="cursor-pointer" />
            </template>

            <template v-slot:hint>
              Field hint
            </template>
          </q-file>
        </div>
        <div class="tw-flex tw-flex-row tw-justify-end tw-p-2">
          <div
            @click="addFile"
            class="tw-rounded-full tw-shadow tw-px-2 tw-w-8"
          >
            <q-icon name="add" />
          </div>
        </div>
        <div class="tw-flex tw-flex-row tw-justify-end">
          <div class="">
            <button
              @click="uploadFiles()"
              v-if="context !== 'admin_inbox'"
              class="tw-bg-pink-100   tw-text-sm tw-text-red-400  tw-rounded-md  tw-p-2 tw-mr-2"
            >
              Save and submit
            </button>
          </div>
        </div>
      </div>
      <div v-else>
        <div
          v-for="(file, key) in projectFiles"
          :key="key"
          class="tw-flex tw-w-5/6 tw-justify-between tw-border tw-rounded-md tw-mt-2 tw-ml-5 tw-p-2"
        >
          <div>
            {{ file.file_name }}
          </div>
          <div>
            <a :href="file.url"><q-icon name="get_app" size="sm"></q-icon></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { config } from 'src/core/RequestHandler/config';

import {
  get_files,
  upload_files
} from 'src/core/RequestHandler/project_create';
import Vue from 'vue';
export default Vue.extend({
  name: 'SectionEight',
  props: ['projectID', 'context'],
  data() {
    return {
      projectFiles: null as null | any[],
      files: [
        {
          url: null as null | File,
          name: ''
        }
      ]
    };
  },
  mounted() {
    console.log('projectId', this.projectID);
    this.getProjectFiles();
  },
  methods: {
    addFile() {
      this.files.push({
        url: null as null | File,
        name: ''
      });
    },
    getProjectFiles() {
      get_files(this.projectID)
        .then(val => {
          this.projectFiles = (val as any[]).map(v => {
            return {
              file_name: v.name,
              url: `${config.server_url}/assets/${v.url as string}`
            };
          });
        })
        .catch(e => {
          console.log(e);
        });
    },
    uploadFiles() {
      upload_files(this.files, this.projectID)
        .then(v => {
          console.log(v);
          this.$emit('submitForm');
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
});
</script>
