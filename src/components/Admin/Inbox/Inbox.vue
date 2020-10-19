<template>
  <div>
    <div class="tw-flex tw-flex-row">
      <div class="tw-flex tw-w-1/8 tw-flex-col tw-pt-24 tw-pl-8">
        <lane
          v-for="(group, key) in get_current_projects"
          :key="key"
          :lane_name="group[0].project_status"
          :projects="group"
          :expand="expandedLane === group[0].project_status"
          @expandLane="setExpandedLane"
        />
        
      </div>
      <div class="tw-flex tw-w-full tw-pt-24 tw-pl-3">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ProjectModel } from 'src/core/Models/ProjectModel';
import { MODULES } from 'src/store';
import { PROJECT_CREATE_ACTIONS } from 'src/store/project_create/actions';
import { ProjectCreateInterface } from 'src/store/project_create/state';
import Vue from 'vue';
import { mapState } from 'vuex';

import Lane from './Lane.vue';

export default Vue.extend({
  name: 'Inbox',
  data() {
    return {
      expandedLane: '',
      new_projects: [
        {
          title: 'Lubanzi project',
          id: '1',
          description:
            'This project will do good and if, people can get behind it and not lookdown upon it',
          date: '20 July 2020',
          sector: 'Energy'
        },
        {
          title: 'Blind project',
          id: '2',
          description:
            'This project will do good and if, people can get behind it and not lookdown upon it',
          date: '20 July 2020',
          sector: 'Energy'
        },
        {
          title: 'Lukhwezi project',
          id: '3',
          date: '20 July 2020',
          sector: 'Energy',
          description:
            'This project will do good and if, people can get behind it and not lookdown upon it'
        }
      ],
      initial_scoping: [
        {
          title: 'Lubanzi project',
          id: '4',
          description:
            'This project will do good and if, people can get behind it and not lookdown upon it',
          date: '20 July 2020',
          sector: 'Energy'
        },
        {
          title: 'Lubanzi project',
          id: '5',
          description:
            'This project will do good and if, people can get behind it and not lookdown upon it',
          date: '20 July 2020',
          sector: 'Energy'
        }
      ]
    };
  },
  mounted() {
    this.current_user_projects();
  },
  components: {
    Lane
  },
  computed: {
    ...mapState(MODULES.PROJECT_CREATE, {
      get_current_projects(state: ProjectCreateInterface) {
        const arr = ['New Projects', 'Initial scoping', 'Work group assesment'];

        const data = state.current_user_projects?.map(val => {
          return {
            ...val,
            project_status: arr[Math.floor(Math.random() * arr.length)]
          };
        });
        let obj: { [name: string]: ProjectModel[] } = {};
        arr.forEach(val => {
          if (data) {
            obj[val] = data.filter(v => {
              return v.project_status === val;
            });
          }
        });

        console.log('Dat', obj);

        return obj;
      }
    })
  },
  methods: {
    current_user_projects() {
      const get_projects_action = `${MODULES.PROJECT_CREATE}/${PROJECT_CREATE_ACTIONS.CURRENT_USER_PROJECTS}`;
      const user_id = localStorage.getItem('serpac_tool_user_id');
      void this.$store.dispatch(get_projects_action, user_id);
    },
    setExpandedLane(data: string) {
      if (this.expandedLane !== data) {
        this.expandedLane = data;
      } else {
        this.expandedLane = '';
      }
    }
  }
});
</script>
