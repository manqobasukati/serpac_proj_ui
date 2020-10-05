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
              name="email"
              label="Email"
              v-model="user_data.email"
              class="q-mb-md"
            />
            <q-input
              filled
              name="password"
              label="Password"
              v-model="user_data.password"
              type="password"
              class="q-mb-md"
            />
            <div v-if="login_message" class="text-subtitle2 text-red q-ml-lg">
              {{ login_message }}
            </div>
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
import { user_form_validate } from 'src/core/helpers/form_validation';
import { login } from 'src/core/RequestHandler/user_management';
import { log } from 'util';
import Vue from 'vue';
export default Vue.extend({
  name: 'AdminSignIn',
  data() {
    return {
      user_data: {
        email: '',
        password: ''
      },
      login_message: ''
    };
  },
  methods: {
    async sign_in() {
      const logged_in_user = {
        username: '',
        token: '',
        access: []
      };

      const request = {
        ...this.user_data,
        username: this.user_data.email
      };

      this.login_message = user_form_validate(request, 'admin_sign_in');

      if (!this.login_message) {
        this.$q.loading.show();
        const response = await login(request);
        if (response.message === 'Hi, here is your access token!') {
          logged_in_user.username = response.payload.username;
          logged_in_user.token = response.payload.token;

          if (response.payload.access.includes('admin')) {
            localStorage.setItem(
              'serpac_tool_username',
              logged_in_user.username
            );
            localStorage.setItem('serpac_tool_token', logged_in_user.token);
            this.$q.loading.hide();
            void this.$router.push({ path: '/admin' });
          } else {
            this.$q.loading.hide();
            this.login_message = 'Unautorised entry';
          }
        } else {
          this.login_message = response.message;
        }
      }
    }
  }
});
</script>
