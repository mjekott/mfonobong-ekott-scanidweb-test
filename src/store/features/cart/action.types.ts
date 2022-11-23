import { IProduct } from 'shared/types';

import { SelectedVariant } from './cart.interface';

export interface IAddCartPayload {
    product: IProduct;
    selectedVariant?: SelectedVariant[];
}

export interface IModifyCartQuantity {
    cartId: string;
}

export interface IUpdateVariant {
    cartId: string;
    selectedVariant: SelectedVariant[];
}
