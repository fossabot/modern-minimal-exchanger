<template>
  <div class="wh100">
    <div class="burger_trigger">
      <div class="burger"></div>
    </div>
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
  components: {
    HeaderMenu,
    ComponentFooter,
    ModalAuthorization
  },
  computed: {
    ModalAuthorizationStatus () {
      return this.$store.getters.ModalAuthorization
    }
  }
}
</script>
