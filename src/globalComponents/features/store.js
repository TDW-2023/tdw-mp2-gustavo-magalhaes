import { configureStore } from '@reduxjs/toolkit';
import departmentReducer from './DepartmentSlice';

export default configureStore({
  reducer: {
    department: departmentReducer,
  },
});