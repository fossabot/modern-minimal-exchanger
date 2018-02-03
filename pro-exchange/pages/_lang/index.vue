<template>
    <div class="Content">
      <Exchange />
      <MainPageNews />
    </div>
</template>

<script>
import Exchange from '~/components/Exchange'
import MainPageNews from '~/components/News/MainPageNews'

export default {
  head () {
      return {
        title: this.$t('Menu.Header.Main')
      }
  },
  components: {
    Exchange,
    MainPageNews
  }
}
</script>
