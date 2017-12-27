<template>
  <div class="Wrapper">
    <header class="showme">
      <div class="Logo">
        <img src="~static/images/dot.png" alt="PRO EXCHANGER" />
        <nuxt-link to="/">PRO
          <br />
          <span>Exchanger</span>
        </nuxt-link>
      </div>

      <nav>
        <ul>
          <li v-for="link in links" :key="link.id">
            <nuxt-link v-if="CheckLink()" :to="link.url" :title="link.description" class=".active, .exact-active">
              {{ link.title }}
            </nuxt-link>

            <nuxt-link v-else :to="link.url" :title="link.description">
              {{ link.title }}
            </nuxt-link>
          </li>
        </ul>
      </nav>

      <div class="Authorization">
        <button class="SignIn" @click="ModalAuthorization(true)">
          <i class="fa fa-user-circle" aria-hidden="true"></i>Войти</button>
        <span>или</span>
        <button class="Registration">Зарегистрируйтесь</button>
      </div>
    </header>

    <div class="Logo1">
      <img src="~static/images/dot.png" alt="PRO EXCHANGER">
      <a href="/">PRO
        <br />
        <span>Exchanger</span>
      </a>
    </div>
  </div>  
</template>

<script>
  export default {
    data() {
      return {
        Authorization: false,
        links: [
          {
            id: 1,
            title: 'Правила',
            url: '/regulations',
            description: 'Правила'
          },
          {
            id: 2,
            title: 'Обмен',
            url: '/exchange',
            description: 'Обмен'
          },
          {
            id: 3,
            title: 'Партнерам',
            url: '/partners',
            description: 'Партнерам'
          },
          {
            id: 4,
            title: 'Новости',
            url: '/news',
            description: 'Новости'
          },
          {
            id: 5,
            title: 'FAQ',
            url: '/faq',
            description: 'FAQ'
          },
          {
            id: 6,
            title: 'Контакты',
            url: '/contacts',
            description: 'Контакты'
          }
        ]
      }
    },
    methods: {
      CheckLink(url) {
        if (url === '/') {
          return true
        }
      },
      ModalAuthorization(value) {
        this.$store.dispatch('ModalAuthorization', value)
      }
    }
  }

</script>
