import { ProjectModel } from 'src/core/Models/ProjectModel';
import { MutationTree } from 'vuex';
import { AdminInterface } from './state';

export enum ADMIN_MUTATIONS {
  ALL_PROJECTS = 'all_projects'
}

const mutation: MutationTree<AdminInterface> = {
  [ADMIN_MUTATIONS.ALL_PROJECTS](
    state: AdminInterface,
    payload
  ) {
    // your code

    state.projects = payload ;
  }
};

export default mutation;
