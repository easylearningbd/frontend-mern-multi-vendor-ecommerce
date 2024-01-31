import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api"; 

export const place_order = createAsyncThunk(
    'card/place_order',
    async({ price,products,shipping_fee,items,shippingInfo,userId,navigate}) => {
        try {
            
        } catch (error) {
            
        }
        
    }
)
// End Method 
 


export const orderReducer = createSlice({
    name: 'order',
    initialState:{
        myOrders : [], 
        errorMessage : '',
        successMessage: '',  
        myOrder : {},
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
export const {messageClear} = orderReducer.actions
export default orderReducer.reducer