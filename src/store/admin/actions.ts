import { create_comment, get_projects } from 'src/core/RequestHandler/admin';
import {
  project_create,
  update_project
} from 'src/core/RequestHandler/project_create';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ADMIN_MUTATIONS } from './mutations';
import { AdminInterface } from './state';

export enum ADMIN_ACTIONS {
  ALL_PROJECTS = 'all_projects',
  UPDATE_PROJECT_STATUS = 'update_project_status',
  CREATE_COMMENT = 'create_comment'
}

const actions: ActionTree<AdminInterface, StateInterface> = {
  [ADMIN_ACTIONS.ALL_PROJECTS](context) {
    // your code
    get_projects()
      .then(val => {
        console.log('Get projects', val);
        context.commit(ADMIN_MUTATIONS.ALL_PROJECTS, val);
      })
      .catch(e => {
        console.log(e);
      });
  },

  [ADMIN_ACTIONS.UPDATE_PROJECT_STATUS](context, payload) {
    update_project(payload)
      .then(val => {
        console.log('In action',val);
        context.commit(ADMIN_MUTATIONS.UPDATE_PROJECT, val);
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
  }
};

export default actions;
