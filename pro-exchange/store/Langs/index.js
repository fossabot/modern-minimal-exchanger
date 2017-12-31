import Types from '../Types'
import ru from './RU'
import en from './EN'

// Default Language
var Lang = ru

// Обязательно имена языков должны быть с маленьких букв
const state = {
  Lang,
  ru,
  en
}

const mutations = {
  [Types.Lang.CHANGE](state, pyaload) {
    state.Lang = state[pyaload.toLowerCase()]
  }
}

const actions = {
  Language({ commit }, pyaload) {
    this.app.router.push('/' + pyaload)
    commit(Types.Lang.CHANGE, pyaload)
  }
}

const getters = {
  Language: state => {
    return state.Lang
  },
  LanguageLink: state => {
    return '/' + state.Lang.Name + '/'
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
