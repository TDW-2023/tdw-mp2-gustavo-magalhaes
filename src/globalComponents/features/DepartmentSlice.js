import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDepartments = createAsyncThunk(
  'departments/fetchDepartments',
  async () => {
    const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/departments');
    const data = await response.json();
    return data.departments;
  }
);

export const getObjectById = async (objectID) => {
  const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`);
  return response.json();
};

let cache = {};
let page = 0;

const getObjectsByDepartment = async (id) => {
  if (!cache[id]) {
    cache[id] = [];
  }

  const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects?hasImages=true&isPublicDomain=true&departmentIds=${id}`);
  const data = await response.json();
  cache[id] = cache[id].concat(data.objectIDs.slice(page * 50, (page + 1) * 50));
  page += 1;

  const details = await Promise.all(
    cache[id].map(async (objectId) => {
      const data = await getObjectById(objectId);
      return data;
    })
  );

  return details;
};

export const fetchArtworks = createAsyncThunk(
  'departments/fetchArtworks',
  async (id, thunkAPI) => {
    const details = await getObjectsByDepartment(id);
    const existingArtworks = thunkAPI.getState().department.artworks;
    const uniqueDetails = details.filter(detail => !existingArtworks.some(artwork => artwork.objectID === detail.objectID));
    console.log(uniqueDetails)
    return uniqueDetails;
  }
);

export const departmentSlice = createSlice({
  name: 'department',
  initialState: { entities: [], artworks: [], loading: 'idle' },
  reducers: {
    resetArtworks: (state) => {
      state.artworks = [];
      page = 0;
      cache = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDepartments.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchDepartments.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.entities = action.payload;
      })
      .addCase(fetchArtworks.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchArtworks.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.artworks = state.artworks.concat(action.payload);
      });
  },
});

export const { resetArtworks } = departmentSlice.actions;

export default departmentSlice.reducer;