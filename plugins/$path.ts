/* eslint-disable */
// prettier-ignore
import { Plugin } from '@nuxt/types'

// prettier-ignore
export const pagesPath = {
  user: {
    $url: (url?: { hash?: string }) => ({ path: '/user', hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ path: '/', hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath

// prettier-ignore
declare module 'vue/types/vue' {
  interface Vue {
    $pagesPath: PagesPath
  }
}

// prettier-ignore
declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $pagesPath: PagesPath
  }

  interface Context {
    $pagesPath: PagesPath
  }
}

// prettier-ignore
declare module 'vuex/types/index' {
  interface Store<S> {
    $pagesPath: PagesPath
  }
}

// prettier-ignore
const pathPlugin: Plugin = (_, inject) => {
  inject('pagesPath', pagesPath)
}

// prettier-ignore
export default pathPlugin
