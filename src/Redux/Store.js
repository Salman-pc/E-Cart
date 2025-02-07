import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from './ProductSlice'
import wishlist from './wishlist'
import cartslice from './CartSlice'

export const Store = configureStore({
    reducer:{
        productReducer:ProductSlice,
        wishlistReducer:wishlist,
        cartreduces:cartslice
    }
})