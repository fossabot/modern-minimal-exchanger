export const state = () => ({
  Authorization: false,
  Registration: false
})

export const mutations = {
  AUTHORIZATION(state, pyaload) {
    state.Authorization = pyaload
  },
  REGISTRATION(state, pyaload) {
    state.Registration = pyaload
  }
}

export const actions = {
  Authorization({ commit }, pyaload) {
    commit('AUTHORIZATION', pyaload)
  },
  ModalRegistration({ commit }, pyaload) {
    commit('REGISTRATION', pyaload)
  }
}

export const getters = {
  Authorization: state => {
    return state.Authorization
  },
  Registration: state => {
    return state.Registration
  }
}
