<template>
  <div>
    <q-layout view="hHh lpR fFf">
      <q-header elevated>
        <q-toolbar>
          <q-toolbar-title>
            Landing page
          </q-toolbar-title>

         
        </q-toolbar>
      </q-header>

      <q-page-container>
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
                <q-btn outline label="Create Projects" class="q-ma-sm q-mt-lg" />
                <q-btn outline label="View Projects" class="q-ma-sm q-mt-lg" />
              </div>
            </div>

            <div class="col"></div>
          </div>
        </div>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'LandingPage'
});
</script>

<style scoped>
div.landing__content {
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
}
</style>
