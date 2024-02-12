import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api"; 

export const add_friend = createAsyncThunk(
    'chat/add_friend',
    async(info, { rejectWithValue,fulfillWithValue }) => {
        try {
            const {data} = await api.post('/chat/customer/add-customer-friend',info)
           // console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
// End Method 

 


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