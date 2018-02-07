<template>
  
</template>

<script>
export default {
  fetch ({ store, redirect }) {
    redirect(301, '/' + store.state.locale + '/')
  }
}
</script>
