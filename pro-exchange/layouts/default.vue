<template>
  <div class="wh100">
    <HeaderMenu />
        <nuxt/>
    <div class="Line"></div>
    <ComponentFooter />
    <transition name="modal">
      <ModalAuthorization v-if="ModalAuthorizationStatus" />    
    </transition>
  </div>
</template>

<script>

import HeaderMenu from '~/components/Header'
import ComponentFooter from '~/components/Footer'
import ModalAuthorization from '~/components/Modals/Authorization'

export default {
  head() {
    return {
      htmlAttrs: {
        lang: this.$t('lang')
      }
    }
  },
  components: {
    HeaderMenu,
    ComponentFooter,
    ModalAuthorization
  },
  computed: {
    ModalAuthorizationStatus () {
      return this.$store.getters['Modals/Authorization']
    }
  }
}
</script>
