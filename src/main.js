import { createApp } from 'vue'
import App from './App.vue'



/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faCopy)
library.add(faPen)
library.add(faTrash)
library.add(faPlus)



createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
