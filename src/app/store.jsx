import { configureStore } from '@reduxjs/toolkit'
import movie from '../features/movie/movieSlice'
export default configureStore({
  reducer: {
        reducer: movie,
  },
})