/* eslint-disable */
import { AspidaClient } from 'aspida'
import { Methods as Methods0 } from '.'

const POST = 'POST'
const PATCH = 'PATCH'
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')

  return {
    post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody']>(prefix, '', POST, option).json(),
    $post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
      fetch<Methods0['post']['resBody']>(prefix, '', POST, option).json().then(r => r.body),
    patch: (option: { body: Methods0['patch']['reqBody'], config?: T }) =>
      fetch<Methods0['patch']['resBody']>(prefix, '', PATCH, option).json(),
    $patch: (option: { body: Methods0['patch']['reqBody'], config?: T }) =>
      fetch<Methods0['patch']['resBody']>(prefix, '', PATCH, option).json().then(r => r.body)
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
