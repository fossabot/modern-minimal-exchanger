import Vue from 'vue'
import Vuex from 'vuex'
import Langs from './Langs'
import Menu from './Menu'
import Modals from './Modules/Modals'
import News from './Modules/News'

Vue.use(Vuex)
const store = () => {
  return new Vuex.Store({
    modules: [
      Langs,
      Menu,
      Modals,
      News
    ]
  })
}

export default store
