import { FC } from 'react'
import { useParams } from 'react-router-dom'

import { postApi } from 'shared/api/index'

import { RowCard } from 'shared/ui/RowCard/RowCard'

interface PostProps {}

export const Post: FC<PostProps> = () => {
  const { id } = useParams()

  const { data, error, isLoading } = postApi.useGetPostByIdQuery(Number(id))

  return (
    <>
      {isLoading && <h1>Загружаем пост...</h1>}
      {data && <RowCard id={data.id} title={data.title} body={data.body} />}
      {error && <h1>Ой! Кажется, что-то сломалось :(</h1>}
    </>
  )
}
