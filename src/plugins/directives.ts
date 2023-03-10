export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.directive('focus', {
    mounted(el) {
      el.focus()
    },
    getSSRProps(binding, vnode) {
      // you can provide SSR-specific props here
      return {}
    },
  })
})
