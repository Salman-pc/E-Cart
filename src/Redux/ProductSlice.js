import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchproducts= createAsyncThunk('products/fetchproducts',async()=>{
    const result=await axios.get("https://dummyjson.com/products?limit=140")
    localStorage.setItem("allproducts",JSON.stringify(result.data.products))
    return result.data.products
})

const ProductSlice = createSlice({
    name:"products",
    initialState:{
        allProducts:[],
        duplicate:[],
        pending:false,
        err:''
    },
    reducers:{
        searchproduct:(state,action)=>{      
            state.allProducts = state.duplicate.filter(item => 
                item.title.toLowerCase().includes(action.payload.toLowerCase())
              );     
        }     
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchproducts.fulfilled,(state,action)=>{
            state.allProducts=action.payload
            state.duplicate=action.payload
            state.pending=false
            state.err=''
        })
        builder.addCase(fetchproducts.pending,(state,action)=>{
            state.allProducts=[]
            state.duplicate=[]
            state.pending=true
            state.err=''
        })
        builder.addCase(fetchproducts.rejected,(state,action)=>{
            state.allProducts=[]
            state.duplicate=[]
            state.pending=false
            state.err='Api Call failed'
        })
    }
    
})

export const {searchproduct} = ProductSlice.actions
export default ProductSlice.reducer