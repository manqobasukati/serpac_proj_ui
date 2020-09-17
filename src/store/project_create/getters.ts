import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { ProjectCreateInterface } from './state';

const getters: GetterTree<ProjectCreateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  }
};

export default getters;
