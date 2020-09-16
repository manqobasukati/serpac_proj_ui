import { MutationTree } from 'vuex';
import { ProjectCreateInterface } from './state';

export enum PROJECT_CREATE_MUTATIONS {
  SET_ACTIVE_SECTION = 'set_active_section',
  SET_PREVIOUS_SECTION = 'set_previous_section'
}

const mutation: MutationTree<ProjectCreateInterface> = {
  [PROJECT_CREATE_MUTATIONS.SET_ACTIVE_SECTION](
    state: ProjectCreateInterface,
    payload
  ) {
    // your code
    state.active_section = payload;
  },
  [PROJECT_CREATE_MUTATIONS.SET_PREVIOUS_SECTION](
    state: ProjectCreateInterface,
    payload
  ) {
    // your code
    state.previous_section = payload;
  }
};

export default mutation;
