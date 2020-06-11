import router from './router'
import store from './store'
// progress bar
import NProgress from 'nprogress'
// progress bar style
import 'nprogress/nprogress.css'
// NProgress Configuration
NProgress.configure({showSpinner: false})

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()

  if (store.getters.username) {
    next()
  } else {
    try {
      await store.dispatch('GetUserInfo')
      await store.dispatch('GetAddressList')
      next()
    } catch (error) {
      console.log('error', error)
      next('/500')
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
