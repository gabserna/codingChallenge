import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4b962076 = () => interopDefault(import('..\\pages\\ProductCard.vue' /* webpackChunkName: "pages/ProductCard" */))
const _09b81d74 = () => interopDefault(import('..\\pages\\ProductDetail.vue' /* webpackChunkName: "pages/ProductDetail" */))
const _e100dee4 = () => interopDefault(import('..\\pages\\products.vue' /* webpackChunkName: "pages/products" */))
const _1a859d18 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/ProductCard",
    component: _4b962076,
    name: "ProductCard"
  }, {
    path: "/ProductDetail",
    component: _09b81d74,
    name: "ProductDetail"
  }, {
    path: "/products",
    component: _e100dee4,
    name: "products"
  }, {
    path: "/",
    component: _1a859d18,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
