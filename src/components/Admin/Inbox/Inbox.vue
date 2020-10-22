<template>
  <div>
    <div class="tw-flex tw-flex-row">
      <div class="tw-flex tw-w-1/8 tw-flex-col tw-pt-24 tw-pl-8">
        <div v-for="(group, key) in get_current_projects" :key="key">
          <lane
            v-if="group.length >= 1"
            :lane_name="group[0].project_status"
            :projects="group"
            :expand="expandedLane === group[0].project_status"
            @expandLane="setExpandedLane"
          />
        </div>
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
import { ADMIN_ACTIONS } from 'src/store/admin/actions';
import { AdminInterface } from 'src/store/admin/state';
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
    this.get_projects();
  },
  components: {
    Lane
  },
  computed: {
    ...mapState(MODULES.ADMIN, {
      get_current_projects(state: AdminInterface) {
        // state.projects?.forEach(val => {
        //   console.log(
        //     'Proj',
        //     val.project_description.title,
        //     val.project_status
        //   );
        // });
        const arr = [
          'New Projects',
          'Initial scoping',
          'Work group assesment',
          'Facilitating Enablers',
          'Ready to Launch',
          'Implementation Ongoing'
        ];

        let obj: { [name: string]: ProjectModel[] } = {};
        arr.forEach(val => {
          if (state.projects) {
            obj[val] = state.projects.filter(v => {
              return v.project_status === val;
            });
          }
        });

        console.log('Projects here', obj);

        return obj;
      }
    })
  },
  methods: {
    get_projects() {
      const get_projects_action = `${MODULES.ADMIN}/${ADMIN_ACTIONS.ALL_PROJECTS}`;
      void this.$store.dispatch(get_projects_action);
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
