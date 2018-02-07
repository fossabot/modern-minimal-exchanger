<template id="modal-template">

</template>

<script>
  export default {
    methods: {
      Close(value) {
        this.$store.dispatch('Modals/Authorization', false)
      }
    }
  }

</script>
