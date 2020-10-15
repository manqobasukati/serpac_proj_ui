<template>
  <div class="tw-h-screen tw-bg-gray-200">
    <div
      class="tw-flex tw-flex-col tw-justify-center tw-items-center tw-w-full tw-h-full"
    >
      <div class="tw-w-1/3">
        <div class="tw-text-2xl tw-font-semibold tw-text-red-300">Sign Up</div>
        <div class=" tw-shadow-md tw-rounded-lg tw-h-mdlg  tw-bg-white tw-p-2">
          <div class="tw-flex tw-flex-col">
            <div class="tw-flex tw-flex-col">
              <div class="tw-text-md tw-font-medium">User Details</div>
              <div class="tw-flex tw-flex-row tw-p-2">
                <input
                  type="text"
                  class="proj-form-input tw-w-full tw-h-8 tw-text-sm"
                  placeholder="Name"
                  v-model="organization_data.firstname"
                />
                <input
                  type="text"
                  class="proj-form-input tw-w-full tw-h-8 tw-text-sm tw-ml-2"
                  placeholder="Surname"
                  v-model="organization_data.lastname"
                />
              </div>

              <div class="tw-flex tw-flex-row tw-p-2">
                <input
                  type="text"
                  class="proj-form-input tw-w-full tw-h-8 tw-text-sm"
                  placeholder="Email"
                  v-model="organization_data.email"
                />
                <input
                  type="text"
                  class="proj-form-input tw-w-full tw-h-8 tw-text-sm tw-ml-2"
                  v-model="organization_data.phone_number"
                  placeholder="Phonenumber"
                />
              </div>
              <div class="tw-flex tw-flex-row tw-p-2">
                <input
                  type="text"
                  class="proj-form-input tw-w-full tw-h-8 tw-text-sm"
                  placeholder="Organization name"
                  v-model="organization_data.name"
                />
              </div>
            </div>
            <div class="tw-flex tw-flex-col">
              <div class="tw-text-md tw-font-medium">Password</div>
              <div class="tw-flex tw-flex-row tw-p-2">
                <input
                  type="password"
                  class="proj-form-input tw-w-full tw-h-8 tw-text-sm"
                  placeholder="password"
                  v-model="organization_data.password"
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
                  Save
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
import { create_user } from 'src/core/RequestHandler/user_management';
import Vue from 'vue';
export default Vue.extend({
  name: 'PublicSignUp',
  data() {
    return {
      sign_up_message: '',
      organization_data: {
        name: '',
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        phone_number: ''
      }
    };
  },
  methods: {
    sign_up() {
      const request = {
        ...this.organization_data,
        username: this.organization_data.email,
        access: ['public'],
        meta: {
          firstname: this.organization_data.firstname,
          lastname: this.organization_data.lastname
        }
      };

      this.sign_up_message = user_form_validate(request, 'public_sign_up');

      if (!this.sign_up_message) {
        this.$q.loading.show();
        create_user(request)
          .then(val => {
            //Navigate to login

            void this.$router.push({ path: '/public-sign-in' });
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
