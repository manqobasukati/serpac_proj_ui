import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { CMSInterface } from './state';
import actions from './actions';
import mutations from './mutations';

const Content: Module<CMSInterface, StateInterface> = {
  namespaced: true,
  actions,
  mutations,
  state
};

export default Content;
