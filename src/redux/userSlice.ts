import { createSlice } from "@reduxjs/toolkit";
import { userInfo } from "./types";

const initialState: userInfo = {
  userName: "lequynhaivan01",
  fullName: "Lê Quỳnh Ái Vân",
  phoneNumber: "0767375921",
  email: "adminSSO1@domain.com",
  password: "311940211",
  role: 0,
  avatar: "https://i.ibb.co/KFzcpxz/image.png",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, actions) => {
      state.email = actions.payload.email;
    },
    logout: (state) => {
      state.email = "";
    },
  },
});

// To able to use reducers we need to export them.
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
