export interface Post {
  id: number
  title: string
  body: string
  userId: number
}

export interface PostsRequest {
  page: number
  limit: number
}