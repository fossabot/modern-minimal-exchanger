<template>
  <div class="error-page">
    <div>
      <h1 class="error-code">{{ error.statusCode }}</h1>
      <div class="error-wrapper-message">
        <h2 v-if="error.statusCode === 404" class="error-message" > Страница не найдена </h2>
        <h2 v-else class="error-message" > Произошла ошибка при загрузке страницы </h2>
      </div>
      <p><nuxt-link class="error-link" to="/">Вернуться на главную страницу</nuxt-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nuxt-error',
  props: ['error'],
  head () {
    return {
      title: this.error.statusCode || 'Ошибка'
    }
  }
}
</script>

<style scoped lang='less'>
.error-page {
  color: #000;
  background: #fff;
  display: flex;
  position: absolute;
  font-family: "SF UI Text", "Helvetica Neue", "Lucida Grande";
  text-align: center;

  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100%;
}
.error-code {
  display: inline-block;
  font-size: 24px;
  font-weight: 500;
  vertical-align: top;
  border-right: 1px solid rgba(0, 0, 0, 0.298039);
  margin: 0px 20px 0px 0px;
  padding: 10px 23px;
}
.error-wrapper-message {
  display: inline-block;
  text-align: left;
  line-height: 49px;
  height: 49px;
  vertical-align: middle;
}
.error-message {
  font-size: 14px;
  font-weight: normal;
  margin: 0px;
  padding: 0px;
}
.error-link {
  color: #00BCD4;
  font-weight: normal;
  text-decoration: none;
  font-size: 14px;
}
</style>