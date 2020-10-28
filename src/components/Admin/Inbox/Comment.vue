<template>
  <div class="tw-flex tw-flex-col tw-bg-pink-100 tw-p-2 tw-my-1">
    <div class="tw-flex tw-flex-row tw-justify-between">
      <div>
        {{ comment.comment }}
      </div>
      <div>
        <q-icon @click="toggle" name="arrow_drop_down" size="sm"></q-icon>
      </div>
    </div>
    <div class="tw-flex tw-flex-row tw-justify-between" v-if="showBelow">
      <div class="tw-text-xs tw-pl-2">{{ formatUser }}</div>
      <div class="tw-text-xs">{{ comment.created | dateFormat }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import dayjs from 'dayjs';

import * as local from 'dayjs/plugin/localizedFormat';
import { get_users } from 'src/core/RequestHandler/user_management';
import { UserModel } from 'src/core/Models/UserModel';

export default Vue.extend({
  name: 'Comment',
  props: ['comment'],
  data() {
    return {
      showBelow: false,
      user: null as null | UserModel
    };
  },
  mounted() {
    this.get_user();
  },
  methods: {
    get_user() {
      get_users(this.$props.comment.user)
        .then(val => {
          this.user = val[0];
        })
        .catch(val => {
          console.log(val);
        });
    },
    toggle() {
      this.showBelow = !this.showBelow;
    }
  },
  computed: {
    formatUser() {
      const user = this.user as UserModel;
      console.log('User meta', user?.meta);
      if (user.meta) {
        console.log('Meta', user.meta);
        return `- ${user.meta.firstname} ${user.meta.lastname} `;
      }
      return 'user';
    }
  },
  filters: {
    dateFormat(date: Date) {
      dayjs.extend(local.default);
      return dayjs(date).format('lll');
    }
  }
});
</script>
