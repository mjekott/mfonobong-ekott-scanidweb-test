/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CategoryInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetProducts
// ====================================================

export interface GetProducts_category_products_attributes_items {
  __typename: "Attribute";
  id: string;
  value: string | null;
  displayValue: string | null;
}

export interface GetProducts_category_products_attributes {
  __typename: "AttributeSet";
  id: string;
  name: string | null;
  items: (GetProducts_category_products_attributes_items | null)[] | null;
}

export interface GetProducts_category_products_prices_currency {
  __typename: "Currency";
  symbol: string;
  label: string;
}

export interface GetProducts_category_products_prices {
  __typename: "Price";
  currency: GetProducts_category_products_prices_currency;
  amount: number;
}

export interface GetProducts_category_products {
  __typename: "Product";
  id: string;
  name: string;
  inStock: boolean | null;
  gallery: (string | null)[] | null;
  category: string;
  brand: string;
  attributes: (GetProducts_category_products_attributes | null)[] | null;
  prices: GetProducts_category_products_prices[];
}

export interface GetProducts_category {
  __typename: "Category";
  name: string | null;
  products: (GetProducts_category_products | null)[];
}

export interface GetProducts {
  category: GetProducts_category | null;
}

export interface GetProductsVariables {
  input?: CategoryInput | null;
}
