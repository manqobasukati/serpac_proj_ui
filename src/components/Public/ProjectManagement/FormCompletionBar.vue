<template>
  <div class=" tw-fixed  tw-left-0 tw-top-0  tw-right-0 tw-pl-56">
    <div
      :style="progress"
      class="tw-m-0 tw-bg-pink-200   tw-text-white tw-text-sm tw-text-center tw-duration-200"
    >
     
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { form_completeion } from 'src/core/helpers/form_validation';

export default Vue.extend({
  name: 'FormCompletionBar',
  props: ['formData'],
  data() {
    return {
      completion: 0
    };
  },
  methods: {
    get_form_completion() {
      this.completion = form_completeion(this.formData) as number;
     
    }
  },
  computed: {
    progress() {
      const percenatage_completion: number = this.completion;
      
      return {
        width: `${percenatage_completion}%`,
        height: '4px'
      };
    }
  },
  watch: {
    formData() {
      if (this.formData) {
        this.get_form_completion();
      }
    }
  }
});
</script>

<style scoped>
div.progress_bar {
  height: 20px;
  width: 100%;
}
</style>
