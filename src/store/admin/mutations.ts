
import { MutationTree } from 'vuex';
import { AdminInterface } from './state';

export enum ADMIN_MUTATIONS {
  ALL_PROJECTS = 'all_projects',
  UPDATE_PROJECT = 'update_project',
  CREATE_COMMENT = 'create_comment',
  SET_COMMENTS = 'set_comments',
  UPDATE_PROJECT_STATUS = 'update_project_status'
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

  [ADMIN_MUTATIONS.UPDATE_PROJECT_STATUS](state:AdminInterface, payload){
    state.projects?.forEach((val)=>{
      if(val._id === payload){
        val = payload;
      }
    })
  },
  [ADMIN_MUTATIONS.CREATE_COMMENT](state: AdminInterface, payload) {
    state.project_comments?.push(payload);
  },
  [ADMIN_MUTATIONS.SET_COMMENTS](state: AdminInterface, payload) {
    state.project_comments = payload;
  }
};

export default mutation;
