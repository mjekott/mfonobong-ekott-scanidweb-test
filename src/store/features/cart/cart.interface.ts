import { IProduct } from 'shared/types';

export type SelectedVariant = {
    attributeId: string;
    item: {
        id: string;
        value: string;
    };
};

export interface ICartItem {
    id: string;
    quantity: number;
    product: IProduct;
    selectedVariants?: SelectedVariant[];
}

export interface ICartState {
    cart: ICartItem[];
    currency: string;
    tax: number;
}
