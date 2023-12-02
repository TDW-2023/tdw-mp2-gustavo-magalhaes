import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDepartments = createAsyncThunk(
  'departments/fetchDepartments',
  async () => {
    const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/departments');
    const data = await response.json();
    return data.departments;
  }
);

export const departmentSlice = createSlice({
  name: 'department',
  initialState: { entities: [], loading: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDepartments.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchDepartments.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.entities = action.payload;
      });
  },
});

export default departmentSlice.reducer;