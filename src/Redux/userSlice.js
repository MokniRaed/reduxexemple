import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { name: "Racha", lastName: "Ghariani" },
  reducers: {
    changeName: (state, actions) => {
      state.name=actions.payload;
    },
    changeLastName:(state,actions)=>{
      state.lastName=actions.payload;
    },
 
  },
});

export const {changeName,changeLastName} = userSlice.actions;

export default userSlice.reducer;
