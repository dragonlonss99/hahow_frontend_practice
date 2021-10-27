import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import heroList from './redux/reducer/heroListReducer'
import heroProfile from './redux/reducer/heroProfileReducer'
import totalLeft from './redux/reducer/totalLeftReducer';

export const store = configureStore({
    reducer:{
        heroList,
        heroProfile,
        totalLeft,
    },
    middleware:[thunk],
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch