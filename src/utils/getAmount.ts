import { IProduct } from '@/shared/types';

export const getAmount = (product: IProduct, currency: string) => {
    const match = product.prices.find(
        (item) => item.currency.symbol === currency,
    );
    return `${currency}${match?.amount}`;
};
