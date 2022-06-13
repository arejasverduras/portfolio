import { createSlice } from "@reduxjs/toolkit";

const ClientSlice =  createSlice({
    name: 'clients',
    initialState: {
        clients: [
            {
            id: 1,
            name: 'Silvester Zwemschool',
            logo: './images/clientImages/SilvesterZwemschool.webp'
        },
        {
            id: 2,
            name: 'Silvester Zwemschool',
            logo: './images/clientImages/SilvesterZwemschool.webp'
        },
        {
            id: 3,
            name: 'Silvester Zwemschool',
            logo: './images/clientImages/SilvesterZwemschool.webp'
        },
    ]
    },
    reducers: {}
})


//export slice actions
// export const { addClient } = ClientSlice.actions;

//create and export sliceSelector
export const selectClients = state => state.clients.clients;

//export the reducer as default
export default ClientSlice.reducer;
