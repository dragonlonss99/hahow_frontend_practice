import { configureStore } from '@reduxjs/toolkit'
import heroList from './redux/reducer/heroListReducer'
import heroProfile from './redux/reducer/heroProfileReducer'

export const store = configureStore({
    reducer:{
        heroList,
        heroProfile,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch