<template>
  <div class="tw-w-64  tw-bg-gray-200 tw-shadow tw-rounded-md tw-mb-2 tw-p-2 ">
    <div class="tw-flex tw-flex-col">
      <div class="tw-flex tw-justify-between">
        <div class="tw-text-md tw-font-bold">
          {{ lane_name }}
          <span class="tw-font-thin">{{project_count}}</span>
        </div>
        <div>
          <q-icon @click="expandLane" name="expand_more" size="1.2rem"></q-icon>
        </div>
      </div>
      <div v-if="expand">
        <project
          v-for="(proj, key) in projects"
          :key="key"
          :project="projects[key]"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Project from './Project.vue';
export default Vue.extend({
  name: 'Lane',
  components: {
    Project
  },
  //props: ['lane_name', 'projects', 'expand'],
  props: {
    lane_name: {
      type: String
    },
    projects: {
      type: Array
    },
    expand: {
      type: Boolean
    }
  },
  methods: {
    expandLane() {
      this.$emit('expandLane', this.lane_name);
    }
  },
  computed: {
    project_count() {
      if (this.projects.length) {
        return `(${this.projects.length})`;
      }
      return '';
    }
  }
});
</script>
