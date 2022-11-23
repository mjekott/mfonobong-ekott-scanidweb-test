import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
    query GetProducts($input: CategoryInput) {
        category(input: $input) {
            name
            products {
                id
                name
                inStock
                gallery
                category
                brand
                attributes {
                    id
                    name
                    items {
                        id
                        value
                        displayValue
                    }
                }
                prices {
                    currency {
                        symbol
                        label
                    }
                    amount
                }
            }
        }
    }
`;
