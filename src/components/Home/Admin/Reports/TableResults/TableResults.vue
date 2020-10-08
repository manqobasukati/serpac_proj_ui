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
      :pagination="initialPagination"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { TableStructure } from './TableStructure';
export default Vue.extend({
  name: 'TableResults',
  props: ['TableData'],
  mounted() {
    console.log('TBData', this.TableData);
  },
  data() {
    return {
      initialPagination: {
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: 10
      },
      columns: TableStructure
    };
  }
});
</script>
