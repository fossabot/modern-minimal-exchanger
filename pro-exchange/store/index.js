import Vue from 'vue'
import Vuex from 'vuex'
import Modals from './modules/Modals.js'

Vue.use(Vuex)
const store = () => {
  return new Vuex.Store({
    modules: [
      Modals
    ]
  })
}

export default store
