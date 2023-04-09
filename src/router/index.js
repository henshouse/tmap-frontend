import { createRouter, createWebHistory } from "vue-router"
import Log from "../views/Log.vue"
import Home from "../views/Home.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Log,
    },
    {
      path: "/home",
      name: "home",
      component: Home,

      children: [
        {
          path: "/home/schedule",
          name: "schedule",
        },
        {
          path: "/home/map",
          name: "map",
        },
      ],
    },
  ],
})

router.replace("/home")

export default router
