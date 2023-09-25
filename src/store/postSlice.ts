import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

import { Status } from './types'

interface Post {
    id: number,
    title: string
    body: string
    userId: number
}

const postsAdapter = createEntityAdapter<Post>({
    selectId: post => post.id,
    sortComparer: (a, b) => a.title.localeCompare(b.title)
})

export const POSTS_SLICE = 'posts'

export const postSlice = createSlice({
    name: POSTS_SLICE,
    initialState: postsAdapter.getInitialState({status: Status.Initial}),
    reducers: {
        postsRequested(state) {
            state.status = Status.Pending
        },
        postsReceived(state, action) {
            postsAdapter.setAll(state, action.payload)
            state.status = Status.Success
        },
        postsRequestError(state) {
            state.status = Status.Failure
        }
    }
})

export const { actions, reducer } = postSlice

export const postsSelectors = postsAdapter.getSelectors()

export const {
    postsRequested,
    postsReceived,
    postsRequestError,
} = actions