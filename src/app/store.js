import { configureStore } from '@reduxjs/toolkit';
//import reducers
import ProjectsSlice from '../components/Projects/ProjectsSlice';

export const store = configureStore({
  reducer: {
    projects: ProjectsSlice
  },
});
