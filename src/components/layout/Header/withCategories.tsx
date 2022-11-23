import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';
import { IGetCategories } from 'shared/types';

const GET_CATEGORIES = gql`
    query GetCategories {
        categories {
            name
        }
    }
`;

export const withCategories = graphql<{}, IGetCategories>(GET_CATEGORIES);
