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
                  class="proj-form-input tw-w-full tw-h-8 tw-text-sm"
                  v-model="organization_data.email"
                  placeholder="Email"
                />
              </div>
              <div class="tw-flex tw-flex-row tw-p-2">
                <q-input
                  borderless
                  name="password"
                  :type="isPwd ? 'password' : 'text'"
                  class="proj-form-input tw-w-full tw-h-8 tw-text-sm"
                  v-model="organization_data.password"
                  placeholder="Password"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      size="xs"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
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
import { login } from 'src/core/RequestHandler/user_management';
import Vue from 'vue';
export default Vue.extend({
  name: 'PubliSignIn',
  data() {
    return {
      isPwd: true,
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

      this.login_message = user_form_validate(request, 'public_sign_in');

      if (!this.login_message) {
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
  }
});
</script>
