import { FC } from 'react'


import { RowCard } from 'shared/ui/RowCard/RowCard'
import { Post } from '../Post/Post'
import { postApi } from 'api/index'
import { IPost } from 'api/types'



interface ListProps {}

export const List: FC<ListProps> = () => {

    const { data, error, isLoading } = postApi.useGetAllPostsQuery('')



     return (
         <>
             {isLoading && <h1>Загружаем посты...</h1> }
             {data && data.map(post =>
             <RowCard id={post.id} key={post.id} body={post.body} title={post.title} />
             )
             }


             {error && <h1>Ой! Кажется, что-то сломалось....</h1>}
         </>

     )
}



