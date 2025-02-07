import { createSlice } from "@reduxjs/toolkit";


const wishlist= createSlice({
    name:"myWshlist",
    initialState:[],
    reducers:{
        addtowhislist:(state,action)=>{
            state.push(action.payload)
        },
        removewitemtowhislist:(state,action)=>{
            return state.filter(item=>item.id != action.payload)
        }
    }
})

export const {addtowhislist,removewitemtowhislist} = wishlist.actions
export default wishlist.reducer
