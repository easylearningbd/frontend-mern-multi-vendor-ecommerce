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
        builder 
        .addCase(add_friend.fulfilled, (state, { payload }) => { 
            state.fb_messages = payload.messages;
            state.currentFd = payload.currentFd;
            state.my_friends = payload.MyFriends;
        })

       
    }
})
export const {messageClear} = chatReducer.actions
export default chatReducer.reducer