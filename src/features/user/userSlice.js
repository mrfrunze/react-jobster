import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import customFetch from '../../utils/axios';
import {
        addUserToLocalStorage, 
        getUserFromLocalStorage, 
        removeUserFromLocalStorage
    } from "../../utils/localStorage"

const initialState = {
    isLoading: false,
    user: getUserFromLocalStorage(),
};


export const registerUser = createAsyncThunk(
    "user/registerUser", 
    async (user, thunkAPI) => {
    // console.log((`Register User : ${JSON.stringify(user)}`));
    try {
        const response = await customFetch.post("/auth/register", user)
        // console.log(response);
        return response.data;
    } catch (error) {
        // console.log(error.response.data.msg);
        return thunkAPI.rejectWithValue(error.response.data.msg )
    }  
})

export const loginUser = createAsyncThunk(
    "user/loginUser", 
    async (user, thunkAPI) => {
    // console.log((`login User : ${JSON.stringify(user)}`));
    try {
        const response = await customFetch.post("/auth/login", user)
        // console.log(response);
        return response.data;
    } catch (error) {
        // console.log(error.response.data.msg);
        return thunkAPI.rejectWithValue(error.response.data.msg )
    }  
})


const userSlice = createSlice({
    name: 'user',
    initialState,

    extraReducers: {
        [registerUser.pending]: (state) => {
          state.isLoading = true;
        },
        [registerUser.fulfilled]: (state, { payload }) => {
          const { user } = payload;
          state.isLoading = false;
          state.user = user;
          addUserToLocalStorage(user)
          toast.success(`Hello There ${user.name}`);
        },
        [registerUser.rejected]: (state, { payload }) => {
          state.isLoading = false;
          toast.error(payload);
        },
        [loginUser.pending]: (state) => {
            state.isLoading = true;
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            const { user } = payload;
            state.isLoading = false;
            state.user = user;
            addUserToLocalStorage(user)
            toast.success(`Welcome Back ${user.name}`);
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            toast.error(payload);
        }

    }
    

    // extraReducers: builder => {
    //     builder
    //     .addCase(registerUser.pending, state => {
    //         state.isLoading = true
    //     })
    //     .addCase(registerUser.fulfilled, (state, {payload}) => {
    //         const { user } = payload;
    //         state.isLoading = false;
    //         state.user = user;
    //         // addUserToLocalStorage(user);
    //     toast.success(`Hello There ${user.name}`)
    //     })
    //     .addCase(registerUser.rejected, (state, {payload}) => {
    //         state.isLoading = false;
    //         toast.error(payload);
    //     })
    //     .addCase(loginUser.pending, (state) => {
    //         state.isLoading = true;
    //       })
    //       .addCase(loginUser.fulfilled, (state, { payload }) => {
    //         const { user } = payload;
    //         state.isLoading = false;
    //         state.user = user;
    //         addUserToLocalStorage(user);
    
    //         toast.success(`Welcome Back ${user.name}`);
    //       })
    //       .addCase(loginUser.rejected, (state, { payload }) => {
    //         state.isLoading = false;
    //         toast.error(payload);
    //       })
        
    // }

});

export default userSlice.reducer;