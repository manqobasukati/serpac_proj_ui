<template>
  <div>
    <div
      v-if="hint"
      class="tw-flex tw-flex-col tw-h-24 tw-w-48 tw-shadow-md tw-bg-white tw-rounded-md tw-p-1"
    >
      <div class="tw-flex tw-justify-between">
        <div class="tw-text-sm tw-font-regular tw-p-1">
          {{ hint.field_name | removeUnderscore }}
        </div>
        <div class="">
          <q-icon
            @click="closeHint(hint.field_name)"
            color="red-9"
            name="cancel"
          ></q-icon>
        </div>
      </div>
      <div class="tw-flex tw-font-thin tw-p-1 tw-text-xs">
        {{ hint.description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { FILTERS } from 'src/core/helpers/filters';
import { MODULES } from 'src/store';
import { PROJECT_CREATE_ACTIONS } from 'src/store/project_create/actions';
import Vue from 'vue';
export default Vue.extend({
  name: 'Hint',
  props: ['hint'],
  methods: {
    closeHint(field_name: string) {
      const action = `${MODULES.PROJECT_CREATE}/${PROJECT_CREATE_ACTIONS.REMOVE_HINT}`;

      this.$store.dispatch(action, field_name).catch(e => {
        console.error(e);
      });
    }
  },
  filters: {
    ...FILTERS
  }
});
</script>
