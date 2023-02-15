import api from '../api'

export const setValue = value => ({
  type: 'SET_VALUE',
  payload: value
})

export const resetValue = () => ({
  type: 'UNSET_VALUE'
})

export const fetchValue = payload => {
  return dispatch => {
    api
      .get('/api/posts/1')
      .then(response => {
        dispatch(setValue(response.data.title))
      })
      .catch(error => {
        window.alert('Error: no se pudo rescatar el valor.')
        console.log(error)
      })
  }
}
