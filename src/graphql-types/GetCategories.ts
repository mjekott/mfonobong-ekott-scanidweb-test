/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCategories
// ====================================================

export interface GetCategories_categories {
  __typename: "Category";
  name: string | null;
}

export interface GetCategories {
  categories: (GetCategories_categories | null)[] | null;
}
