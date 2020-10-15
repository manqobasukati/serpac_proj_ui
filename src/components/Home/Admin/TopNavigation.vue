<template>
  <div class="tw-absolute tw-top-0 tw-right-0 tw-w-1/3">
    <div class="tw-rounded-bl-xxlg tw-bg-gray-200 tw-h-12 ">
      <div class="tw-flex tw-flex-1">
        <div class="tw-flex tw-inline-row tw-pl-6 ">
          <div
            v-for="(item, key) in items"
            :key="key"
            class="tw-flex tw-p-1 tw-flex-row tw-text-lg tw-mt-1  tw-justify-between  tw-font-bold tw-text-blue-500"
          >
            <q-icon
              class="tw-p-1 tw-ml-2 tw-mr-1 "
              :name="item.icon"
              size="22px"
            >
            </q-icon>
            <div class="tw-mt-1" style="font-size:17px">
              {{ item.name | removeUnderscore }}
            </div>
          </div>
        </div>
        <div class="tw-flex-1">
          <div class="tw-ml-56 tw-py-3">
            <q-icon
              @click="logout()"
              size="22px"
              class="tw-p-1 tw-ml-2 tw-mr-1 tw-text-blue-500 "
              name="logout"
            >
            </q-icon>
            <q-tooltip>
              Logout
            </q-tooltip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { module_definition } from 'src/core/ModuleDefinition';
import { FILTERS } from 'src/core/helpers/filters';

export default Vue.extend({
  name: 'TopNaviagation',
  data() {
    return {
      items: module_definition['admin'].modules
    };
  },
  filters: {
    ...FILTERS
  },
  methods: {
    logout() {
      localStorage.removeItem('serpac_tool_username');
      localStorage.removeItem('serpac_tool_token');
      localStorage.removeItem('serpac_tool_user_id');
      void this.$router.push({ path: '/' });
    }
  }
});
</script>
