import { map_form_model } from 'src/core/helpers/map_model_form';
import {
  get_user_projects,
  project_create,
  remove_project
} from 'src/core/RequestHandler/project_create';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { PROJECT_CREATE_MUTATIONS } from './mutations';
import { ProjectCreateInterface } from './state';

export enum PROJECT_CREATE_ACTIONS {
  SET_ACTIVE_SECTION = 'set_active_section',
  SET_PREVIOUS_SECTION = 'set_previous_section',
  SET_SELECTED_PROJECT = 'set_selected_project',
  SET_ACTIVE_SUBMODULE = 'set_active_submodule',
  UPDATE_FORM_DATA = 'update_form_data',
  UPDATE_FORM_DATE_STATE = 'update_form_data_state',
  CURRENT_USER_PROJECTS = 'current_user_projects',
  REMOVE_PROJECT = 'remove_project'
}

const actions: ActionTree<ProjectCreateInterface, StateInterface> = {
  [PROJECT_CREATE_ACTIONS.SET_ACTIVE_SECTION](context, payload) {
    // your code

    context.commit(PROJECT_CREATE_MUTATIONS.SET_ACTIVE_SECTION, payload);
  },
  [PROJECT_CREATE_ACTIONS.SET_PREVIOUS_SECTION](context, payload) {
    // your code

    context.commit(PROJECT_CREATE_MUTATIONS.SET_PREVIOUS_SECTION, payload);
  },
  [PROJECT_CREATE_ACTIONS.SET_SELECTED_PROJECT](context, payload) {
    context.commit(PROJECT_CREATE_MUTATIONS.SET_SELECTED_PROJECT, payload);
  },
  [PROJECT_CREATE_ACTIONS.SET_ACTIVE_SUBMODULE](context, payload) {
    context.commit(PROJECT_CREATE_MUTATIONS.SET_ACTIVE_SUBMODULE, payload);
  },
  [PROJECT_CREATE_ACTIONS.UPDATE_FORM_DATA](context, payload) {
    project_create(payload)
      .then(val => {
        console.log('From server', val);
        context.commit(
          PROJECT_CREATE_MUTATIONS.UPDATE_FORM_DATA,
          map_form_model(val)
        );
      })
      .catch(e => {
        console.log(e);
      });
  },
  [PROJECT_CREATE_ACTIONS.UPDATE_FORM_DATE_STATE](context, payload) {
    context.commit(PROJECT_CREATE_MUTATIONS.UPDATE_FORM_DATA, payload);
  },

  [PROJECT_CREATE_ACTIONS.CURRENT_USER_PROJECTS](context, payload) {
    get_user_projects(payload)
      .then(val => {
        context.commit(PROJECT_CREATE_ACTIONS.CURRENT_USER_PROJECTS, val);
      })
      .catch(e => {
        console.error(e);
      });
  },

  [PROJECT_CREATE_ACTIONS.REMOVE_PROJECT](context, payload) {
    remove_project(payload._id)
      .then(val => {
        context.commit(PROJECT_CREATE_MUTATIONS.REMOVE_PROJECT, val);
      })
      .catch(e => console.error(e));
  }
};

export default actions;
