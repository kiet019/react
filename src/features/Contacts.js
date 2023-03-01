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
    deleteUser: (state, action) => {
      // Write code for deleteUser fuction

    },
    updateUsername: (state, action) => {
      // Write code for updateUsername function
      // eslint-disable-next-line
    },
  },
});

export default contactSlice.reducer;
export const { addContact, deleteContact, updateContact } = contactSlice.actions;
