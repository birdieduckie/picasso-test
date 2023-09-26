import { UseQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks'
import { useState, useEffect } from 'react'
import debounce from 'debounce'

import { Post } from '../api/types'

export const isValidNotEmptyArray = (array: any[]): boolean => {
  return !!(array && array?.length > 0)
}

export interface IListQueryResponse {
  data: any[]
  originalArgs: any
}

const maxPages = 10

export const useInfiniteScroll = (
  useGetDataListQuery: UseQuery<any>,
  { size = 10, ...queryParameters }
) => {
  const [localPage, setLocalPage] = useState(1)
  const [combinedData, setCombinedData] = useState<Post[]>([])

  const queryResponse = useGetDataListQuery({
    page: localPage,
    limit: size,
  })

  const { data: fetchData = [], originalArgs = {} } =
    (queryResponse as IListQueryResponse) || {}

  useEffect(() => {
    if (isValidNotEmptyArray(fetchData)) {
      if (localPage === 1) {
        setCombinedData(fetchData)
        return
      }
      if (localPage === originalArgs?.page) {
        setCombinedData((previousData) => [...previousData, ...fetchData])
      }
    }
  }, [fetchData, localPage, originalArgs.page])

  const readMore = debounce(() => {
    if (localPage < maxPages && localPage === originalArgs?.page) {
      setLocalPage((page) => page + 1)
    }
  }, 500)

  return {
    combinedData,
    localPage,
    readMore,
    isLoaded: queryResponse?.isSuccess,
    isLoading: queryResponse?.isLoading,
    isFetching: queryResponse?.isFetching,
    error: queryResponse?.error,
  }
}
