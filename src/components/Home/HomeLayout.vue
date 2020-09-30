<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          {{ project_name | removeUnderscore | capitaliseWords }}
        </q-toolbar-title>

        <q-space />
        <q-separator dark vertical />
        <q-btn
          v-if="showLogout"
          @click="logout()"
          auto-close
          stretch
          flat
          label="logout"
        />
        <q-separator dark vertical />

        <q-btn-dropdown auto-close v-if="showAdmin" stretch flat label="Admin">
          <q-list>
            <q-item to="/admin-sign-up" clickable>
              <q-item-section>Sign Up</q-item-section>
            </q-item>

            <q-item to="/admin-sign-in" clickable>
              <q-item-section>Sign In</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import Vue from 'vue';

import { FILTERS } from 'src/core/helpers/filters';
import { module_definition } from 'src/core/ModuleDefinition';

export default Vue.extend({
  name: 'HomeLayout',
  data() {
    return {
      drawer: false,
      miniState: true,
      left: false,
      navigationItems: module_definition['public'].modules.map(() => {
        return;
      }),
      project_name: module_definition['public'].name
    };
  },
  methods: {
    logout() {
      localStorage.removeItem('serpac_tool_username');
      localStorage.removeItem('serpac_tool_token');
      localStorage.removeItem('serpac_tool_user_id');
      void this.$router.push({ path: '/' });
    }
  },
  computed: {
    showLogout() {
      const paths = [
        '/home',
        '/public-sign-up',
        '/public-sign-in',
        '/admin-sign-in',
        '/admin-sign-up'
      ];
      return !paths.includes(this.$route.path);
    },
    showAdmin() {
      return this.$route.path === '/home';
    }
  },
  filters: {
    ...FILTERS
  }
});
</script>

<style scoped>
.section__menu_item {
  background-color: #92acf3b2;
  width: 80%;
  font-size: 1.3rem;
  padding: 0.5rem;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-bottom: 10px;
}
</style>
