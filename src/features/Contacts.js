import { createSlice } from "@reduxjs/toolkit";
let ContactData = require("../shared/ListOfContacts.json");
const contactSlice = createSlice({
  name: "contacts",
  initialState: { value: ContactData },
  reducers: {
    addContact: (state, action) => {
      // Write code for addUser function
      state.value.push(action.payload);
    },
    deleteContact: (state, action) => {
      // Write code for deleteUser fuction
      state.value = state.value.filter((contacts)=> contacts.id !== action.payload.id);
    },
    updateContact: (state, action) => {
      // Write code for updateUsername function
      // eslint-disable-next-line
      state.value.map((contact) => {
      if (contact.id === action.payload.id) {
        contact.note = action.payload.note;
        contact.status = action.payload.status
      }})
    },
  },
});

export default contactSlice.reducer;
export const { addContact, deleteContact, updateContact } = contactSlice.actions;
