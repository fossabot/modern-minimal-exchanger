<template>
  <div>
    <nuxt-link :to="LangLink + 'news/' + News.link" :title="News.title">{{News.title}}</nuxt-link>
    <p>{{News.text}}</p>
    <span>{{News.date}}</span>
  </div>
</template>

<script>
  export default {
    props: ['News'],
    computed: {
      LangLink() {
        return this.$store.getters.LanguageLink
      }
    }
  }
</script>
