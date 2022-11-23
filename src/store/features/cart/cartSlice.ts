import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import {
    IAddCartPayload,
    IModifyCartQuantity,
    IUpdateVariant,
} from './action.types';
import { ICartState } from './cart.interface';
import { modifyQtyByOne } from './helpers';
import { addProductToCart } from './helpers/index';

const initialState: ICartState = {
    cart: [],
    currency: '$',
    tax: 0.21,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<IAddCartPayload>) {
            state.cart = addProductToCart(state.cart, action.payload);
        },
        increaseCartQuantity(
            state,
            action: PayloadAction<IModifyCartQuantity>,
        ) {
            const modifiedCart = modifyQtyByOne(
                state.cart,
                action.payload,
                'INCREMENT',
            );
            state.cart = modifiedCart;
        },
        decreaseCartQuantity(
            state,
            action: PayloadAction<IModifyCartQuantity>,
        ) {
            const modifiedCart = modifyQtyByOne(
                state.cart,
                action.payload,
                'DECREMENT',
            );
            state.cart = modifiedCart;
        },
        resetCart(state) {
            state.cart = [];
        },

        updateVariant(state, action: PayloadAction<IUpdateVariant>) {
            const cartItem = state.cart.find(
                (item) => item.id === action.payload.cartId,
            );
            if (!cartItem) return;
            cartItem.selectedVariants = action.payload.selectedVariant;
        },

        changeCurrency(state, action: PayloadAction<string>) {
            state.currency = action.payload;
        },
    },
});

export const { reducer } = cartSlice;
