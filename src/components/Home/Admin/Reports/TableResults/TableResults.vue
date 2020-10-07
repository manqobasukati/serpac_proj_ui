<template>
  <div>
    <div class="tw-text-xl tw-font-thin">
      Tabular results here
    </div>
    <q-table
      v-if="TableData"
      flat
      dense
      :data="TableData"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { TableStructure } from './TableStructure';
export default Vue.extend({
  name: 'TableResults',
  props:['TableData'],
  data(){
    return{
      columns:TableStructure
    }
  }
});
</script>
