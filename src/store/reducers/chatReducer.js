import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api"; 

// export const customer_register = createAsyncThunk(
//     'auth/customer_register',
//     async(info, { rejectWithValue,fulfillWithValue }) => {
//         try {
//             const {data} = await api.post('/customer/customer-register',info)
//             localStorage.setItem('customerToken',data.token)
//            // console.log(data)
//             return fulfillWithValue(data)
//         } catch (error) {
//             return rejectWithValue(error.response.data)
//         }
//     }
// )
// // End Method 

 


export const chatReducer = createSlice({
    name: 'chat',
    initialState:{
        my_friends: [],
        fb_messages : [],
        currentFd: "",
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
        // builder 
        // .addCase(customer_register.fulfilled, (state, { payload }) => {
        //     const userInfo = decodeToken(payload.token)
        //     state.successMessage = payload.message;
        //     state.loader = false;
        //     state.userInfo = userInfo
        // })

       
    }
})
export const {messageClear} = chatReducer.actions
export default chatReducer.reducer