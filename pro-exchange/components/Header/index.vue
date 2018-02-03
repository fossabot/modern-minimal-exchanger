<template>
<div class="Wrapper">
  <input type="checkbox" id="toogle_menu" />
  <label for="toogle_menu" class="fa fa-bars burger" />
  <header class="showme">
    <div class="Logo">
      <img src="~static/images/dot.png" alt="PRO EXCHANGER" />
      <nuxt-link :to="LangLink">PRO
        <br />
        <span>Exchanger</span>
      </nuxt-link>
    </div>

    <nav>
      <ul>
        <li v-for="link in Menu" :key="link.id">
          <nuxt-link :to="LangLink + link.url" :title="LangMenu(link.url)">
            {{ LangMenu(link.url) }}
          </nuxt-link>
        </li>
      </ul>
    </nav>

    <div class="Authorization">
      <button class="SignIn" @click="ModalAuthorization(true)">
          <i class="fa fa-user-circle" aria-hidden="true"></i>{{ LangMenu('Enter') }}
        </button>
      <span>{{ LangMenu('Or') }}</span>
      <button class="Registration" @click="ModalRegistration()">{{ LangMenu('Register') }}</button>
    </div>
  </header>

  <div class="Logo1">
    <img src="~static/images/dot.png" alt="PRO EXCHANGER">
    <nuxt-link to="/">PRO
      <br />
      <span>Exchanger</span>
    </nuxt-link>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      isLanguage: true
    }
  },
  methods: {
    ModalAuthorization(value) {
      return this.$store.dispatch('Modals/Authorization', value)
    },
    ModalRegistration() {
      var lang = this.$i18n.locale
      var newlang = 'ru'
      if (this.$i18n.locale == 'ru')
        newlang = 'en'

      if (this.$route.fullPath.indexOf('/'+ lang +'/') === 0) {
        this.$router.push(this.$route.fullPath.replace('/' + lang + '/', '/' + newlang + '/'))
      } else 
      {
        this.$router.push(this.$route.fullPath.replace('/' + lang, '/' + newlang + '/'))
      }
    },
    LangMenu(value) {
      return this.$t('Menu.Header.' + String(value))
    },
  },
  computed: {
    LangLink() {
      return '/' + this.$t('lang') + '/'
    },
    Menu() {
      return this.$store.state.Menu.Header
    }
  }
}
</script>
