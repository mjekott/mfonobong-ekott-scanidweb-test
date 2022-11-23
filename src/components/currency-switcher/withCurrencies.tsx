import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';
import { GetCurrencies } from 'shared/types';

export const GET_CURRENCIES = gql`
    query GetCurrencies {
        currencies {
            label
            symbol
        }
    }
`;

export const withCurrencies = graphql<{}, GetCurrencies>(GET_CURRENCIES);
