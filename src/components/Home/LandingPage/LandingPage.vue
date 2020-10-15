<template>
  <div class="tw-h-screen tw-bg-gray-200">
    <div class="tw-flex tw-flex-col tw-h-full">
      <div class="tw-flex tw-flex-row tw-p-3">
        <div class="tw-flex tw-justify-end tw-flex-1 tw-font-bold">
          <div class="tw-text-md tw-mx-6">About</div>
          <div class=" tw-text-md tw-mx-6">Contact us</div>
        </div>
        <div
          class="tw-flex tw-justify-end tw-flex-1 tw-font-medium tw-items-center"
        >
          <div class="tw-text-md tw-mx-4 tw-text-red-300">
            <router-link to="/public-sign-in"> Sign in</router-link>
         
          </div>
          <div
            class=" tw-text-md tw-mx-4 tw-text-red-900  tw-p-3 tw-opacity-25 tw-rounded-lg tw-bg-red-300 tw-w-24 tw-text-center"
          >
            <router-link to="/public-sign-up"> Sign Up</router-link>
          </div>
        </div>
      </div>
      <div class="tw-flex  tw-flex-row tw-justify-around tw-flex-1">
        <div
          class="tw-flex tw-flex-col tw-justify-center tw-items-center flex-1"
        >
          <div class="">
            <div
              class="tw-text-3xl tw-font-bold"
              style="text-shadow:0 0 4px #0002"
            >
              Project Managment made easy
            </div>
            <div class="tw-text-md tw-font-light">
              A tool to facilitate project Managment across<br />
              different stakeholders.
            </div>
          </div>
        </div>
        <div
          class="tw-flex tw-flex-col flex-1  tw-justify-center tw-items-center flex-1"
        >
          <div>
            <img class="tw-h-xxxlg" src="~/assets/home_pic.png" />
          </div>
        </div>
      </div>
      <div class="tw-flex "></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'LandingPage'
});
</script>

<style scoped>
div.landing__content {
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
}
</style>
