import { FC } from 'react'
import { Post } from 'entities/Post/Post'

interface PostPageProps {}

export const PostPage: FC<PostPageProps> = () => {
  return <Post />
}