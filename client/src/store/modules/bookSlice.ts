import { createSlice } from '@reduxjs/toolkit'

const initialState: BookState = {
  book: {
    id: 0,
    title: '',
    description: '',
    price: '',
    duration: 0,
    createdAt: '',
    updatedAt: '',
  },
  service: {
    date: '',
    time: '',
    id: 0,
    name: '',
    phone: '',
    email: '',
  },
}

const bookSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.book = action.payload
    },
    addTime: (state, action) => {
      state.service.time = action.payload
    },
    addDetails: (state, action) => {
      const time = state.service.time
      state.service = { ...action.payload, time }
    },
    setClientEmail: (state, action) => {
      state.service.email = action.payload
    },
  },
})

export const { addBook, addTime, addDetails, setClientEmail } =
  bookSlice.actions
export default bookSlice.reducer
