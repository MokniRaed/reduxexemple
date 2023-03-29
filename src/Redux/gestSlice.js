import { createSlice } from "@reduxjs/toolkit";

export const getSlice = createSlice({
  name: "gest",
  initialState: [],
  reducers: {
    addContacts:(state,actions)=>{
        return actions.payload;
       }
  },
});

export const {addContacts} = getSlice.actions;

export default getSlice.reducer;
