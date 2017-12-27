<template>
    <div class="Content">
      <Exchange />
      <Authorization ref="ModalAuthorization" />
    </div>
</template>

<script>
import Exchange from '~/components/Exchange'
import Authorization from '~/components/Modals/Authorization'

export default {
  head () {
      return {
        title: 'Главная'
      }
  },
  components: {
    Exchange
  }
}
</script>