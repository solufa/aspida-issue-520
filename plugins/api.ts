import axios from 'axios'
import { Plugin } from '@nuxt/types'
import axiosClient from '@aspida/axios'
import api from '~/apis/$api'

const tmp = api(axiosClient(axios))

declare module 'vue/types/vue' {
  interface Vue {
    $api: typeof tmp
  }
}

declare module '@nuxt/types' {
  interface Context {
    $api: typeof tmp
  }
}

const plugin: Plugin = (context) => {
  context.$api = api(axiosClient(context.$axios))
}

export default plugin
