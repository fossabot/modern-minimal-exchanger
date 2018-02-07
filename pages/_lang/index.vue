<template>
    <div class="Content">

    </div>
</template>

<script>
export default {
  head () {
      return {
        title: this.$t('header.Main')
      }

  },
  created() {
    this.$router.push('/' + this.$t('lang') + '/exchange')

  },
  components: {}
}

</script>
