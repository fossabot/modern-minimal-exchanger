<template>
  <footer>
    <div class="Last">
      <p>{{ LangMenu('Title') }}</p>
      <div class="LastRight">
        <ul>
          <li v-for="link in Menu" :key="link.id">
            <nuxt-link :to="LangLink + link.url" :title="LangMenu(link.url)">
              {{ LangMenu(link.url) }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
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
