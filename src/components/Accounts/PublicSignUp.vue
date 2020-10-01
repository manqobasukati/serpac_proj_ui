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
                  Organization registration
                </div>
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-input
              filled
              label="Organization Name"
              v-model="organization_data.name"
              class="q-mb-md"
            />
            <q-input
              filled
              label="Organization Email"
              v-model="organization_data.email"
              class="q-mb-md"
            />
            <q-input
              filled
              label="Organization Password"
              v-model="organization_data.password"
              class="q-mb-md"
            />
          </q-card-section>
          <q-card-actions align="right">
            <q-btn class="text-primary" @click="sign_up()" flat>Sign Up</q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { create_user } from 'src/core/RequestHandler/user_management';
import Vue from 'vue';
export default Vue.extend({
  name: 'PublicSignUp',
  data() {
    return {
      organization_data: {
        name: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    sign_up() {
      const request = {
        ...this.organization_data,
        username: this.organization_data.email,
        access: ['public']
      };

      create_user(request)
        .then(val => {
          console.log(val);
        })
        .catch(val => {
          console.log(val);
        });
    }
  }
});
</script>
