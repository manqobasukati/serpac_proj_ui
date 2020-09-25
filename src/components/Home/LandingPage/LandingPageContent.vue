<template>
  <div>
    <div class="landing__content" style="height:95vh;">
      <div class="row landing__content_actual">
        <div class="col"></div>
        <div class="col-5" style="margin-top:5rem">
          <div class="text-h3 text-center">
            ESEPARC (Eswatini Economic Policy Analysis and Research Centre)
          </div>
          <div class="text-h4 text-center">
            Project management tool
          </div>
          <div class="text-center">
            <q-btn outline label="Sign Up" @click="change_route('/public-sign-up')" class="q-ma-sm q-mt-lg" />
            <q-btn outline label="Sign in" @click="change_route('/public-sign-in')" class="q-ma-sm q-mt-lg" />
          </div>
        </div>

        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'LandingPageContent',
  methods: {
    change_route(path: string) {
      void this.$router.push({ path: path });
    }
  }
});
</script>

<style scoped>
div.landing__content {
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
}
</style>
