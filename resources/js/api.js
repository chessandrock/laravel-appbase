import axios from 'axios'
import { store } from './reducers'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'X-App-Token': import.meta.env.VITE_APP_TOKEN
  },
  withCredentials: true
})

const updateAuthorizationHeader = () => {
  const token = store.getState().auth.token

  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
  } else {
    delete api.defaults.headers.common.Authorization
  }
}

const updateXsrfCookieHeader = () => {
  const xsrfToken = store.getState().auth.xsrfToken

  if (xsrfToken) {
    api.defaults.headers['X-XSRF-TOKEN'] = xsrfToken
  } else {
    delete api.defaults.headers['X-XSRF-TOKEN']
  }
}

store.subscribe(updateAuthorizationHeader)
updateAuthorizationHeader()

store.subscribe(updateXsrfCookieHeader)
updateXsrfCookieHeader()

export default api
