import Types from '../types'

const state = {
  Modals: {
    Authorization: false,
    Registration: false
  }
}

const mutations = {
  [Types.Modals.MODAL_AUTHORIZATION](state, pyaload) {
    state.Modals.Authorization = pyaload
  },
  [Types.Modals.MODAL_REGISTRATION](state, pyaload) {
    state.Modals.Registration = pyaload
  }
}

const actions = {
  ModalAuthorization({ commit }, pyaload) {
    commit(Types.Modals.MODAL_AUTHORIZATION, pyaload)
  },
  ModalRegistration({ commit }, pyaload) {
    commit(Types.Modals.MODAL_REGISTRATION, pyaload)
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
