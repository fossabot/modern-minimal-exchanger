export default function ({ isHMR, app, store, route, params, error, redirect }) {
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) return
  // Get locale from params
  const locale = params.lang || 'ru'

  if (store.state.locales.indexOf(locale) === -1) {
    return error({ message: 'Страница не найдена.', statusCode: 404 })
  }
  // Set locale
  store.commit('SET_LANG', locale)

  app.i18n.locale = locale
}
