<template>
  <div>
    <div
      v-if="user"
      class="tw-bg-white tw-w-full tw-shadow-md tw-h-full tw-rounded-md tw-flex tw-flex-row tw-p-6"
    >
      <div class="tw-flex tw-w-1/8">
        <q-icon
          name="account_circle"
          color="grey-6"
          style="font-size:8rem;"
        ></q-icon>
      </div>
      <div class="tw-flex tw-flex-col tw-w-7/8 tw-p-6 ">
        <div class="tw-text-5xl tw-font-thin tw-my-2">
          {{ user_full_name }}
        </div>
        <div class="tw-flex tw-flex-col tw-py-4">
          <div class="tw-text-xl">Date created</div>
          <div class="tw-text-md">Date here</div>
        </div>

        <div class="tw-flex tw-flex-row tw-py-4">
          <input
            placeholder="Firstname"
            v-model="user.meta.firstname"
            type="text"
            class="proj-form-input tw-h-8 tw-w-48 tw-text-sm tw-mr-3 "
          />
          <input
            placeholder="Surname"
            v-model="user.meta.lastname"
            type="text"
            class="proj-form-input  tw-h-8 tw-w-48 tw-text-sm  tw-mx-3"
          />
        </div>
        <div class="tw-flex tw-flex-row tw-py-2">
          <input
            placeholder="email"
            v-model="user.username"
            type="text"
            class="proj-form-input tw-h-8 tw-w-48 tw-text-sm tw-mr-3 "
          />
          <input
            placeholder="password"
            v-model="user.password"
            type="password"
            class="proj-form-input  tw-h-8 tw-w-48 tw-text-sm  tw-mx-3"
          />
        </div>
        <div class="tw-flex tw-flex-row tw-py-2">
          <q-select
            :options="['admin', 'public']"
            borderless
            v-model="user.access"
            placeholder="access"
            type="text"
            class="proj-form-input tw-h-8 tw-w-full tw-text-sm tw-mr-3 "
          />
        </div>
        <div class="tw-text-md tw-py-2">Project involved in</div>
        <div v-if="user_projects" class="tw-flex tw-flex-row">
          <div
            v-for="(project, key) in user_projects"
            :key="key"
            class="tw-bg-gray-300 tw-w-1/6 tw-rounded-lg tw-text-xs tw-text-center tw-py-1 tw-mx-1"
          >
            {{ project }}
          </div>
        </div>
        <div class="tw-flex tw-justify-end tw-p-4">
          <button
            @click="update_user()"
            class="tw-bg-pink-200 tw-p-2 tw-rounded-md tw-shadow-md  focus:tw-outline-none "
          >
            Update
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { UserModel } from 'src/core/Models/UserModel';
import {
  get_users,
  update_user
} from 'src/core/RequestHandler/user_management';
import { ADMIN_ACTIONS } from 'src/store/admin/actions';
import { MODULES } from 'src/store';
import { ProjectModel } from 'src/core/Models/ProjectModel';
import { get_user_projects } from 'src/core/RequestHandler/project_create';

export default Vue.extend({
  name: 'UserCard',
  data() {
    return {
      user_projects: null as null | string[],
      user: null as null | UserModel
    };
  },

  mounted() {
    this.get_user();
  },
  methods: {
    get_user_projects() {
      get_user_projects(this.user_id)
        .then((val: ProjectModel[]) => {
          val.forEach(val => {
            this.user_projects?.push(val.project_description.title);
          });
        })
        .catch(e => {
          console.log(e);
        });
    },
    update_user() {
      update_user(this.user as UserModel)
        .then(val => {
          this.user = val[0];
        })
        .catch(e => {
          console.log(e);
        });
    },
    get_user() {
      get_users(this.$route.params.userID)
        .then(val => {
          this.user = val[0];
        })
        .catch(e => {
          console.error(e);
        });
    }
  },
  watch: {
    user_id() {
      this.get_user();
    }
  },
  computed: {
    user_full_name() {
      const user = this.user as UserModel;

      if (user.meta) {
        console.log('User', user);
        return `${user.meta.firstname ?? 'Not set'} ${user.meta.lastname ??
          'Not set'}`;
      }

      return 'Not set yet';
    },
    user_id() {
      const id = this.$route.params.userID;
      return id;
    }
  }
});
</script>
