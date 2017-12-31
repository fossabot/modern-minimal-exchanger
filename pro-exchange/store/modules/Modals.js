import Types from '../Types'

const state = {
  Modals: {
    Authorization: false,
    Registration: false
  }
}

const mutations = {
  [Types.Modals.AUTHORIZATION](state, pyaload) {
    state.Modals.Authorization = pyaload
  },
  [Types.Modals.REGISTRATION](state, pyaload) {
    state.Modals.Registration = pyaload
  }
}

const actions = {
  ModalAuthorization({ commit }, pyaload) {
    commit(Types.Modals.AUTHORIZATION, pyaload)
  },
  ModalRegistration({ commit }, pyaload) {
    commit(Types.Modals.REGISTRATION, pyaload)
  }
}

const getters = {
  ModalAuthorization: state => {
    return state.Modals.Authorization
  },
  ModalRegistration: state => {
    return state.Modals.Registration
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
