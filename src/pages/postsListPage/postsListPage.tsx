import { FC } from 'react'
import { PostPage } from '../postPage/postPage'

interface PostsListPage {}

export const PostsListPage: FC<PostsListPage> = () => {
     return (
         <>
         <PostPage />
         <PostPage />
         </>

     )
}



