import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../services/api';


export const signup = createAsyncThunk('auth/signup', async (userData) => {
  try {
    const response = await API.post('/auth/signup', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    signupSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { signupSuccess } = signupSlice.actions;
export default signupSlice.reducer;
