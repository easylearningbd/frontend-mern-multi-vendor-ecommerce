import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const authReducer = createSlice({
    name: 'auth',
    initialState:{
        loader : false,
        userInfo : '',
        errorMessage : '',
        successMessage: '', 
    },
    reducers : {

        messageClear : (state,_) => {
            state.errorMessage = ""
            state.successMessage = ""
        }
 
    },
    extraReducers: (builder) => {
        
    }
})
export const {messageClear} = authReducer.actions
export default authReducer.reducer