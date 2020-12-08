import { ProjectModel } from 'src/core/Models/ProjectModel';
import { MutationTree } from 'vuex';
import { HintInterface, ProjectCreateInterface } from './state';

export enum PROJECT_CREATE_MUTATIONS {
  SET_ACTIVE_SECTION = 'set_active_section',
  SET_PREVIOUS_SECTION = 'set_previous_section',
  UPDATE_FORM_DATA = 'update_form_data',
  SET_SELECTED_PROJECT = 'set_selected_project',
  SET_ACTIVE_SUBMODULE = 'set_active_submodule',
  CURRENT_USER_PROJECTS = 'current_user_projects',
  REMOVE_PROJECT = 'remove_project',
  ADD_HINT = 'add_hint',
  REMOVE_HINT = 'remove_hint',
  
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
  [PROJECT_CREATE_MUTATIONS.CURRENT_USER_PROJECTS](
    state: ProjectCreateInterface,
    payload
  ) {
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
  },

  [PROJECT_CREATE_MUTATIONS.REMOVE_PROJECT](
    state: ProjectCreateInterface,
    payload
  ) {
    const index = state.current_user_projects?.findIndex(val => {
      return (val._id = payload);
    });

    state.current_user_projects?.forEach(val => {
      if (val._id === payload) {
        state.current_user_projects?.splice(index as number, 1);
      }
    });
  },

  [PROJECT_CREATE_MUTATIONS.ADD_HINT](state: ProjectCreateInterface, payload) {
    if (!state.hints) {
      state.hints = [];
    }

    if (state.hints.length > 4) {
      state.hints.pop();
    }
    state.hints?.unshift(payload);
  },
  [PROJECT_CREATE_MUTATIONS.REMOVE_HINT](state: ProjectCreateInterface, payload) {
  
    state.hints = state.hints?.filter((val: HintInterface) => {
      return val.field_name !== payload;
    }) as HintInterface[];
  },

 
};

export default mutation;
