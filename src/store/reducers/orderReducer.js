import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api"; 

export const place_order = createAsyncThunk(
    'order/place_order',
    async({ price,products,shipping_fee,items,shippingInfo,userId,navigate}) => {
        try {
            const { data } = await api.post('/home/order/place-order',{
                price,products,shipping_fee,items,shippingInfo,userId,navigate
            })
            navigate('/payment',{
                state: {
                    price:price + shipping_fee,
                    items,
                    orderId: data.orderId 
                }
            })
            console.log(data)
        } catch (error) {
            console.log(error.response)
        }
        
    }
)
// End Method 

export const get_orders = createAsyncThunk(
    'order/get_orders',
    async({customerId,status}, { rejectWithValue,fulfillWithValue }) => {
        try {
            const {data} = await api.get(`/home/coustomer/get-orders/${customerId}/${status}`) 
            // console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
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