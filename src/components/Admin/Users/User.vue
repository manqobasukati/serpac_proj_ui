<template>
  <div
    class="tw-bg-white tw-p-3 tw-rounded-md tw-shadow-sm tw-my-1"
    @click="selectUser()"
  >
    <div class="tw-flex tw-flex-row tw-justify-around">
      <div>
        <q-icon size="md" name="person"></q-icon>
      </div>
      <div class="tw-text-md tw-py-1 tw-font-thin">
        {{ fullName }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { UserModel } from 'src/core/Models/UserModel';

export default Vue.extend({
  name: 'User',
  props: {
    user: {
      type: Object as PropType<UserModel>
    }
  },
  methods: {
    selectUser() {
      const user = this.$props.user;
      if (user) {
        void this.$router.push({ path: `/admin/users/${user._id as string}` });
      }
    }
  },
  computed: {
    fullName() {
      const user = this.user;
      if (user.meta) {
        return `${user.meta.firstname} ${user.meta.lastname}`;
      }
      return `${user.username}`;
    }
  }
});
</script>
