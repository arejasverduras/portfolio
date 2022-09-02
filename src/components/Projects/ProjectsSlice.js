import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
    name: "projects",
    initialState: {
            projects: [
                 {
                    id: 1,
                    name: "Resume",
                    client: "Arejas",
                    description: "Interactive Resume to apply for Front-end / React jobpositions. Fully searchable, printable and 'flippable'.",
                    tileImage: "/images/projectImages/resumeTile.png",
                    images: ["/images/projectImages/resume/resume1.png","/images/projectImages/resume/resume2.png","/images/projectImages/resume/resume3.png","/images/projectImages/resume/resume4.png","/images/projectImages/resume/resume5.png", "/images/projectImages/resume/resume6.png"],
                    tech: ['React','JavaScript', 'HTML', 'CSS'],
                    cat: 'Front-End',
                    type: 'Personal',
                    demoLink: "https://arejasresume.surge.sh",
                    sourceLink: "https://github.com/arejasverduras/resume",
                    readMe: "https://raw.githubusercontent.com/arejasverduras/resume/master/README.md"
                },
                {
                    id: 2,
                    name: "ShredFish",
                    client: "Arejas",
                    description: "Global Surf Forecasting app for daily use. Get notified when the weather and ocean conditions are optimal for the sport of wave Surfing. Personal Portfolio Project to display ability to work with external api's.",
                    tileImage: "/images/projectImages/shredfishTile.png",
                    images: ["/images/projectImages/shredfish/shredfish1.png","/images/projectImages/shredfish/shredfish2.png","/images/projectImages/shredfish/shredfish3.png"],
                    tech: ['Redux', 'React', 'JavaScript' ,'HTML','CSS'],
                    cat: 'Front-End',
                    type: 'Personal',
                    demoLink: "https://shredfish.surge.sh",
                    sourceLink: "https://github.com/arejasverduras/shredfish",
                    readMe: "https://raw.githubusercontent.com/arejasverduras/shredfish/master/README.md"
                },
                {
                    id: 3,
                    name: "Portfolio",
                    client: "Codecademy",
                    description: "Interactive Portfolio to showcase professional and personal projects. Searchable and full with easter eggs'.",
                    tileImage: "/images/projectImages/portfolioTile.png",
                    images: ["/images/projectImages/portfolio/portfolio1.png", "/images/projectImages/portfolio/portfolio2.png", "/images/projectImages/portfolio/portfolio3.png", "/images/projectImages/portfolio/portfolio4.png"],
                    tech: ['Redux', 'React', 'JavaScript' ,'HTML','CSS'],
                    cat: 'Front-End',
                    type: 'Personal',
                    demoLink: "https://arejasportfolio.surge.sh",
                    sourceLink: "https://github.com/arejasverduras/portfolio",
                    readMe: "https://raw.githubusercontent.com/arejasverduras/portfolio/main/README.md"
                },
                {
                    id: 4,
                    name: "Jammming",
                    client: "Codecademy",
                    description: "Spotify web-client that allows you to search songs & create playlist on Spotify using the Spotify API",
                    tileImage: "/images/projectImages/jammmingTile.png",
                    images: ["/images/projectImages/jammming/jammming1.png","/images/projectImages/jammming/jammming2.png","/images/projectImages/jammming/jammming3.png","/images/projectImages/jammming/jammming4.png"],
                    tech: ['React', 'JavaScript', 'HTML', 'CSS'],
                    cat: 'Front-End',
                    type: 'Personal',
                    demoLink: "https://arejas_jammming.surge.sh/",
                    sourceLink: "https://github.com/arejasverduras/jammming",
                    readMe: "https://raw.githubusercontent.com/arejasverduras/jammming/master/README.md"
                },
                {
                    id: 5,
                    name: "Koekboek",
                    client: "Arejas",
                    description: "Interactive JavaScript Project.",
                    tileImage: "/images/projectImages/koekboekTile.png",
                    images: ["/images/projectImages/koekboek/koekboek1.png","/images/projectImages/koekboek/koekboek2.png","/images/projectImages/koekboek/koekboek3.png","/images/projectImages/koekboek/koekboek4.png"],
                    tech: ['JavaScript', 'HTML', 'CSS'],
                    cat: 'Front-End',
                    type: 'Personal',
                    demoLink: "https://arejasverduras.github.io/koekboek/",
                    sourceLink: "https://github.com/arejasverduras/koekboek",
                    readMe: "https://raw.githubusercontent.com/arejasverduras/koekboek/main/README.md"
                },                
            ],
            placeHolderImage: '/images/projectImages/NoImage.png'
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
export const selectPlaceHolder = state => state.projects.placeHolderImage;

//export the reducer as default
export default projectsSlice.reducer;

