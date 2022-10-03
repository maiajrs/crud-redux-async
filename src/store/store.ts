import {combineReducers, configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import { useSelector as useAppSelector, useDispatch as useAppDispatch, TypedUseSelectorHook } from "react-redux";
import postsReducer from "../fetures/posts/postsSlice";
import usersReducer from "../fetures/users/usersSlice";

  const reducer = combineReducers(
    {
      posts: postsReducer,
      users: usersReducer
    }
  )

const store = configureStore({
  reducer
})

export type RootState = ReturnType<typeof reducer>;

export type AppDispatch = typeof store.dispatch;
const useDispatch = () => useAppDispatch<AppDispatch>();


const {dispatch} = store;

const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

export {useSelector, useDispatch, dispatch, store}