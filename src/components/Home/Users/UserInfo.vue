<template>
  <div>
    <div v-if="user">
      <div class="text-h5">Information about {{ user.name }}</div>
      <div class="row q-mt-md">
        <q-input filled class="col " label="name" v-model="user.name" />
        <q-input
          filled
          class="col q-ml-sm "
          label="Surname"
          v-model="user.surname"
        />
      </div>
      <div class="row q-mt-md">
        <q-input filled class="col " label="Organization" />
      </div>
      <div class="row q-mt-md">
        <q-input filled class="col" v-model="user.email" label="email" />
        <q-input
          filled
          class="col q-ml-sm"
          v-model="user.password"
          label="password"
        />
        <q-input
          filled
          class="col q-ml-sm"
          v-model="user.access"
          label="access role"
        />
      </div>
      <q-btn class="q-mt-sm text-primary" flat label="Save" />
    </div>
  </div>
</template>

<script lang="ts">
import { UserModel } from 'src/core/Models/UserModel';
import Vue from 'vue';
export default Vue.extend({
  name: 'UserInfo',
  props: ['user'],
  data() {
    return {
      local_user: JSON.parse(JSON.stringify(this.user))
    };
  },
  methods: {}
});
</script>
