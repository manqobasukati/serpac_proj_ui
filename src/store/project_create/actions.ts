import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { PROJECT_CREATE_MUTATIONS } from './mutations';
import { ProjectCreateInterface } from './state';

export enum PROJECT_CREATE_ACTIONS {
  SET_ACTIVE_SECTION = 'set_active_section',
  SET_PREVIOUS_SECTION = 'set_previous_section'
}

const actions: ActionTree<ProjectCreateInterface, StateInterface> = {
  [PROJECT_CREATE_ACTIONS.SET_ACTIVE_SECTION](context, payload) {
    // your code

    context.commit(PROJECT_CREATE_MUTATIONS.SET_ACTIVE_SECTION, payload);
  },
  [PROJECT_CREATE_ACTIONS.SET_PREVIOUS_SECTION](context, payload) {
    // your code

    context.commit(PROJECT_CREATE_MUTATIONS.SET_PREVIOUS_SECTION, payload);
  }
};

export default actions;
