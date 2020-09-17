import { ProjectModel } from 'src/core/Models/ProjectModel';
import { MutationTree } from 'vuex';
import { FormDataInterface, ProjectCreateInterface } from './state';

export enum PROJECT_CREATE_MUTATIONS {
  SET_ACTIVE_SECTION = 'set_active_section',
  SET_PREVIOUS_SECTION = 'set_previous_section',
  UPDATE_FORM_DATA = 'update_form_data'
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
  }
};

export default mutation;
