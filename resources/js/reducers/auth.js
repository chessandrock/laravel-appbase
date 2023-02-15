const initialState = {
  loggedIn: false,
  token: null,
  user: null
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, ...action.payload }
    case 'LOGOUT':
      return initialState
    default:
      return state
  }
}

export default auth
