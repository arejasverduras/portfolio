import { configureStore } from '@reduxjs/toolkit';
//import reducers
import ProjectsSlice from '../components/Projects/ProjectsSlice';
import ContactSlice from '../components/Contact/ContactSlice';
import ClientSlice from '../components/Hero/ClientSlice';

export const store = configureStore({
  reducer: {
    projects: ProjectsSlice,
    contact: ContactSlice,
    clients: ClientSlice
  },
});
