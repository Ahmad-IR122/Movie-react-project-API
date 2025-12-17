import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (page) => {
    const api_key = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${page}`;
    const response = await fetch(URL);
    const data = await response.json();
    return data.results;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    
    movies: [],
    loading: false,
    error: null,
    page:1
  },
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true;
      state.error = null;
    },
  ).addCase(fetchMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.movies.push(...action.payload);
    }).addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  }
})

export const { incrementPage } = movieSlice.actions;

export default movieSlice.reducer ;