import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { ProjectCreateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const ProjectCreate: Module<ProjectCreateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default ProjectCreate;
