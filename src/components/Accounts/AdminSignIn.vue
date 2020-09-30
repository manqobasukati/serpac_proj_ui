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
                  Admin login
                </div>
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-input
              filled
              label="Email"
              v-model="user_data.email"
              class="q-mb-md"
            />
            <q-input
              filled
              label="Password"
              v-model="user_data.password"
              type="password"
              class="q-mb-md"
            />
          </q-card-section>
          <q-card-actions align="right">
            <q-btn class="text-primary" @click="sign_in()" flat>Sign In</q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { login } from 'src/core/RequestHandler/user_management';
import Vue from 'vue';
export default Vue.extend({
  name: 'AdminSignIn',
  data() {
    return {
      user_data: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    sign_in() {
      const logged_in_user = {
        username: '',
        token: ''
      };

      const request = {
        ...this.user_data,
        username: this.user_data.email
      };

      login(request)
        .then(val => {
         
          logged_in_user.username = val.username;
          logged_in_user.token = val.token;

          localStorage.setItem('serpac_tool_username', logged_in_user.username);
          localStorage.setItem('serpac_tool_token', logged_in_user.token);
        })
        .catch(val => {
          console.log(val);
        });
    }
  }
});
</script>
