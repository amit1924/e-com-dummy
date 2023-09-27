import {createSlice} from '@reduxjs/toolkit'
import './cartSlice.css'

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart:(state,action)=>{
            const existingItem =state.find(item=>item.product.id===action.payload.id)

            if(existingItem) {
                existingItem.quantity+=1
            }else{
                state.push({product:action.payload,quantity:1})
            }
        },
        removeFromCart:(state,action)=>{
            return state.filter(item=>item.product.id!==action.payload.id)
        }
    }
});
export const {addToCart,removeFromCart}=cartSlice.actions;

export default cartSlice.reducer