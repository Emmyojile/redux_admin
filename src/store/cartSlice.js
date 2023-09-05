import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },

        remove(state, action) {
            return state.filter(item => item.id !== action.payload)
        }
    }
})

export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {};

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         add(state, action) {
//             const productId = action.payload.id;

//             if (state[productId]) {
//                 state[productId]++;
//             } else {
//                 state[productId] = 1;
//             }
//         },

//         remove(state, action) {
//             const productId = action.payload;
//             if (state[productId] > 1) {
//                 state[productId]--;
//             } else {
//                 delete state[productId];
//             }
//         }
//     }
// })

// export const { add, remove } = cartSlice.actions;
// export default cartSlice.reducer;
