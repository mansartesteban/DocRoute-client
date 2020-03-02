import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("@/views/Home"),
    children: [
      {
        path: "benchwork-components",
        name: "components-benchwork",
        component: () => import('@/views/ComponentsBenchwork')
      },
      {
        path: "routes",
        component: () => import('@/views/Routes'),
        children: [
          {
            path: "",
            name: "routes_index",
            component: () => import("@/views/Routes/RoutesIndex")
          },
          {
              path: "show",
              name: "routes_show",
              component: () => import("@/views/Routes/RoutesShow")
            }
          ]
      },
      {
        path: "entites",
        name: "entities",
        component: () => import("@/views/Entities")
      },
      {
        path: "components",
        name: "components",
        component: () => import("@/views/Components")
      }
    ]

  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
