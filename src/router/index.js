import { createRouter, createWebHistory } from "vue-router"
import Log from "../views/Log.vue"
import Home from "../views/Home.vue"
import GroundFloor from "../components/GroundFloor.vue"
import FirstFloor from "../components/FirstFloor.vue"
import SecondFloor from "../components/SecondFloor.vue"
import ThirdFloor from "../components/ThirdFloor.vue"
import FourthFloor from "../components/FourthFloor.vue"

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
          path: "/home/map",
          name: "map",

          children: [
            {
              path: "/home/map/ground-floor",
              component: GroundFloor,
            },
            {
              path: "/home/map/first-floor",
              component: FirstFloor,
            },
            {
              path: "/home/map/second-floor",
              component: SecondFloor,
            },
            {
              path: "/home/map/third-floor",
              component: ThirdFloor,
            },
            {
              path: "/home/map/fourth-floor",
              component: FourthFloor,
            },
          ],
        },
      ],
    },
  ],
})

router.replace("/home")

export default router
