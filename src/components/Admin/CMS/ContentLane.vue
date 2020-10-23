<template>
  <div
    class="tw-w-64  tw-bg-gray-200 tw-shadow tw-rounded-md tw-mb-2 tw-p-2 tw-mx-2 "
  >
    <div class="tw-flex tw-flex-col">
      <div class="tw-flex tw-justify-between">
        <div class="tw-text-md tw-font-bold">
          {{ lane_name | removeUnderscore }}
          <span class="tw-font-thin">{{ content_count }}</span>
        </div>
        <div>
          <q-icon @click="expandLane" name="add" size="1.2rem"></q-icon>
        </div>
      </div>
      <div>
        <content-info
          @editContent="editContentContentLane"
          @deleteContent="deleteContentLane"
          v-for="(c, key) in content"
          :key="key"
          :content="c"
          :lane_name="lane_name"
        />
      </div>
    </div>
    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">{{ lane_name }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <input
            class="proj-form-input focus:tw-outline-none"
            dense
            v-model="response.value"
            autofocus
            @keyup.enter="prompt = false"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="add" v-close-popup @click="addContent" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import Project from './Project.vue';

import ContentInfo from './ContentInfo.vue';
import { FILTERS } from 'src/core/helpers/filters';

export default Vue.extend({
  name: 'ContentLane',
  components: {
    'content-info': ContentInfo
  },
  data() {
    return {
      prompt: false,
      response: {
        content_field: '',
        value: ''
      }
    };
  },
  props: {
    lane_name: {
      type: String as PropType<string>
    },
    content: {
      type: Array as PropType<any>
    },
    expand: {
      type: Boolean
    }
  },
  methods: {
    addContent() {
      const data = {
        ...this.response,
        content_field: this.lane_name
      };
      this.$emit('addContent', data);
    },
    deleteContentLane(data: { [name: string]: string }) {
      console.log('Dele',data)
      this.$emit('deleteContentLane', data);
    },
    editContentContentLane(data: { [name: string]: string }) {
      console.log('Edit 2', data);
      this.$emit('editContentLane', data);
    },
    expandLane() {
      this.prompt = !this.prompt;

      //this.$emit('expandLane', this.lane_name);
    }
  },
  filters: {
    ...FILTERS
  },
  computed: {
    content_count() {
      const content: any[] = this.content;
      if (content) {
        return `(${content.length})`;
      }
      return '';
    }
  }
});
</script>
