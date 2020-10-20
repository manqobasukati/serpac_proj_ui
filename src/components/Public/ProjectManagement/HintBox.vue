<template>
  <div class="tw-flex tw-flex-col">
    <div class="tw-font-md">Hints</div>
    <div v-if="get_hints">
      <div v-for="(hint, key) in get_hints" :key="key"  class="tw-mb-2">
        <hint :hint="hint"/>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { MODULES } from 'src/store';
import { ProjectCreateInterface } from 'src/store/project_create/state';
import Vue from 'vue';
import { mapState } from 'vuex';

import Hint from './Hint.vue';

export default Vue.extend({
  name: 'HintBox',
  components: {
    Hint
  },
  computed: {
    ...mapState(MODULES.PROJECT_CREATE, {
      get_hints(state: ProjectCreateInterface) {
        console.log('Hints', state.hints);
        return state.hints;
      }
    })
  }
});
</script>
