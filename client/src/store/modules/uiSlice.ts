import { createSlice } from '@reduxjs/toolkit'

const initialState: UiState = {
  isListVisible: true,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleListVisibility: (state) => {
      state.isListVisible = !state.isListVisible
    },
  },
})

export const { toggleListVisibility } = uiSlice.actions
export default uiSlice.reducer
