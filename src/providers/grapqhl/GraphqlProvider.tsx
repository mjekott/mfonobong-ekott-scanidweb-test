import { Component, ReactNode } from 'react';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
});

type Props = {
    children: ReactNode;
};

export default class GraphQlProvider extends Component<Props> {
    render() {
        return (
            <ApolloProvider client={client}>
                {this.props.children}
            </ApolloProvider>
        );
    }
}
