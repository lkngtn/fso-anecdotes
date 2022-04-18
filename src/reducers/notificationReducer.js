import { createSlice } from '@reduxjs/toolkit'

const initialState = null
let timeout = null

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    writeNotification(state, action) {
      return action.payload
    },
    clearNotification(state, action) {
      return null
    }
  },
})

export const setNotification = (message, duration) => {
  return async dispatch => {
    dispatch(writeNotification(message))
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      dispatch(clearNotification())
    }, duration * 1000)
  }
}

export const { writeNotification, clearNotification } = notificationSlice.actions
export default notificationSlice.reducer