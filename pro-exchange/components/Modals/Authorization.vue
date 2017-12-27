<template id="modal-template">
    <div id="overlay">
      <div id="popup">
        <div class="UpCap">
          <p>ВХОД</p>
          <button id="close_popup" @click="ModalAuthorization(false)">
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <div class="DownCap">

          <div class="InputsWrapp">
            <form action="" method="">
              <div class="SignInputs">
                <input type="text" class="LightS" placeholder="EMAIL">
              </div>
              <div class="SignInputs">
                <input type="text" class="LightS" placeholder="ПАРОЛЬ">
              </div>
              <div class="SignInputs">
                <input id="yessave" type="checkbox">
                <label for="yessave">ЗАПОМНИТЬ ПАРОЛЬ</label>
              </div>
              <div class="SignInputs">
                <input type="submit" class="RBlack" value="ВОЙТИ">
              </div>
            </form>

            <span>ПРОДОЛЖИТЬ С</span>
            <div class="SocialIconsPop">
              <a href="">
                <img src="~static/images/twitter.svg" alt="">
              </a>
              <a href="">
                <img src="~static/images/facebook.svg" alt="">
              </a>
              <a href="">
                <img src="~static/images/vk.svg" alt="">
              </a>
              <a href="">
                <img src="~static/images/telegram.svg" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    methods: {
      ModalAuthorization(value) {
        console.log('Test')
        this.$store.dispatch('ModalAuthorization', value)
      }
    }
  }

</script>
