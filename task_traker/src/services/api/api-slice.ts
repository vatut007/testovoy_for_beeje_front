import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const Api = createApi({
    reducerPath: 'taskApi',
    baseQuery: fetchBaseQuery({baseUrl:'api/'}),
    endpoints: (builder) => ({
      getTasks: builder.query({
        query: () => '/get_tasks',
      }),
    }),
  })

export const {useGetTasksQuery} = Api;