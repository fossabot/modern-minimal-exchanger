<template>

</template>

<script>
  export default {
    methods: {
      LangMenu(value) {
        return this.$t('Menu.Footer.' + String(value))
      },
    },
    computed: {
      LangLink() {
        return '/' + this.$t('lang') + '/'
      },
      Menu() {
        return this.$store.state.Menu.Footer
      }
    }
  }
</script>
