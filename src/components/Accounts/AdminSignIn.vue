<template>
  <div class="tw-h-screen tw-bg-gray-200">
    <div
      class="tw-flex tw-flex-col tw-justify-center tw-items-center tw-w-full tw-h-full"
    >
      <div class="tw-w-1/3">
        <div class="tw-text-2xl tw-font-semibold tw-text-red-300">Sign In</div>
        <div class=" tw-shadow-md tw-rounded-lg tw-h-full  tw-bg-white tw-p-2">
          <div class="tw-flex tw-flex-col">
            <div class="tw-flex tw-flex-col">
              <div class="tw-text-md tw-font-medium">User Details</div>

              <div class="tw-flex tw-flex-row tw-p-2">
                <input
                  type="text"
                  name="email"
                  class="proj-form-input tw-w-full tw-h-8 tw-text-sm"
                 v-model="user_data.email"
                  placeholder="Email"
                />
              </div>
              <div class="tw-flex tw-flex-row tw-p-2">
                <input
                  type="password"
                  name="password"
                  class="proj-form-input tw-w-full tw-h-8 tw-text-sm"
                   v-model="user_data.password"
                  placeholder="Password"
                />
              </div>
            </div>

            <div class="tw-flex tw-flex-row tw-justify-start tw-pl-2">
              <div class="tw-text-red-500" v-if="login_message">
                {{ login_message }}
              </div>
            </div>
            <div class="tw-flex tw-flex-row tw-justify-end">
              <div class="">
                <button
                  @click="sign_in()"
                  class="tw-bg-pink-100   tw-text-sm tw-text-red-400  tw-rounded-md tw-p-1 tw-p-2 tw-mr-2"
                >
                  sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { user_form_validate } from 'src/core/helpers/form_validation';
import { UserModel } from 'src/core/Models/UserModel';
import { login } from 'src/core/RequestHandler/user_management';

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

            localStorage.setItem('serpac_tool_user_id',response.payload._id)

            localStorage.setItem('serpac_tool_token', logged_in_user.token);
            this.$q.loading.hide();
            void this.$router.push({ path: '/admin/inbox' });
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
