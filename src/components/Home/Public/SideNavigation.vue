<template>
  <div
    class="tw-absolute tw-inset-y-0 tw-left-0 tw-w-56 tw-bg-gray-200  tw-rounded-tr-xxlg tw-rounded-br-xxlg  "
  >
    <div class="tw-flex tw-flex-col tw-p-8">
      <div class="tw-p-3">
        <q-icon name="account_circle" size="8rem" color="grey-5" />
      </div>
      <div>
        <div class="" v-for="(item, key) in items" :key="key">
          <div
            class="tw-flex tw-p-1 tw-flex-row tw-text-lg tw-mt-2 tw-justify-between  tw-font-bold tw-text-blue-500"
          >
            <div style="font-size:17px">
              {{ item.name | removeUnderscore | capitaliseWords }}
            </div>
            <q-icon
              class="tw-p-1 tw-ml-2 tw-mr-1 "
              :name="item.icon"
              size="22px"
            >
            </q-icon>
          </div>
        </div>
      </div>

      <div v-if="false" class="tw-mt-lg" >
        <div
          class="tw-flex tw-p-1 tw-flex-row tw-text-lg tw-mt-2 tw-justify-between  tw-font-bold tw-text-blue-500"
        >
          <div style="font-size:17px">
            Settings
          </div>
          <q-icon class="tw-p-1 tw-ml-2 tw-mr-1 " name="settings" size="22px">
          </q-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { FILTERS } from 'src/core/helpers/filters';

export default Vue.extend({
  name: 'SideNavigation',
  props: ['items'],
  mounted() {
    console.log('Items', this.items);
  },
  filters: {
    ...FILTERS
  }
});
</script>
