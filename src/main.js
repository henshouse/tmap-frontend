import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "./router"

import "./assets/variables.css"
import "./assets/reset.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)

import "vuetify/styles"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

const vuetify = createVuetify({
  components,
  directives,
})

app.use(vuetify).mount("#app")
