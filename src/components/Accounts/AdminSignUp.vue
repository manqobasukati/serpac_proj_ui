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
            <q-input
              filled
              label="Firstname"
              v-model="user_data.firstname"
              class="q-mb-md"
            />
            <q-input
              filled
              label="Surname"
              v-model="user_data.surname"
              class="q-mb-md"
            />
            <q-input
              filled
              label="Email"
              v-model="user_data.email"
              class="q-mb-md"
            />
            <q-input
              filled
              label="Password"
              type="password"
              v-model="user_data.password"
              class="q-mb-md"
            />
          </q-card-section>
          <div v-if="sign_up_message" class="text-subtitle2 text-red q-ml-lg">
            {{ sign_up_message }}
          </div>
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
import Vue from 'vue';

import { create_user } from '../../core/RequestHandler/user_management';
import { user_form_validate } from '../../core/helpers/form_validation';
export default Vue.extend({
  name: 'AdminSignUp',
  data() {
    return {
      sign_up_message: '',
      user_data: {
        firstname: '',
        surname: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    sign_up() {
      const request = {
        ...this.user_data,
        username: this.user_data.email,
        access: ['admin']
      };

      this.sign_up_message = user_form_validate(request, 'admin_sign_up');

      if (!this.sign_up_message) {
         this.$q.loading.show();
        create_user(request)
          .then(val => {
            void this.$router.push({ path: '/admin-sign-in' });
            this.$q.loading.hide();
          })
          .catch(val => {
            console.log(val);
          });
      }
    }
  }
});
</script>
