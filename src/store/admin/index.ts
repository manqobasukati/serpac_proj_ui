import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { AdminInterface } from './state';
import actions from './actions';
import mutations from './mutations';

const Admin: Module<AdminInterface, StateInterface> = {
  namespaced: true,
  actions,
  // getters,
  mutations,
  state
};

export default Admin;
