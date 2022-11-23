import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';
import { WithRouterProps } from 'hoc/withRouter';
import { IGetProductDetails } from 'shared/types';

export const GET_PRODUCT_DETAILS = gql`
    query GetProductDetails($product_id: String!) {
        product(id: $product_id) {
            id
            name
            inStock
            gallery
            category
            brand
            description
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
`;

export const withProduct = graphql<WithRouterProps, IGetProductDetails>(
    GET_PRODUCT_DETAILS,
    {
        options: (props) => ({
            variables: {
                product_id: props.params.slug,
            },
        }),
    },
);
