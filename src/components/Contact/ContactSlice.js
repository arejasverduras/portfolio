import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
    name: 'contact',
    initialState: { 
        contactInfo: {
            mail: "info@arejo.nl",
            phone: '+31622040319',
            github: <a href="https://github.com/arejasverduras">gitHub</a>,
            linkedin: <a href="https://linkedin.com/michielroukens">linkedIn</a>
    }},
    reducers: {
        addContactInfo: (state, action) => {
            state.contact.contactInfo[action.payload.contactKey] = action.payload.contactValue;
        }
    }
})

//export reducer actions
export const { addContactInfo } = contactSlice.actions;

//declare and export selector
export const selectContact = state => state.contact.contactInfo;

//export reducer as the default export
export default contactSlice.reducer;