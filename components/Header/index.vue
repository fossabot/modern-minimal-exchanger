<template>
  <div class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <nuxt-link class="navbar-brand" :to="langLink+'exchange'">
          <img src="~static/img/logo.png" height="66" width="90" alt=""></nuxt-link>
        <button type="button" class="navbar-toggle">
          <span class="sr-only">Открыть</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="responsive-menu">
        <ul class="nav navbar-nav">
          <li v-for="link in Menu" :key="link.id">
            <nuxt-link :to="langLink + link.url" :title="$t('header.'+link.key)">
              {{ $t('header.'+link.key) }}
            </nuxt-link>
          </li>
        </ul>
        <div class="user-blk no-autorization-style">
          <img src="~static/img/ava.png" height="31" width="31" alt="">
          <h3>
            <a href="#" data-modal="#login-modal" class="modal__trigger" @click="ModalAuthorization(true)">Войти</a>
            <span>или</span>
          </h3>
          <button data-modal="#login-modal2" class="modal__trigger"  @click="ModalRegistration()">Зарегистрируйтесь</button>
        </div>

      </div>

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
      let lang = this.$i18n.locale;
      let newlang = 'ru';
      if (this.$i18n.locale === 'ru')
        newlang = 'en';

      if (this.$route.fullPath.indexOf('/'+ lang +'/') === 0) {
        this.$router.push(this.$route.fullPath.replace('/' + lang + '/', '/' + newlang + '/'))
      } else
      {
        this.$router.push(this.$route.fullPath.replace('/' + lang, '/' + newlang + '/'))
      }
    }
  },
  computed: {
    langLink() {
      return '/' + this.$t('lang') + '/'
    },
    Menu() {
      return this.$store.state.Menu.Header
    }
  }
}
</script>
