import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';
import { GetProducts } from 'graphql-types/GetProducts';
import { WithRouterProps } from 'hoc/withRouter';

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

export const withCategoryProducts = graphql<WithRouterProps, GetProducts>(
    GET_PRODUCTS,
    {
        options: (props) => ({
            variables: {
                input: { title: props.params.slug ? props.params.slug : 'all' },
            },
        }),
    },
);
