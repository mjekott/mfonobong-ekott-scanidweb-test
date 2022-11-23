import { GetProducts_category_products } from 'graphql-types/GetProducts';

export interface ICartItem {
    quantity: number;
    product: GetProducts_category_products;
    selectedAttribute?: {
        attributeId: string;
        item: {
            id: string;
            value: string;
        };
    }[];
}

export interface ICartState {
    cart: ICartItem[];
    currency: string;
    tax: number;
}
