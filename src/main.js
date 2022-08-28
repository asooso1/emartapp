import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowLeft, faHouse, faBars, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faComment, faHeart  } from '@fortawesome/free-regular-svg-icons'


library.add(faComment, faHeart, faArrowLeft, faHouse, faBars, faArrowUp)
Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
