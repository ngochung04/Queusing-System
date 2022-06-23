import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
// import {  Device } from './types';


const initialState: any = {
    idManage: "Nhập mã thiết bị",
    typeManage: "Chọn loại thiết bị",
    nameManage: "Nhập tên thiết bị",
    userName: "Nhập tài khoản",
    ipManage: "Nhập địa chỉ IP",
    password: "Nhập mật khẩu",
    serviceManege: "Nhập dịch vụ sử dụng", 

};


export const manageSlice = createSlice({
  name: 'manage',
  initialState,
  reducers: {
  },
});

// To able to use reducers we need to export them.
export const { } = manageSlice.actions;

export default manageSlice.reducer;