import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  reducerPath: 'bookingApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:8000/api/' }),
  endpoints: (builder) => ({
    // Esqueleto
    getBookings: builder.query<number, void>({
      query: () => 'bookings',
    }),
  }),
})

export const { useGetBookingsQuery } = api
export default api
