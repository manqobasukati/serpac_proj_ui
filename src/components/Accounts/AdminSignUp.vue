<template>
  <div class="tw-h-screen tw-bg-gray-200">
    <div
      class="tw-flex tw-flex-col tw-justify-center tw-items-center tw-w-full tw-h-full"
    >
      <div class="tw-w-1/3">
        <div class="tw-text-2xl tw-font-semibold tw-text-red-300">Sign Up</div>
        <div class=" tw-shadow-md tw-rounded-lg tw-h-full  tw-bg-white tw-p-2">
          <div class="tw-flex tw-flex-col">
            <div class="tw-flex tw-flex-col">
              <div class="tw-text-md tw-font-medium">User Details</div>
              <div class="tw-flex tw-flex-row tw-p-2">
                <input
                  type="text"
                  class="proj-form-input tw-w-full tw-h-8 tw-text-sm"
                  placeholder="Name"
                  v-model="user_data.firstname"
                />
                <input
                  type="text"
                  class="proj-form-input tw-w-full tw-h-8 tw-text-sm tw-ml-2"
                  placeholder="Surname"
                  v-model="user_data.surname"
                />
              </div>

              <div class="tw-flex tw-flex-row tw-p-2">
                <input
                  type="text"
                  class="proj-form-input tw-w-full tw-h-8 tw-text-sm"
                  placeholder="Email"
                  v-model="user_data.email"
                />
                <input
                  type="text"
                  class="proj-form-input tw-w-full tw-h-8 tw-text-sm tw-ml-2"
                  placeholder="Phonenumber"
                  v-model="user_data.phone_number"
                />
              </div>
              <div class="tw-flex tw-flex-row tw-p-2">
                <input
                  type="text"
                  class="proj-form-input tw-w-full tw-h-8 tw-text-sm"
                  v-model="user_data.name"
                  placeholder="Organization name"
                />
              </div>
            </div>
            <div class="tw-flex tw-flex-col">
              <div class="tw-text-md tw-font-medium">Password</div>
              <div class="tw-flex tw-flex-row tw-p-2">
                <input
                  type="password"
                  class="proj-form-input tw-w-full tw-h-8 tw-text-sm"
                  v-model="user_data.password"
                  placeholder="password"
                />
                <input
                  type="password"
                  class="proj-form-input tw-w-full tw-h-8 tw-text-sm tw-ml-2"
                  placeholder="confirm password"
                />
              </div>
            </div>
            <div class="tw-flex tw-flex-row tw-justify-start tw-pl-2">
              <div class="tw-text-red-500">
                {{ sign_up_message }}
              </div>
            </div>
            <div class="tw-flex tw-flex-row tw-justify-end">
              <div class="">
                <button
                  @click="sign_up()"
                  class="tw-bg-pink-100   tw-text-sm tw-text-red-400  tw-rounded-md tw-p-1 tw-p-2 tw-mr-2"
                >
                  sign up
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
import Vue from 'vue';

import { create_user } from 'src/core/RequestHandler/user_management';
import { user_form_validate } from 'src/core/helpers/form_validation';
export default Vue.extend({
  name: 'AdminSignUp',
  data() {
    return {
      sign_up_message: '',
      user_data: {
        firstname: '',
        name: '',
        surname: '',
        email: '',
        password: '',
        phone_number: ''
      }
    };
  },
  methods: {
    sign_up() {
      const request = {
        ...this.user_data,
        username: this.user_data.email,
        access: ['admin'],
        meta: {
          firstname: this.user_data.firstname,
          lastname: this.user_data.surname,
          phone_number: this.user_data.phone_number
        }
      };

      this.sign_up_message = user_form_validate(request, 'admin_sign_up');

      if (!this.sign_up_message) {
        this.$q.loading.show();
        create_user(request)
          .then(() => {
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
