<template>
    <div class="Content">
      <Exchange />
    </div>
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