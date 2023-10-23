import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../services/api';

export const login = createAsyncThunk('auth/login', async (credentials) => {
  try {
    console.log('login api got hit')
    const response = await API.post(`/auth/login`, credentials);
    return response.data;
  } catch (error) {
    console.log('login endp bleeding')
    throw error;
  }
});

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { loginSuccess } = loginSlice.actions;
export default loginSlice.reducer;
