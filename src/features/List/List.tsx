import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import InfiniteLoader from 'react-window-infinite-loader'
import { FixedSizeList } from 'react-window'

import { postApi } from 'shared/api/index'
import { useInfiniteScroll } from 'shared/hooks/index'

import { RowCard } from 'shared/ui/RowCard/RowCard'

import { Container } from './styled'

interface ListProps {}

export const List: FC<ListProps> = () => {
  const {
    combinedData: data,
    error,
    readMore,
    isLoading,
    isLoaded,
  } = useInfiniteScroll(postApi.useGetPostsQuery, { size: 10 })

  const navigate = useNavigate()

  const navigateToPost = (id: number) => navigate(`/post/${id}`)

  const isItemLoaded = (index: number) => index < data.length && isLoaded;

  const loadMoreItems = isLoading ? () => {} : readMore

  console.log({ combinedData: data, error, readMore, isLoading, isLoaded })

  return (
    // @ts-ignore
    <Container>
      <InfiniteLoader
        isItemLoaded={isItemLoaded}
        loadMoreItems={loadMoreItems}
        itemCount={data.length + 1}
        threshold={10}
      >
        {({ onItemsRendered, ref }) => (
          <FixedSizeList
            ref={ref}
            height={1000}
            width={800}
            onItemsRendered={onItemsRendered}
            itemSize={50}
            itemCount={data.length + 1}
          >
            {({ index, style }) => {
              const post = data[index]

              if (!post) {
                return <></>
              }

              return (
                <RowCard
                  style={style}
                  id={post.id}
                  key={post.id}
                  body={post.body}
                  title={post.title}
                  navigateTo={() => navigateToPost(post.id)}
                />
              )
            }}
          </FixedSizeList>
        )}
      </InfiniteLoader>
    </Container>
  )
}
