<template>
  <div class="wh100">
    <HeaderMenu/>
    <nuxt/>

    <footer>
      <div class="container">
        <div class="line-top"></div>
        <div class="menu-footer">
          <p class="fll">© 2013 ProExchange.net— сервис обмена электронных валют.</p>
          <div class="menu-bottom flr">
            <ul>
              <li>
                <a href="#">Контакты</a>
              </li>
              <li>
                <a href="#">Подарки сайта</a>
              </li>
              <li>
                <a href="#">Правила сервиса</a>
              </li>
              <li>
                <a href="#">О сервисе</a>
              </li>

            </ul>
          </div>
        </div>
      </div>

    </footer>

  </div>
</template>

<script>

  import HeaderMenu from '~/components/Header'

  export default {
    head() {
      return {
        htmlAttrs: {
          lang: this.$t('lang')
        }
      }
    },
    components: {
      HeaderMenu
    },
    computed: {
      ModalAuthorizationStatus() {
        return this.$store.getters['Modals/Authorization']
      }
    }
  }
</script>
