import { Response } from '~/apis/@types'

export type Methods = {
  post: {
    reqBody: {
      name: string
      username: string
      password: string
    }

    resBody: Response
  }

  patch: {
    reqBody: {
      name: string
      credentials: {
        username: string
        password: string
      }
      new_password: string
    }

    resBody: Response
  }
}
