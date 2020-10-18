<template>
  <div>
    <div class="q-ma-lg">
      <div class="row" style="height:15vh"></div>
      <div class="row q-pa-lg q-ml-lg justify-center">
        <div
          v-for="(item, key) in navigation_options"
          :key="key"
          @click="change_navigation(item)"
          class="col navigation__option q-pa-md q-ma-md"
        >
          <q-icon :name="item.icon" style="font-size: 5rem; color:#2076D2" />
          <div class="text-h6">
            {{ item.name | removeUnderscore | capitaliseWords }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { FILTERS } from 'src/core/helpers/filters';
import { ModuleDefinition, module_definition } from 'src/core/ModuleDefinition';
import Vue from 'vue';
export default Vue.extend({
  name: 'Admin',
  data() {
    return {
      navigation_options: module_definition['admin'].modules
    };
  },
  methods: {
    change_navigation(module: ModuleDefinition) {
      if (module.link) {
        void this.$router.push({ path: `${module.link}` });
      }
    }
  },
  filters: {
    ...FILTERS
  }
});
</script>

<style scoped>
div.navigation__option {
  text-align: center;

  border-color: #092877;
  border-radius: 10px;
}
</style>
