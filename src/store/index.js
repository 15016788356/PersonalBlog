import Vue from 'vue'
import Vuex from 'vuex'
import { getTags } from '../api/index.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    randomTags: []
  },
  mutations: {
    setRandomTags(state, list){
      state.randomTags = list;
    }
  },
  actions: {
    getData(context){
      getTags().then(res => {
        context.commit('setRandomTags', res.data.data);
      }, err => {
        console.log(res);
      })
    }
  },
  modules: {
  }
})
