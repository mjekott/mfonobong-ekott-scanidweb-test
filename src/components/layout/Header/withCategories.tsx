import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';
import { GetCategories } from 'graphql-types/GetCategories';

const GET_CATEGORIES = gql`
    query GetCategories {
        categories {
            name
        }
    }
`;

export const withCategories = graphql<{}, GetCategories>(GET_CATEGORIES);
