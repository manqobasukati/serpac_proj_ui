<template>
  <div
    class="tw-bg-white tw-shadow-sm tw-flex tw-rounded-md tw-justify-between tw-p-2 tw-my-1"
  >
    <div class="tw-text-sm">
      {{ content }}
    </div>
    <div class="tw-flex tw-flex-row">
      <q-icon
        color="green-10"
        @click="showPrompt()"
        size="xs"
        name="edit"
      ></q-icon>

      <q-icon @click="deleteContent()" size="xs" color="red-8" name="delete"></q-icon>
    </div>
    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">{{ content }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <input
            class="proj-form-input focus:tw-outline-none"
            dense
            v-model="new_content"
            autofocus
            @keyup.enter="prompt = false"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="add" v-close-popup @click="editContent" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

export default Vue.extend({
  name: 'ContentInfo',
  data() {
    return {
      prompt: false,
      new_content: ''
    };
  },
  props: {
    content: {
      type: String as PropType<string>
    },
    lane_name: {
      type: String as PropType<string>
    }
  },
  methods: {
    deleteContent() {
      this.$emit('deleteContent', {
        lane_name: this.lane_name,
        content: this.content
      });
    },
    showPrompt() {
      this.prompt = !this.prompt;
    },
    editContent() {
      this.$emit('editContent', {
        lane_name: this.lane_name,
        new_content: this.new_content,
        old_content: this.content
      });
    }
  }
});
</script>
