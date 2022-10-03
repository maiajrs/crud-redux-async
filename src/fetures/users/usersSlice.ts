import {createAsyncThunk, createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import axiox from "axios";
import axios from "axios";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

interface users {
  name: string;
  id: string;
}

const initialState: users[] = []

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await axios.get(USERS_URL);
    return response.data;
  } catch (error: any) {
    return error.message;
  }
})

export const usersSlice = createSlice({
    initialState,
    name: 'users',
    reducers: {
      addUser: {
        reducer(state, action: PayloadAction<users>) {
          state.push(action.payload)
        },
        prepare(name) {
          return {
            payload: {
              id: nanoid(),
              name,
            }
        }
      }
    }
  },
  extraReducers(builder) {
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
        return action.payload;
      })
  },
})

export const getAllUsers = (state: RootState) => state.users

export const {addUser} = usersSlice.actions;
export default usersSlice.reducer;
