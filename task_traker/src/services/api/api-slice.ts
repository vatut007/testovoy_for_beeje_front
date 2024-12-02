import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Task } from '../../types/tasks';

export const Api = createApi({
    reducerPath: 'taskApi',
    baseQuery: fetchBaseQuery({baseUrl:'api/'}),
    endpoints: (builder) => ({
      getTasks: builder.query<Task,undefined>({
        query: () => '/get_tasks',
      }),
    }),
  })

export const {useGetTasksQuery} = Api;