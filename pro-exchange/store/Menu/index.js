import Header from './Header'
import Footer from './Footer'

const state = {
  Header,
  Footer
}

const getters = {
  Menu: state => {
    return state
  }
}

export default {
  state,
  getters
}
