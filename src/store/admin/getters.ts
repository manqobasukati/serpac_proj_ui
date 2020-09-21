import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { AllProjectsInterface } from './state';

const getters: GetterTree<AllProjectsInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  }
};

export default getters;
