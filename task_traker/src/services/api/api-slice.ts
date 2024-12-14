import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Task } from "../../types/tasks";

export const Api = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({ baseUrl: "api/" }),
  endpoints: (builder) => ({
    getTasks: builder.query<
      Task,
      { page: number | undefined; filter: boolean | undefined }
    >({
      query: ({ page, filter }) => ({
        url: "get_tasks",
        method: "GET",
        params: { page, filter: filter ? "yes" : undefined },
      }),
    }),
    createTask: builder.mutation({
      query: ({ username, e_mail, text }) => ({
        url: "create_task",
        method: "POST",
        body: {
          username: username,
          e_mail: e_mail,
          text: text,
        },
      }),
    }),
    login: builder.mutation({
      query: ({ username, password }) => ({
        url: "/login",
        method: "POST",
        body: {
          username: username,
          password: password,
        },
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
      }),
    }),
    getMe: builder.query({
      query: () => ({
        url: "/get_me",
      }),
    }),
  }),
});

export const {
  useGetTasksQuery,
  useCreateTaskMutation,
  useLoginMutation,
  useGetMeQuery,
  useLogoutMutation,
} = Api;
