import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";


export const get_category = createAsyncThunk(
    'product/get_category',
    async(_, { fulfillWithValue }) => {
        try {
            const {data} = await api.get('/home/get-categorys')
            // console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            console.log(error.respone)
        }
    }
)
// End Method 
export const get_products = createAsyncThunk(
    'product/get_products',
    async(_, { fulfillWithValue }) => {
        try {
            const {data} = await api.get('/home/get-products')
             console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            console.log(error.respone)
        }
    }
)
// End Method 


export const price_range_product = createAsyncThunk(
    'product/price_range_product',
    async(_, { fulfillWithValue }) => {
        try {
            const {data} = await api.get('/home/price-range-latest-product')
             console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            console.log(error.respone)
        }
    }
)
// End Method 

export const query_products = createAsyncThunk(
    'product/query_products',
    async(query , { fulfillWithValue }) => {
        try {
            const {data} = await api.get(`/home/query-products?category=${query.category}&&rating=${query.rating}&&lowPrice=${query.low}&&highPrice=${query.high}&&sortPrice=${query.sortPrice}&&pageNumber=${query.pageNumber}&&searchValue=${query.searchValue ? query.searchValue : ''} `)
            //  console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            console.log(error.respone)
        }
    }
)
// End Method 




export const homeReducer = createSlice({
    name: 'home',
    initialState:{
        categorys : [],
        products : [],
        totalProduct : 0,
        parPage: 3,
        latest_product : [],
        topRated_product : [],
        discount_product : [],
        priceRange : {
            low: 0,
            high: 100
        }
    },
    reducers : {
 
    },
    extraReducers: (builder) => {
        builder
        .addCase(get_category.fulfilled, (state, { payload }) => {
            state.categorys = payload.categorys;
        })
        .addCase(get_products.fulfilled, (state, { payload }) => {
            state.products = payload.products;
            state.latest_product = payload.latest_product;
            state.topRated_product = payload.topRated_product;
            state.discount_product = payload.discount_product;
        })
        .addCase(price_range_product.fulfilled, (state, { payload }) => { 
            state.latest_product = payload.latest_product;
            state.priceRange = payload.priceRange; 
        })
        .addCase(query_products.fulfilled, (state, { payload }) => { 
            state.products = payload.products;
            state.totalProduct = payload.totalProduct;
            state.parPage = payload.parPage; 
        })

    }
})

export default homeReducer.reducer