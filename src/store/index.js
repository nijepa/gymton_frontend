import Vue from "vue";
import Vuex from "vuex";
import clientModule from './music';
import userModule from './user';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    clientModule, 
    userModule
  }
});
