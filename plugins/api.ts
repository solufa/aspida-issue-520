import { Plugin } from '@nuxt/types'
import axiosClient from '@aspida/axios'
import api, { ApiInstance } from '~/apis/$api'

declare module 'vue/types/vue' {
  interface Vue {
    $api: ApiInstance
  }
}

const plugin: Plugin = (context) => {
  (<any>context).$api = api(axiosClient(context.$axios)) // Error
}

export default plugin
