import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api"; 

export const get_dashboard_index_data = createAsyncThunk(
    'dashboard/get_dashboard_index_data',
    async(userId, { rejectWithValue,fulfillWithValue }) => {
        try {
            const {data} = await api.get(`/home/coustomer/get-dashboard-data/${userId}`) 
            console.log(data)
            // return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)
// End Method 
 
 


export const dashboardReducer = createSlice({
    name: 'dashboard',
    initialState:{
        recentOrders : [], 
        errorMessage : '',
        successMessage: '', 
        totalOrder: 0,
        pendingOrder: 0,
        cancelledOrder: 0
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
export const {messageClear} = dashboardReducer.actions
export default dashboardReducer.reducer