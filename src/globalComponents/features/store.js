import { configureStore } from '@reduxjs/toolkit';
import departmentReducer from './DepartmentSlice';
//import logger from 'redux-logger';

export default configureStore({
  reducer: {
    department: departmentReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  //.concat(logger),
});