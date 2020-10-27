<template>
  <div
    class="tw-w-xxlg tw-h-full tw-bg-white tw-shadow tw-rounded-lg tw-flex tw-flex-col tw-p-4"
  >
    <div class="tw-flex tw-flex-col">
      <div class="tw-text-md tw-font-medium">Project documents</div>
      <div
        class="tw-flex tw-flex-col tw-p-2"
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
          class="tw-rounded-sm"
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
      <div class="tw-flex tw-flex-row tw-justify-end">
        <div class="">
          <button
            @click="uploadFiles()"
            v-if="context !== 'admin_inbox'"
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
import { upload_files } from 'src/core/RequestHandler/project_create';
import Vue from 'vue';
export default Vue.extend({
  name: 'SectionEight',
  props: ['projectID', 'context'],
  data() {
    return {
      files: [
        {
          url: null as null | File,
          name: ''
        },
        {
          url: null as null | File,
          name: ''
        }
      ]
    };
  },
  mounted() {
    console.log('projectId', this.projectID);
  },
  methods: {
    uploadFiles() {
      upload_files(this.files)
        .then(v => {
          console.log(v);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
});
</script>
