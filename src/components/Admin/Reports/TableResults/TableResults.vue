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
    
      
      this.$emit('setView', { view: 'single', projectId: item._id });
      // this.$router
      //   .push({ path: `/admin/reports/${item._id as string}` })
      //   .then(val => {
      //     console.log(val)
      //     this.$q.loading.hide();
      //   })
      //   .catch(e => {
      //     console.error('Error', e);
      //   });
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
