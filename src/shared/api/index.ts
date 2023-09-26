import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Post, PostsRequest } from './types'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (build) => ({
    getPosts: build.query<Post[], PostsRequest>({
      query: (parameters: PostsRequest) => ({
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
