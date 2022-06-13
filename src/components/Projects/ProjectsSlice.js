import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
    name: "projects",
    initialState: {
            projects: [
                 {
                    id: 1,
                    name: "Resume",
                    client: "Personal",
                    description: "Interactive Resume to apply for Front-end / React jobpositions. Fully searchable, printable and 'flippable'.",
                    tileImage: "/images/projectImages/resumeTile.png",
                    images: [],
                    tech: ['React','JavaScript', 'HTML', 'CSS','whatever'],
                    cat: 'Front-End',
                    type: 'Personal',
                    demoLink: "https://arejasresume.surge.sh",
                    sourceLink: "https://github.com/arejasverduras/resume"
                },
                {
                    id: 2,
                    name: "Portfolio",
                    client: "Personal",
                    description: "Interactive Portfolio to showcase professional and personal projects. Searchable and full with easter eggs'.",
                    tileImage: "/images/projectImages/portfolioTile.png",
                    images: [],
                    tech: ['Redux', 'React', 'JavaScript' ,'HTML','CSS', 'yolo'],
                    cat: 'Back-End',
                    type: 'Personal',
                    demoLink: "https://arejasresume.surge.sh",
                    sourceLink: "https://github.com/arejasverduras/resume"
                },
                {
                    id: 3,
                    name: "Koekboek",
                    client: "Personal",
                    description: "Interactive JavaScript Project.",
                    tileImage: "/images/projectImages/koekboekTile.png",
                    images: [],
                    tech: ['JavaScript', 'HTML', 'CSS'],
                    cat: 'Full-Stack',
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

