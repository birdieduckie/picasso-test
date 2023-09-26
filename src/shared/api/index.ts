import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IPost as Post } from './types'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (build) => ({
    getPosts: build.query<Post[], { page: number; limit: number }>({
      query: (parameters: { page: number; limit: number }) => ({
        url: '/posts',
        params: { _limit: parameters.limit, _page: parameters.page },
      }),
    }),
    getAllPosts: build.query<Post[], string>({
      query: () => ({
        url: '/posts',
      }),
    }),
    getPostById: build.query<Post, number>({
      query: (id: number) => ({
        url: `/posts/${id}`,
        params: {
          id,
        },
      }),
    }),
  }),
})

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));
