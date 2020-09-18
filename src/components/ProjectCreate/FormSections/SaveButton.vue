<template>
  <div>
    <div class="row q-mt-sm " style="text-align:right">
      <div class="col"></div>
      <div class="col-6"><q-btn flat color="primary" @click="saveForm()" label="Save" /></div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { SectionsMixin } from 'src/mixins/SectionsMixin';

export default Vue.extend({
  name: 'SaveButton',
  mixins: [SectionsMixin],
});
</script>
