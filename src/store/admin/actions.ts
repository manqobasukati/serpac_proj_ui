import {
  create_comment,
  get_comments,
  get_projects
} from 'src/core/RequestHandler/admin';
import {
  project_create,
  update_project
} from 'src/core/RequestHandler/project_create';
import { ActionTree } from 'vuex';
import { MODULES, StateInterface } from '../index';
import { ADMIN_MUTATIONS } from './mutations';
import { AdminInterface } from './state';

export enum ADMIN_ACTIONS {
  ALL_PROJECTS = 'all_projects',
  UPDATE_PROJECT_STATUS = 'update_project_status',
  CREATE_COMMENT = 'create_comment',
  SET_COMMENTS = 'update_comments'
}

const actions: ActionTree<AdminInterface, StateInterface> = {
  [ADMIN_ACTIONS.ALL_PROJECTS](context) {
    // your code
    get_projects()
      .then(val => {
        console.log('GET HERE');
        // val.forEach((v:any)=>{
        //   console.log('ACTION', v.project_description.title, v.project_status)
        // })
        context.commit(ADMIN_MUTATIONS.ALL_PROJECTS, val);
      })
      .catch(e => {
        console.log(e);
      });
  },

  [ADMIN_ACTIONS.UPDATE_PROJECT_STATUS](context, payload) {
    update_project(payload)
      .then(val => {
      
        context.commit(ADMIN_MUTATIONS.UPDATE_PROJECT_STATUS, val);
        const get_projects_action = `${ADMIN_ACTIONS.ALL_PROJECTS}`;

        void context.dispatch(get_projects_action);
      })
      .catch(e => {
        console.log(e);
      });
  },
  [ADMIN_ACTIONS.CREATE_COMMENT](context, payload) {
    create_comment(payload)
      .then(val => {
        context.commit(ADMIN_ACTIONS.CREATE_COMMENT, val);
      })
      .catch(e => {
        console.log(e);
      });
  },
  [ADMIN_ACTIONS.SET_COMMENTS](context, payload) {
    get_comments()
      .then(val => {
        context.commit(ADMIN_MUTATIONS.SET_COMMENTS, val);
      })
      .catch(e => {
        console.log(e);
      });
  }
};

export default actions;
