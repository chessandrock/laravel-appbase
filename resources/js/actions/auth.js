import api from '../api'
import flash from './flash'
import { resetUsuario } from './usuario'

const setLoginDetails = (token, user, xsrf) => ({
  type: 'LOGIN',
  payload: {
    loggedIn: true,
    token,
    user
  }
})

const unsetLoginDetails = () => ({
  type: 'LOGOUT'
})

export const login = (email, password) => async dispatch => {
  try {
    const xsrfData = await api.get('/sanctum/csrf-cookie')
    const xsrf = xsrfData.data['XSRF-TOKEN']
    const { data } = await api.post('/api/login', { email, password })
    dispatch(setLoginDetails(data.token, data.user, xsrf))
    dispatch(
      flash(
        'Su inicio de sesión se ha completado exitosamente.',
        'success',
        3000
      )
    )
  } catch (err) {
    dispatch(
      flash(
        'No se ha iniciado sesión. Verifique sus credenciales e intente nuevamente.',
        'error',
        3000
      )
    )
  }
}

export const logout = () => async dispatch => {
  try {
    await api.post('/api/logout')
    dispatch(unsetLoginDetails())
    dispatch(resetUsuario())
    dispatch(
      flash(
        'Su cierre de sesión se ha completado exitosamente.',
        'success',
        3000
      )
    )
  } catch (err) {
    dispatch(unsetLoginDetails())
    dispatch(resetUsuario())
    dispatch(
      flash('Su cierre de sesión se ha completado exitosamente.', 'error', 3000)
    )
  }
}
