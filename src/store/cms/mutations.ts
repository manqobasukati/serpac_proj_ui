import { MutationTree } from 'vuex';
import { CONTENT_ACTIONS } from './actions';
import { CMSInterface } from './state';

export enum CONTENT_MUTATIONS {
  SET_CONTENT = 'set_content'
}

const mutation: MutationTree<CMSInterface> = {
  [CONTENT_ACTIONS.SET_CONTENT](state: CMSInterface, payload) {
   

    state.content = payload;
  }
};

export default mutation;
