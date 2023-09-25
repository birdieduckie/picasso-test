import { FC, useEffect, useState } from 'react'
import { Post } from '../Post/Post'
import { postApi } from 'api/index'

interface ListProps {}

export const List: FC<ListProps> = () => {

    const {data: posts} = postApi.useGetAllPostsQuery('')


     return (
         <>
             {posts !== undefined ? posts.map(post =>
             <Post id={post.id} key={post.id} body={post.body} title={post.title}/>
             ) : <h1>Ой! Кажется, что-то сломалось...</h1>}

         </>

     )
}



