import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { AdminInterface } from './state';

const getters: GetterTree<AdminInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  }
};

export default getters;
