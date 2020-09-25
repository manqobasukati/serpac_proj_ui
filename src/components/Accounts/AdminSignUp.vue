<template>
  <div>
    <div class="row">
      <div class="col"></div>
      <div class="col-3">
        <q-card class="q-mt-lg">
          <q-card-section>
            <div class="row">
              <div class="col-3">
                <img src="~/assets/eseparc_logo.png" height="50" />
              </div>
              <q-separator vertical inset />
              <div class="col">
                <div class="text-h6 text-primary q-pa-sm">
                  Admin registration
                </div>
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-input filled label="Firstname" class="q-mb-md" />
             <q-input filled label="Surname" class="q-mb-md" />
            <q-input filled label="Email" class="q-mb-md" />
            <q-input filled label="Password" class="q-mb-md" />
          </q-card-section>
          <q-card-actions align="right">
            <q-btn class="text-primary" flat>Sign Up</q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'AdminSignUp'
});
</script>
