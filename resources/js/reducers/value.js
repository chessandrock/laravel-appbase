const initialState = 0

const value = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VALUE':
      return action.payload
    case 'UNSET_VALUE':
      return initialState
    default:
      return state
  }
}

export default value
