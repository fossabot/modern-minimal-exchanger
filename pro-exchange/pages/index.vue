<template>
  
</template>


<script>
export default {
  fetch ({ store, redirect }) {
    redirect(301, store.getters.LanguageLink)
  }
}
</script>
