import { createSlice } from '@reduxjs/toolkit'

const initialState = null

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setFilter(state, action) {
      if (action.payload === '') {
        return null
      }
      return action.payload
    },
  },
})

export const { setFilter } = notificationSlice.actions
export default notificationSlice.reducer