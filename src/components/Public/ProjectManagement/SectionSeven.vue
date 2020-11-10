<template>
  <div>
    <div
      class="tw-w-xxlg tw-h-full tw-bg-white tw-shadow tw-rounded-lg tw-flex tw-flex-col tw-p-4 "
    >
      <div class="tw-flex tw-flex-col">
        <div class="tw-text-md tw-font-medium">
          Additional comments about project
        </div>
        
        <div class="tw-flex tw-flex-col tw-p-2">
          <textarea
            v-model="comment_1"
             :disabled="context === 'admin_inbox'"
            class="proj-form-input tw-mt-2  tw-text-sm tw-h-20"
            placeholder="Comment 1"
          />
          <textarea
            v-model="comment_2"
             :disabled="context === 'admin_inbox'"
            class="proj-form-input tw-mt-2  tw-text-sm tw-h-20"
            placeholder="Comment 1 "
          />
        </div>
        <div class="tw-flex tw-flex-row tw-justify-end">
          <div class="">
            <button
              @click="save()"
             
              class="tw-bg-pink-100   tw-text-sm tw-text-red-400  tw-rounded-md tw-p-1 tw-p-2 tw-mr-2"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'SectionSeven',
  props: ['FormD','context'],
  watch: {
    FormD() {
      this.FormData = this.FormD;
      this.assignComments();
    }
  },
  mounted() {
  
    this.FormData = this.FormD;
    this.assignComments();
  },
  data() {
    return {
      comment_1: '',
      comment_2: '',
      FormData: {
        project_extras: []
      }
    };
  },
  methods: {
    assignComments() {
    
      if (this.FormData.project_extras) {
       
        this.comment_1 = this.FormData.project_extras[0]
          ? this.FormData.project_extras[0]
          :this.FormData.project_extras[0];
        this.comment_2 = this.FormData.project_extras[1]
          ? this.FormData.project_extras[1]
          : this.FormData.project_extras[1];

         
      }
    },
    save() {
      const comments = [this.comment_1, this.comment_2].filter(val => {
        return val !== '';
      });

      (this.FormData as any).project_extras = comments;

      this.$emit('updateForm', this.FormData);
    }
  }
});
</script>

<style scoped>
input[type="text"]:disabled {
  color: black;
}

</style>

