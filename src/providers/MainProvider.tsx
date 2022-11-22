import { Component, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import GraphQlProvider from './grapqhl/GraphqlProvider';
import { ThemeProvider } from './theme';
import Layout from '@/components/layout';
import store from '@/store/store';

interface Props {
    children: ReactNode;
}

export default class MainProvider extends Component<Props> {
    render() {
        return (
            <BrowserRouter>
                <GraphQlProvider>
                    <Provider store={store}>
                        <ThemeProvider>
                            <Layout>{this.props.children}</Layout>
                        </ThemeProvider>
                    </Provider>
                </GraphQlProvider>
            </BrowserRouter>
        );
    }
}
