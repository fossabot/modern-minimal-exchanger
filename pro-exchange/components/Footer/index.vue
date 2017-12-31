<template>
  <footer>
    <div class="Last">
      <p>{{ LangMenu.Title }}</p>
      <div class="LastRight">
        <ul>
          <li v-for="link in Menu" :key="link.id">
            <nuxt-link :to="LangLink + link.url" :title="LangMenu[link.url]">
              {{ LangMenu[link.url] }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    computed: {
      LangLink() {
        return this.$store.getters.LanguageLink
      },
      LangMenu() {
        return this.$store.getters.Language.Menu.Footer
      },
      Menu() {
        return this.$store.getters.Menu.Footer
      }
    }
  }
</script>
