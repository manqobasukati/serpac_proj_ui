import { ProjectModel } from 'src/core/Models/ProjectModel';
import { MutationTree } from 'vuex';
import { AdminInterface } from './state';

export enum ADMIN_MUTATIONS {
  ALL_PROJECTS = 'all_projects',
  UPDATE_PROJECT = 'update_project',
  CREATE_COMMENT = 'create_comment',
  SET_COMMENTS = 'set_comments'
}

const mutation: MutationTree<AdminInterface> = {
  [ADMIN_MUTATIONS.ALL_PROJECTS](state: AdminInterface, payload) {
    // your code
    
    state.projects = payload;
    
   
  },

  [ADMIN_MUTATIONS.UPDATE_PROJECT](state: AdminInterface, payload) {
    if (state.projects) {
      for (let i = 0; i <= state.projects?.length - 1; i++) {
        if (state.projects[i]._id === payload._id) {
          state.projects[i] = payload;
        }
      }
    }
  },
  [ADMIN_MUTATIONS.CREATE_COMMENT](state: AdminInterface, payload) {
    state.project_comments?.push(payload);
  },
  [ADMIN_MUTATIONS.SET_COMMENTS](state: AdminInterface, payload) {
    state.project_comments = payload;
  }
};

export default mutation;
