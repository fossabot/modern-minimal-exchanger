<template>
  <div class="Wrapper">
    <input type="checkbox" id="toogle_menu" />
    <label for="toogle_menu" class="fa fa-bars burger" />
    <header class="showme">
      <div class="Logo">
        <img src="~static/images/dot.png" alt="PRO EXCHANGER" />
        <nuxt-link to="/">PRO
          <br />
          <span>Exchanger</span>
        </nuxt-link>
      </div>

      <nav>
        <ul>
          <li v-for="link in Menu" :key="link.id">
            <nuxt-link :to="LangLink + link.url" :title="LangMenu[link.url]">
              {{ LangMenu[link.url] }}
            </nuxt-link>
          </li>
        </ul>
      </nav>

      <div class="Authorization">
        <button class="SignIn" @click="ModalAuthorization(true)">
          <i class="fa fa-user-circle" aria-hidden="true"></i>{{LangMenu['Enter']}}</button>
        <span>{{LangMenu['Or']}}</span>
        <button class="Registration"  @click="ModalRegistration()">{{LangMenu['Register']}}</button>
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
        this.$store.dispatch('ModalAuthorization', value)
      },
      ModalRegistration() {
        if(this.isLanguage)
          this.$store.dispatch('Language', 'en')
        else 
          this.$store.dispatch('Language', 'ru')
        this.isLanguage = !this.isLanguage
      }
    },
    computed: {
      LangLink() {
        return this.$store.getters.LanguageLink
      },
      LangMenu() {
        return this.$store.getters.Language.Menu.Header
      },
      Menu() {
        return this.$store.getters.Menu.Header
      }
    }
  }
</script>
