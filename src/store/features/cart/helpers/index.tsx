import _isEqual from 'lodash.isequal';
import { v4 as uuid } from 'uuid';

import { IAddCartPayload, IModifyCartQuantity } from '../action.types';
import { ICartItem } from '../cart.interface';

import { RootState } from '@/store/store';

export const getTotal = (state: RootState) => {
    return state.cart.cart.reduce((acc, curr) => {
        let amount = 0;
        const price = curr.product.prices.find(
            (item) => item.currency.symbol === state.cart.currency,
        );
        if (price) {
            amount = price.amount;
        }
        return acc + amount * curr.quantity;
    }, 0);
};

export const getTotalQuantity = (state: RootState) =>
    state.cart.cart.reduce((acc, curr) => acc + curr.quantity, 0);

export const getTax = (state: RootState) => {
    return getTotal(state) * state.cart.tax;
};

export const modifyQtyByOne = (
    cart: ICartItem[],
    payload: IModifyCartQuantity,
    modificationType: 'INCREMENT' | 'DECREMENT',
) => {
    const previousCart = [...cart];

    const productInCart = previousCart.find(
        (item) => item.id === payload.cartId,
    );
    if (!productInCart) {
        return previousCart;
    }

    const modification = modificationType === 'INCREMENT' ? 1 : -1;

    productInCart.quantity = productInCart.quantity + modification;

    let newCart = [];

    if (productInCart.quantity === 0) {
        const filteredCart = previousCart.filter(
            (p) => p.id !== productInCart.id,
        );
        newCart = [...filteredCart];
    } else {
        newCart = previousCart;
    }
    return newCart;
};

export const addProductToCart = (
    cart: ICartItem[],
    payload: IAddCartPayload,
) => {
    const id = uuid();
    const newCart = [...cart];

    const foundCartItem = newCart.findIndex(
        (item) =>
            _isEqual(item.product, payload.product) &&
            _isEqual(item.selectedVariants, payload.selectedVariant),
    );

    if (foundCartItem > -1) {
        newCart[foundCartItem] = {
            ...newCart[foundCartItem],
            selectedVariants: payload.selectedVariant,
            quantity: newCart[foundCartItem].quantity + 1,
        };
    } else {
        const newItem: ICartItem = {
            id,
            product: payload.product,
            quantity: 1,
        };
        if (payload.selectedVariant) {
            newItem.selectedVariants = payload.selectedVariant;
        }

        newCart.push(newItem);
    }

    return newCart;
};
