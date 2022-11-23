export interface ICategory {
    name: string;
}

export interface IGetCategories {
    categories: ICategory[];
}

export interface ICurrency {
    label: string;
    symbol: string;
}

export interface GetCurrencies {
    currencies: ICurrency[];
}

export interface IAttribute {
    id: string;
    value: string;
    displayValue: string;
}

export interface IAttributes {
    id: string;
    name: string | null;
    items: IAttribute[];
}

export interface IProductPrice {
    currency: ICurrency;
    amount: number;
}

export interface IProduct {
    id: string;
    name: string;
    inStock: boolean;
    gallery: string[];
    category: string;
    brand: string;
    description: string;
    attributes: IAttributes[];
    prices: IProductPrice[];
}

export interface IGetProductDetails {
    product: IProduct;
}

export interface IGetProductDetailsInput {
    product_id: string;
}

export interface IGetCategoryProducts {
    name: string;
    products: IProduct[];
}

export interface IGetProducts {
    category: IGetCategoryProducts;
}
