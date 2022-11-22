import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';
import { GetCurrencies_currencies } from 'graphql-types/GetCurrencies';

export const GET_CURRENCIES = gql`
    query GetCurrencies {
        currencies {
            label
            symbol
        }
    }
`;

export const withCurrencies = graphql<{}, GetCurrencies_currencies>(
    GET_CURRENCIES,
);
