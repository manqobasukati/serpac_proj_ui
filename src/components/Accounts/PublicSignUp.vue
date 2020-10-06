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
              label="Firstname"
              v-model="organization_data.firstname"
              class="q-mb-md"
            />
            <q-input
              filled
              label="Lastname"
              v-model="organization_data.lastname"
              class="q-mb-md"
            />
            <q-input
              filled
              label="Organization name"
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
              type="password"
              v-model="organization_data.password"
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
        password: ''
      }
    };
  },
  methods: {
    sign_up() {
      const request = {
        ...this.organization_data,
        username: this.organization_data.email,
        access: ['public'],
        meta:{
          firstname:this.organization_data.firstname,
          lastname:this.organization_data.lastname
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
