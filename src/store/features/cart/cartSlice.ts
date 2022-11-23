import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IAddCartPayload } from './action.types';
import { ICartItem, ICartState } from './cart.interface';

const initialState: ICartState = {
    cart: [],
    currency: '$',
    tax: 0.21,
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
        const variant = payload.product.attributes?.map((atrribute: any) => {
            const value: {
                attributeId: string;
                item: {
                    id: string;
                    value: string;
                };
            } = {
                attributeId: atrribute?.id,
                item: {
                    id: atrribute?.items[0]?.id,
                    value: atrribute?.items[0]?.value,
                },
            };
            return value;
        });
        previousCart.push({
            ...payload,
            quantity: 1,
            selectedAttribute: variant,
        });
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
            newCart = previousCart;
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
                item: {
                    id: string;
                    value: string;
                };
            }>,
        ) {
            // find product in cart

            // find if variant exis
            const cartItem = state.cart.find(
                (item) => item.product.id === action.payload.productId,
            );
            if (!cartItem) return;
            // find selected variant
            let variant = cartItem.selectedAttribute?.find(
                (item) => item.attributeId === action.payload.attributeId,
            );
            if (variant) {
                variant = { ...action.payload };
                cartItem.selectedAttribute = cartItem.selectedAttribute?.map(
                    (item) => {
                        if (item.attributeId === variant?.attributeId) {
                            return { ...action.payload };
                        }
                        return item;
                    },
                );
            } else {
                cartItem.selectedAttribute?.push({ ...action.payload });
            }

            state.cart = [...state.cart];
        },

        changeCurrency(state, action: PayloadAction<string>) {
            state.currency = action.payload;
        },
    },
});

export const { reducer } = cartSlice;
