import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingCartItem = state.find(item => item.id === action.payload.id);
      console.log("jafkladfk;lajkld",state);
      

      if (existingCartItem) {
        const reminigitems=state.filter(item=>item.id !=action.payload.id )
        existingCartItem.quantity++;
        existingCartItem.totalPrice = existingCartItem.quantity * existingCartItem.price;
        state=[...reminigitems,existingCartItem]

      } else {

        state.push({ ...action.payload, quantity: 1, totalPrice: action.payload.price });

      }
    },
    quantityincriment:(state,action)=>{
        let incimentItem=state.find(item=>item.id==action.payload)
        const reminigitems = state.filter(item=>item.id != action.payload)
        incimentItem.quantity++
        incimentItem.totalPrice=incimentItem.quantity * incimentItem.price
        state=[...reminigitems,incimentItem]

    },
    quantitydicriment:(state,action)=>{
        let incimentItem=state.find(item=>item.id==action.payload)
        // const reminigitems = state.filter(item=>item.id != action.payload)
        incimentItem.quantity--
        incimentItem.totalPrice=incimentItem.quantity * incimentItem.price
    },
    deleteCartItem:(state,action)=>{
       return state.filter(item=>item.id != action.payload)
    },
    emptycart:(state)=>{

        return state=[]
    }

  }
});

export const { addToCart,quantitydicriment,quantityincriment,deleteCartItem,emptycart } = cartSlice.actions;
export default cartSlice.reducer;
