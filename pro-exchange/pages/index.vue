<template>
  <Exchange />
</template>

<script>
import Exchange from '~/components/Exchange'
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