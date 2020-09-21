import { get_projects } from 'src/core/RequestHandler/admin';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ADMIN_MUTATIONS } from './mutations';
import { AdminInterface } from './state';

export enum ADMIN_ACTIONS {
  ALL_PROJECTS = 'all_projects'
}

const actions: ActionTree<AdminInterface, StateInterface> = {
  [ADMIN_ACTIONS.ALL_PROJECTS](context, payload) {
    // your code
    get_projects()
      .then(val => {
        console.log('Get projects', val);
        context.commit(ADMIN_MUTATIONS.ALL_PROJECTS, val);
      })
      .catch(e => {
        console.log(e);
      });
  }
};

export default actions;
