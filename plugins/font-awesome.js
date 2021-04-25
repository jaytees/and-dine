import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPlusSquare,
  faMinusSquare,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlusSquare)
library.add(faMinusSquare)
library.add(faTimes)

Vue.component('font-awesome-icon', FontAwesomeIcon)
