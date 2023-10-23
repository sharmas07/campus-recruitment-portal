import { configureStore } from '@reduxjs/toolkit';
import signupReducer from '../reducers/signUpReducer';
import loginReducer from '../reducers/loginReducer';

const rootReducer = {
  signup: signupReducer,
  login: loginReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
