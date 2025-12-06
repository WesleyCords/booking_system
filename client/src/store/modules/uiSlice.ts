import { createSlice } from '@reduxjs/toolkit'

const initialState: UiState = {
  modalDate: false,
  modalTime: false,
  calenderPickedOpen: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTime: (state) => {
      state.modalTime = !state.modalTime
    },
    toggleDate: (state) => {
      state.modalDate = !state.modalDate
    },
    toggleCalenderPicked: (state) => {
      state.calenderPickedOpen = !state.calenderPickedOpen
    },
  },
})

export const { toggleTime, toggleDate, toggleCalenderPicked } = uiSlice.actions
export default uiSlice.reducer
