<template>
  <div class="Exchange">
    <h1 class="TitleCenter">Единный обмен валют</h1>
    <div class="Calculator">
      <div class="Left">
        <h1>Отдаете</h1>
        <div class="Input">
          <input type="number" v-model="Exchange.Get" @change="Convert()" :min="Exchange.Minimal" />
          <div class="Money" aria-hidden="true">
            <span>Я. Деньги</span>
            <img src="~static/images/system/yandex.png" />
          </div>
        </div>
        <h2>Минимальная сумма
          <label>{{Exchange.Minimal}}</label> RUB</h2>
      </div>

      <div class="Midle">
        <img src="~static/images/load.png" />
      </div>

      <div class="Right">
        <h1>Получаете
          <nuxt-link to="/reserves">
            <i class="icon i-balance"></i>
            <span class="res">Резервы</span>
          </nuxt-link>
        </h1>

        <div class="Input">
          <div class="Money" aria-hidden="true">
            <img src="~static/images/system/yandex.png" />Я. Деньги
          </div>
          <input type="number" v-model="Exchange.Set" readonly />
        </div>
        <h2>Обмен по курсу: 1 руб. =
          <label>{{Exchange.Currency}}</label> руб.
        </h2>
      </div>
    </div>

    <div class="Data">
      <h1>Ввод данных</h1>
      <h2>Введите данные для завершения обмена</h2>
      <div class="IconInputs">
        <input type="email" placeholder="Ваш e-mail" :value="Exchange.Email"/>
        <input type="text" placeholder="Кошелек Я.Денеги" :value="Exchange.GetRequisite"/>
        <input type="text" placeholder="Кошелек Я.Денеги" :value="Exchange.SetRequisite"/>
      </div>
      <div class="Conditions">
        <div class="CheckBox">
          <input type="checkbox" value="None" id="squaredFour" name="check" :checked="Exchange.License" />
          <label for="squaredFour"></label>
        </div>
        <p>Я согласен с&nbsp;
          <nuxt-link to="/license"> условиями и правилами сервиса</nuxt-link>
        </p>

      </div>

      <button>
        Обменять сейчас
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Exchange: {
        Currency: 0.954,
        Minimal: 500,
        Get: 500,
        Set: 0,
        Email: '',
        GetRequisite: '',
        SetRequisite: '',
        License: true
      }
    }
  },
  methods: {
    Convert() {
      return this.Exchange.Set =  this.Exchange.Get * this.Exchange.Currency
    }
  },
  created () {
    this.Convert()
  }
}

</script>
