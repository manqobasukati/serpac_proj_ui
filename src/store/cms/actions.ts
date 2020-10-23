import { StateInterface } from '..';
import { CONTENT_MUTATIONS } from './mutations';
import { CMSInterface } from './state';

export enum CONTENT_ACTIONS {
  SET_CONTENT = 'set_content'
}

const actions: ActionTree<CMSInterface, StateInterface> = {
  [CONTENT_ACTIONS.SET_CONTENT](context) {
      context.commit(CONTENT_MUTATIONS.SET_CONTENT)
  }
};


export default actions;