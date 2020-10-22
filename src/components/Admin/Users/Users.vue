<template>
  <div class="tw-flex tw-flex-row">
    <div class="tw-flex tw-w-1/8 tw-flex-col tw-pt-24 tw-pl-8">
      <div class="tw-text-3xl tw-font-thin">Users</div>
      <lane
        lane_name="Admin users"
        :projects="users['Admin users']"
        context="users"
        :expand="expandedLane === 'Admin users'"
        @expandLane="setExpandedLane"
      />
      <lane
        lane_name="Public"
        context="users"
        :projects="users['Public']"
        :expand="expandedLane === 'Public'"
        @expandLane="setExpandedLane"
      />
    </div>
    <div class="tw-flex tw-w-1/2 tw-flex-col tw-pt-40 tw-pl-8">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Lane from 'src/components/Admin/Inbox/Lane.vue';
import UserCard from './UserCard.vue';
import { get_users } from 'src/core/RequestHandler/user_management';
import { UserModel } from 'src/core/Models/UserModel';

export default Vue.extend({
  name: 'Users',
  components: {
    Lane,
   
  },
  data() {
    return {
      expandedLane: '',
      users: null as null | { [name: string]: UserModel[] }
    };
  },
  // updated() {
  //   this.get_users();
  // },
  mounted() {
    this.get_users();
  },
  methods: {
    get_users() {
      const obj: { [name: string]: UserModel[] } = {
        'Admin users': [],
        Public: []
      };

      get_users()
        .then(val => {
          val.forEach((element: any) => {
            console.log(element);
            if (element.access.includes('admin')) {
              obj['Admin users'].push(element);
            } else if (!element.access.includes('admin')) {
              obj['Public'].push(element);
            }
          });
          this.users = obj;

          console.log(this.users);
        })
        .catch(e => {
          console.log(e);
        });
    },
    setExpandedLane(data: string) {
      console.log('dat', data, this.expandedLane);
      if (this.expandedLane !== data) {
        this.expandedLane = data;
      } else {
        this.expandedLane = '';
      }
    }
  }
});
</script>
