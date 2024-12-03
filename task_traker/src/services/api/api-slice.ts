import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Task } from '../../types/tasks';

export const Api = createApi({
    reducerPath: 'taskApi',
    baseQuery: fetchBaseQuery({baseUrl:'api/'}),
    endpoints: (builder) => ({
      getTasks: builder.query<Task,{page:number|undefined, filter:boolean|undefined}>({
        query: ({page, filter}) => ({
          url: 'get_tasks',
          method: "GET",
          params:{page, filter:filter?'yes':undefined}
        }
        )
      }),
    }),
  })

export const {useGetTasksQuery} = Api;