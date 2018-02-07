export const state = () => ({
  // Возможные языки
  locales: ['ru', 'en'],
  locale: 'ru'
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}
