<template>
  <div class="Wrapper">
    <div class="News">
      <div class="PageCaption">
        <h2>{{ l('News', '') }} </h2>
        <span>/</span>
        <nuxt-link :to="LangLink + 'news'">{{ l('News.All','Pages.Main') }}
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
        if(!constant || constant === '')
             return this.$t('Global' + '.' + String(value))
        else 
          return this.$t(String(constant) + '.' + String(value))
      }
    },
    computed: {
      LastNews () {
        return this.$store.state.News
      },
      LangLink() {
        return '/' + this.$t('lang') + '/'
      }
    }
  }
</script>
