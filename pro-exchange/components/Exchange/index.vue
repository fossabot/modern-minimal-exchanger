<template>
  <div class="Exchange">
    <h1 class="TitleCenter">{{ Lang('Title') }}</h1>
    <div class="Calculator">
      <div class="Left">
        <h1>{{ Lang('YouGive') }}</h1>
        <div class="Input">
          <input type="number" v-model="Exchange.Get" @change="Convert()" :min="Exchange.Minimal" />
          <div class="Money" aria-hidden="true">
            <span>Я. Деньги</span>
            <img src="~static/images/system/yandex.png" />
          </div>
        </div>
        <h2>{{ Lang('Minimal') }}
          <label>{{Exchange.Minimal}}</label> RUB</h2>
      </div>

      <div class="Midle">
        <img src="~static/images/load.png" />
      </div>

      <div class="Right">
        <h1>{{ Lang('YouGet') }}
          <nuxt-link to="/reserves">
            <i class="icon i-balance"></i>
            <span class="res">{{ Lang('Reserves') }}</span>
          </nuxt-link>
        </h1>

        <div class="Input">
          <div class="Money" aria-hidden="true">
            <img src="~static/images/system/yandex.png" />Я. Деньги
          </div>
          <input type="number" v-model="Exchange.Set" readonly />
        </div>
        <h2>{{ Lang('Exchenge') }}: 1 руб. =
          <label>{{Exchange.Currency}}</label> руб.
        </h2>
      </div>
    </div>

    <div class="Data">
      <h1>{{ Lang('EnterTitel') }}</h1>
      <h2>{{ Lang('EnterData') }}</h2>
      <div class="IconInputs">
        <input type="email" :placeholder="Lang('Email')" :value="Exchange.Email"/>
        <input type="text" :placeholder="Lang('Purse') + ' ' + 'Я.Денеги'" :value="Exchange.GetRequisite"/>
        <input type="text" :placeholder="Lang('Purse') + ' ' + 'Я.Денеги'" :value="Exchange.SetRequisite"/>
      </div>
      <div class="Conditions">
        <div class="CheckBox">
          <input type="checkbox" value="None" id="squaredFour" name="check" :checked="Exchange.License" />
          <label for="squaredFour"></label>
        </div>
        <p>{{ Lang('Agree') }}&nbsp;
          <nuxt-link :to="LangLink + Menu"> {{ Lang('License') }} </nuxt-link>
        </p>

      </div>

      <button>
        {{ Lang('Button') }}
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
    },
    Lang(value) {
      return this.$t('Pages.Main.Exchange.' + String(value))
    },
  },
  computed: {
    LangLink() {
      return '/' + this.$t('lang') + '/'
    },
    Menu() {
      return this.$store.state.Menu.Header[1]['url']
    }
  },
  created () {
    this.Convert()
  }
}
</script>
