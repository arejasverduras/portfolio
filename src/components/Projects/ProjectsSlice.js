import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
    name: "projects",
    initialState: {
            projects: {
                1 : {
                    id: 1,
                    name: "Resume",
                    description: "Interactive Resume to apply for Front-end / React jobpositions. Fully searchable, printable and 'flippable'.",
                    images: [],
                    tech: ['JavaScript', 'React', 'HTML', 'CSS'],
                    cat: 'Front-end',
                    type: 'Personal',
                    demoLink: "https://arejasresume.surge.sh",
                    sourceLink: "https://github.com/arejasverduras/resume"
                },
                2 : {
                    id: 2,
                    name: "Resume2",
                    description: "Interactive Resume to apply for Front-end / React jobpositions. Fully searchable, printable and 'flippable'.",
                    images: [],
                    tech: ['JavaScript', 'React', 'HTML', 'CSS'],
                    cat: 'Front-end',
                    type: 'Personal',
                    demoLink: "https://arejasresume.surge.sh",
                    sourceLink: "https://github.com/arejasverduras/resume"
                },
                3 : {
                    id: 3,
                    name: "Resume3",
                    description: "Interactive Resume to apply for Front-end / React jobpositions. Fully searchable, printable and 'flippable'.",
                    images: [],
                    tech: ['JavaScript', 'React', 'HTML', 'CSS'],
                    cat: 'Front-end',
                    type: 'Personal',
                    demoLink: "https://arejasresume.surge.sh",
                    sourceLink: "https://github.com/arejasverduras/resume"
                }
            }
        },
        reducers: {
            addProject: (state, action) => {
                state.projects.projects[action.payload.id] = action.payload;
            }
        }
})

//export slice actions
export const { addProject } = projectsSlice.actions;

//create and export sliceSelector
export const selectProjects = state => state.projects.projects;

//export the reducer as default
export default projectsSlice.reducer;

