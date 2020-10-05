<template>
  <div>
    <div style="height:95vh" class="row">
      <div class="col-2 q-pa-md">
        <div>
          <div class="text-h6 q-ml-lg">Users</div>
          <q-list>
            <q-item
              v-for="(user, key) in users"
              :key="key"
              clickable
              v-ripple
              @click="set_selected_user(user)"
            >
              <q-item-section>
                <q-item-label>
                  {{ user.user }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
      <q-separator vertical />
      <div class="col-8 q-pa-md">
        <user-info :user="selected_user" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { UserModel } from 'src/core/Models/UserModel';
import { get_users } from 'src/core/RequestHandler/user_management';
import Vue from 'vue';

import UserInfo from './UserInfo.vue';

export default Vue.extend({
  name: 'User',
  components: {
    UserInfo
  },
  methods: {
    set_selected_user(_selected_user: any) {
      this.selected_user = _selected_user;
    },
    get_users() {
      get_users()
        .then(val => {
          this.users = val;
          console.log(val)
          return val as UserModel[];
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.get_users();
  },
  data() {
    return {
      selected_user: null as null | UserModel,
      users: null as null | UserModel[]
    };
  }
});
</script>
