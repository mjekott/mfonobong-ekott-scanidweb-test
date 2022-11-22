import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IAddCartPayload } from './action.types';
import { ICartItem, ICartState } from './cart.interface';

const initialState: ICartState = {
    cart: [],
    currency: '$',
};

const modifyQtyByOne = (
    cart: ICartItem[],
    payload: IAddCartPayload,
    modificationType: 'INCREMENT' | 'DECREMENT',
) => {
    const previousCart = [...cart];

    const productInCart = previousCart.find(
        (item) => item.product.id === payload.product.id,
    );

    let newCart = [];

    if (!productInCart) {
        previousCart.push({ ...payload, quantity: 1 });
        newCart = previousCart;
    } else {
        const filteredCart = previousCart.filter(
            (p) => p.product.id !== productInCart.product.id,
        );

        const modification = modificationType === 'INCREMENT' ? 1 : -1;

        productInCart.quantity = productInCart.quantity + modification;

        if (productInCart.quantity === 0) {
            newCart = [...filteredCart];
        } else {
            newCart = [...filteredCart, productInCart];
        }
    }
    return newCart;
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increaseCartQuantity(state, action: PayloadAction<IAddCartPayload>) {
            const modifiedCart = modifyQtyByOne(
                state.cart,
                action.payload,
                'INCREMENT',
            );
            state.cart = modifiedCart;
        },
        decreaseCartQuantity(state, action: PayloadAction<IAddCartPayload>) {
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

        updateAttr(
            state,
            action: PayloadAction<{
                productId: string;
                attributeId: string;
                name: string;
                value: string;
                id: string;
            }>,
        ) {
            const cartItem = state.cart.find(
                (item) => item.product.id === action.payload.productId,
            );
            if (!cartItem) return;
            cartItem.selectedAttribute = {
                ...action.payload,
            };
            state.cart = [...state.cart];
        },

        changeCurrency(state, action: PayloadAction<string>) {
            state.currency = action.payload;
        },
    },
});

export const { reducer } = cartSlice;
