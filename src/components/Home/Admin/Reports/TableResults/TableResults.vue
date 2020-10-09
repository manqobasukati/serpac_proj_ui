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
      row-key="id"
      selection="single"
      :selected.sync="selected"
      :pagination="initialPagination"
    />
  </div>
</template>

<script lang="ts">
import { ProjectModel } from 'src/core/Models/ProjectModel';
import Vue from 'vue';
import { TableStructure } from './TableStructure';
export default Vue.extend({
  name: 'TableResults',
  props: ['TableData'],

  watch: {
    selected() {
      const item = this.selected[0] as ProjectModel;
      this.$q.loading.show();
      this.$router
        .push({ path: `/admin/reports/${item._id as string}` })
        .then(val => {})
        .catch(e => {
          console.error(e);
        });
      this.$q.loading.hide();
    }
  },
  data() {
    return {
      selected: [],
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
