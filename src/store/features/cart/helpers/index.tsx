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
