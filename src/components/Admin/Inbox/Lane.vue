<template>
  <div class="tw-w-64  tw-bg-gray-200 tw-shadow tw-rounded-md tw-mb-2 tw-p-2 ">
    <div class="tw-flex tw-flex-col">
      <div class="tw-flex tw-justify-between">
        <div class="tw-text-md tw-font-bold">
          {{ lane_name }}
          <span class="tw-font-thin">{{ project_count }}</span>
        </div>
        <div>
          <q-icon @click="expandLane" name="expand_more" size="1.2rem"></q-icon>
        </div>
      </div>
      <div v-if="expand">
        <div v-if="context === 'inbox'">
          <project
            v-for="(proj, key) in projects"
            :key="key"
            :project="projects[key]"
          />
        </div>
        <div v-if="context === 'users'">
          <user v-for="(user, key) in projects" :key="key" :user="user" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import Project from './Project.vue';
import User from 'src/components/Admin/Users/User.vue';


export default Vue.extend({
  name: 'Lane',
  components: {
    Project,
    User
  },

  props: {
    lane_name: {
      type: String as PropType<string>
    },
    projects: {
      type: Array as PropType<any>
    },
    expand: {
      type: Boolean
    },
    context:{
      type:String
    }
  },
  methods: {
    expandLane() {
      this.$emit('expandLane', this.lane_name);
    }
  },
  computed: {
    project_count() {
      const projects: any[] = this.projects;
      if (projects) {
        return `(${projects.length})`;
      }
      return '';
    }
  }
});
</script>
