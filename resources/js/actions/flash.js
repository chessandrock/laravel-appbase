const debounce = (func, time) => {
  let timeoutId
  return wrapper
  function wrapper (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      timeoutId = null
      func(...args)
    }, time)
  }
}

const validMessageTypes = ['success', 'error', 'info', 'warning']

const setFlash = ({ message, messageType }) => ({
  type: 'SET_FLASH',
  payload: { message, messageType }
})

const resetFlash = () => ({
  type: 'UNSET_FLASH'
})

const flash = (message, messageType, duration) => dispatch => {
  if (!validMessageTypes.includes(messageType)) {
    console.warn('Invalid message type: ' + messageType + '. Setting the default to "info".')
    messageType = 'info'
  }

  const resetFlashWithDuration = debounce(() => {
    dispatch(resetFlash())
  }, duration)

  dispatch(setFlash({ message, messageType }))
  resetFlashWithDuration()
}

export default flash
