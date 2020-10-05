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
                  Organization Login
                </div>
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-input
              filled
              label="Organization Email"
              name="email"
              v-model="organization_data.email"
              class="q-mb-md"
            />
            <q-input
              filled
              name="password"
              label="Organization Password"
              type="password"
              v-model="organization_data.password"
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
  name: 'PubliSignIn',
  data() {
    return {
      login_message: '',
      organization_data: {
        name: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    async sign_in() {
      const logged_in_user = {
        username: '',
        token: '',
        user_id: '',
        access: []
      };

      const request = {
        ...this.organization_data,
        username: this.organization_data.email
      };

      this.$q.loading.show();
      const response = await login(request);
      if (response.message === 'Hi, here is your access token!') {
        logged_in_user.username = response.payload.username;
        logged_in_user.token = response.payload.token;
        logged_in_user.user_id = response.payload._id;

        localStorage.setItem('serpac_tool_username', logged_in_user.username);
        localStorage.setItem('serpac_tool_token', logged_in_user.token);
        localStorage.setItem('serpac_tool_user_id', logged_in_user.user_id);
        this.$q.loading.hide();
        void this.$router.push({ path: '/public' });
      } else {
        this.$q.loading.hide();
        this.login_message = response.message;
      }
    }
  }
});
</script>
