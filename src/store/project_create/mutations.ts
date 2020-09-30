import { ProjectModel } from 'src/core/Models/ProjectModel';
import { MutationTree } from 'vuex';
import { ProjectCreateInterface } from './state';

export enum PROJECT_CREATE_MUTATIONS {
  SET_ACTIVE_SECTION = 'set_active_section',
  SET_PREVIOUS_SECTION = 'set_previous_section',
  UPDATE_FORM_DATA = 'update_form_data',
  SET_SELECTED_PROJECT = 'set_selected_project',
  SET_ACTIVE_SUBMODULE = 'set_active_submodule',
  CURRENT_USER_PROJECTS = 'current_user_projects'
}

const mutation: MutationTree<ProjectCreateInterface> = {
  [PROJECT_CREATE_MUTATIONS.SET_ACTIVE_SECTION](
    state: ProjectCreateInterface,
    payload
  ) {
    // your code

    state.active_section = payload as string;
  },
  [PROJECT_CREATE_MUTATIONS.SET_PREVIOUS_SECTION](
    state: ProjectCreateInterface,
    payload
  ) {
    // your code
    state.previous_section = payload as string;
  },

  [PROJECT_CREATE_MUTATIONS.UPDATE_FORM_DATA](
    state: ProjectCreateInterface,
    payload
  ) {
    state.form_data = payload as ProjectModel;
  },

  [PROJECT_CREATE_MUTATIONS.SET_SELECTED_PROJECT](
    state: ProjectCreateInterface,
    payload
  ) {
    state.selected_project = payload;
  },
  [PROJECT_CREATE_MUTATIONS.SET_ACTIVE_SUBMODULE](
    state: ProjectCreateInterface,
    payload
  ) {
    state.active_submodule = payload;
  },
  [PROJECT_CREATE_MUTATIONS.CURRENT_USER_PROJECTS](state:ProjectCreateInterface, payload){
    state.current_user_projects = payload;
  },
  [PROJECT_CREATE_MUTATIONS.UPDATE_FORM_DATA](
    state: ProjectCreateInterface,
    payload
  ) {
  
    try {
      state.form_data = JSON.parse(JSON.stringify(payload));
    } catch (e) {
      console.log('Catch', e);
    }
  }
};

export default mutation;
