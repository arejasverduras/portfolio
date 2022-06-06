import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
    name: "projects",
    initialState: {
            projects: [
                {
                    id: 1,
                    name: "Resume",
                    description: "Interactive Resume to apply for Front-end / React jobpositions. Fully searchable, printable and 'flippable'.",
                    tileImage: "./images/arantxa.png",
                    images: [],
                    tech: ['React','JavaScript', 'HTML', 'CSS','whatever'],
                    cat: 'Front-end',
                    type: 'Personal',
                    demoLink: "https://arejasresume.surge.sh",
                    sourceLink: "https://github.com/arejasverduras/resume"
                },
                {
                    id: 2,
                    name: "Portfolio",
                    description: "Interactive Portfolio to showcase professional and personal projects. Searchable and full with easter eggs'.",
                    tileImage: "./images/arantxa.png",
                    images: [],
                    tech: ['Redux', 'React', 'JavaScript' ,'HTML','CSS'],
                    cat: 'Front-end',
                    type: 'Personal',
                    demoLink: "https://arejasresume.surge.sh",
                    sourceLink: "https://github.com/arejasverduras/resume"
                },
                {
                    id: 3,
                    name: "JS Project",
                    description: "Interactive JavaScript Project.",
                    tileImage: "./images/arantxa.png",
                    images: [],
                    tech: ['JavaScript', 'HTML', 'CSS'],
                    cat: 'Front-end',
                    type: 'Personal',
                    demoLink: "https://arejasresume.surge.sh",
                    sourceLink: "https://github.com/arejasverduras/resume"
                }
            ]
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

