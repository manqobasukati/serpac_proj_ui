import { ProjectModel } from 'src/core/Models/ProjectModel';
import { MutationTree } from 'vuex';
import { AdminInterface } from './state';

export enum ADMIN_MUTATIONS {
  ALL_PROJECTS = 'all_projects',
  UPDATE_PROJECT = 'update_project'
}

const mutation: MutationTree<AdminInterface> = {
  [ADMIN_MUTATIONS.ALL_PROJECTS](state: AdminInterface, payload) {
    // your code

    state.projects = payload;
  },

  [ADMIN_MUTATIONS.UPDATE_PROJECT](state: AdminInterface, payload) {
    state.projects?.forEach((val: ProjectModel) => {
      if (val._id === payload._id) {
        val = payload
      }
    });
  }
};

export default mutation;
