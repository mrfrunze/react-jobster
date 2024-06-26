import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { loginUserThunk, registerUserThunk, updateUserThunk, clearStoreThunk } from './userThunk';

import {
    addUserToLocalStorage,
    getUserFromLocalStorage,
    removeUserFromLocalStorage
} from "../../utils/localStorage"

const initialState = {
    isLoading: false,
    isSidebarOpen: false,
    user: getUserFromLocalStorage(),
};


export const registerUser = createAsyncThunk(
    "user/registerUser",
    async (user, thunkAPI) => {
        // console.log((`Register User : ${JSON.stringify(user)}`));
        return registerUserThunk('/auth/register', user, thunkAPI)
        // try {
        //     const response = await customFetch.post("/auth/register", user)
        //     // console.log(response);
        //     return response.data;
        // } catch (error) {
        //     // console.log(error.response.data.msg);
        //     return thunkAPI.rejectWithValue(error.response.data.msg)
        // }
    })

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (user, thunkAPI) => {
        // console.log((`login User : ${JSON.stringify(user)}`));
        return loginUserThunk('/auth/login', user, thunkAPI)
        // try {
        //     const response = await customFetch.post("/auth/login", user)
        //     // console.log(response);
        //     return response.data;
        // } catch (error) {
        //     // console.log(error.response.data.msg);
        //     return thunkAPI.rejectWithValue(error.response.data.msg)
        // }
    })

export const updateUser = createAsyncThunk(
    'user/updateUser',
    async (user, thunkAPI) => {
        return updateUserThunk('/auth/updateUser', user, thunkAPI);
        // try {
        //     const resp = await customFetch.patch("/auth/updateUser", user, {
        //         headers: {
        //             authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        //             // if we need emulation Error 401
        //             // authorization: `Bearer `
        //         },
        //     })
        //     return resp.data;
        // } catch (error) {
        //     // console.log(error.response);
        //     if(error.response.status === 401){
        //         thunkAPI.dispatch(logoutUser())
        //         return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
        //     }
        //     return thunkAPI.rejectWithValue(error.response.data.msg);
        // }
    }
)

export const clearStore = createAsyncThunk('user/clearStore', clearStoreThunk);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutUser: (state, { payload }) => {
            state.user = null;
            state.isSidebarOpen = false;
            removeUserFromLocalStorage();
            if (payload) {
                toast.success(payload)
            }
        },
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
    },

    extraReducers: (builder) => {
        builder
          .addCase(registerUser.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(registerUser.fulfilled, (state, { payload }) => {
            const { user } = payload;
            state.isLoading = false;
            state.user = user;
            addUserToLocalStorage(user);
            toast.success(`Hello There ${user.name}`);
          })
          .addCase(registerUser.rejected, (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
          })
          .addCase(loginUser.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(loginUser.fulfilled, (state, { payload }) => {
            const { user } = payload;
            state.isLoading = false;
            state.user = user;
            addUserToLocalStorage(user);
    
            toast.success(`Welcome Back ${user.name}`);
          })
          .addCase(loginUser.rejected, (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
          })
          .addCase(updateUser.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(updateUser.fulfilled, (state, { payload }) => {
            const { user } = payload;
            state.isLoading = false;
            state.user = user;
            addUserToLocalStorage(user);
    
            toast.success(`User Updated!`);
          })
          .addCase(updateUser.rejected, (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
          })
          .addCase(clearStore.rejected, () => {
            toast.error('There was an error..');
          });
    },

});

export const { toggleSidebar, logoutUser } = userSlice.actions;

export default userSlice.reducer;