import customFetch, {checkForUnauthorizedResponse} from '../../utils/axios';
import { clearAllJobsState } from '../allJobs/allJobsSlice';
import { logoutUser } from './userSlice';
import { clearValues } from '../job/jobSlice';


export const registerUserThunk = async (url, user, thunkAPI) => {
    try {
        const resp = await customFetch.post(url, user);
        return resp.data;
    } catch (error) {
        return checkForUnauthorizedResponse(error, thunkAPI);
    }
}

export const loginUserThunk = async (url, user, thunkAPI) => {
    try {
        const resp = await customFetch.post(url, user);
        return resp.data;
    } catch (error) {
        return checkForUnauthorizedResponse(error, thunkAPI);
    }
};

export const updateUserThunk = async (url, user, thunkAPI) => {
    try {
        const resp = await customFetch.patch(url, user);
        return resp.data;
    } catch (error) {
        // console.log(error.response);
        if (error.response.status === 401) {
            thunkAPI.dispatch(logoutUser());
            return thunkAPI.rejectWithValue('Unauthorized! Logging Out...');
        }
        return checkForUnauthorizedResponse(error, thunkAPI);
    }
};

export const clearStoreThunk = async (message, thunkAPI) => {
    try {
      // logout user
      thunkAPI.dispatch(logoutUser(message));
      // clear jobs value
      thunkAPI.dispatch(clearAllJobsState());
      // clear job input values
      thunkAPI.dispatch(clearValues());
      return Promise.resolve();
    } catch (error) {
      // console.log(error);
      return Promise.reject();
    }
  };