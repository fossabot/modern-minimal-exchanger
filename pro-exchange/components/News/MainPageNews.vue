<template>
  <div class="Wrapper">
    <div class="News">
      <div class="PageCaption">
        <h2>{{ l('News', '') }} </h2>
        <span>/</span>
        <nuxt-link :to="LangLink + 'news'">{{Lang.News.All}}
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </nuxt-link>
      </div>
      <div class="Colons">
        <OneNews v-for="News in LastNews" :key="News.id" :News="News" />
      </div>
    </div>
  </div>
</template>

<script>
import OneNews from './OneNews'
  export default {
    components: {
      OneNews
    },
    methods: {
      l(value, constant)
      {
        if(!constant || constant === '' || !this.$store.getters.Language[constant]) 
          constant = 'Global';

        if(!this.$store.getters.Language[constant][value])
          return '[String]'

        return this.$store.getters.Language[constant][value]
      }
    },
    computed: {
      LastNews () {
        return this.$store.getters.LastNews
      },
      Lang() {
        return this.$store.getters.Language.Pages.Main
      },
      LangLink() {
        return this.$store.getters.LanguageLink
      }
    }
  }
</script>
