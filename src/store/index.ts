import { store } from 'quasar/wrappers';
import Vuex from 'vuex';

import ProjectCreate from 'src/store/project_create';
import Admin from 'src/store/admin';

// import example from './module-example';
// import { ExampleStateInterface } from './module-example/state';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export enum MODULES {
  PROJECT_CREATE = 'project_create',
  ADMIN = 'admin'
}

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  example: unknown;
}

export default store(function({ Vue }) {
  Vue.use(Vuex);

  const Store = new Vuex.Store<StateInterface>({
    modules: {
      [MODULES.PROJECT_CREATE]: ProjectCreate,
      [MODULES.ADMIN]: Admin
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEV
  });

  return Store;
});
