import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }),
  tagTypes: ['Services', 'Bookings'],
  endpoints: (builder) => ({
    getServices: builder.query<Service[], void>({
      query: () => '/',
      providesTags: ['Services'],
    }),
    addService: builder.mutation({
      query: (body) => ({ url: '/service', method: 'POST', body }),
      invalidatesTags: ['Services'],
    }),
    deleteService: builder.mutation<string, number>({
      query: (id) => ({ url: `/service/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Services'],
    }),
    getSchedule: builder.query<string[], SchelduleArgs>({
      query: ({ date, idService }) => ({
        url: '/availability',
        params: { date, idService },
      }),
    }),
    createBooking: builder.mutation<BookingNew, CreateBookingArgs>({
      query: (body) => ({ url: '/booking', method: 'POST', body }),
      invalidatesTags: ['Bookings', 'Services'],
    }),
  }),
})

export const {
  useGetServicesQuery,
  useAddServiceMutation,
  useDeleteServiceMutation,
  useGetScheduleQuery,
  useCreateBookingMutation,
} = apiSlice

export default apiSlice
