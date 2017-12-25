<template>
  <div class="wh100">
    <div class="burger_trigger">
      <div class="burger"></div>
    </div>
    <HeaderMenu />
    <div class="Content">
        <nuxt/>
    </div>
    <div class="Line"></div>
    <ComponentFooter />
  </div>
</template>

<script>
import HeaderMenu from '~/components/Header'
import ComponentFooter from '~/components/Footer'

export default {
  components: {
    HeaderMenu,
    ComponentFooter
  }
}
</script>