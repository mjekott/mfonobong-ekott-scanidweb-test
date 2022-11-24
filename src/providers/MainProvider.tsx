import { Component, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { PersistGate } from 'redux-persist/integration/react';

import GraphQlProvider from './grapqhl/GraphqlProvider';
import { ThemeProvider } from './theme';
import Layout from '@/components/layout';
import store, { persistor } from '@/store/store';

interface Props {
    children: ReactNode;
}

export default class MainProvider extends Component<Props> {
    render() {
        return (
            <BrowserRouter>
                <GraphQlProvider>
                    <Provider store={store}>
                        <PersistGate loading={null} persistor={persistor}>
                            <ThemeProvider>
                                <Toaster
                                    containerStyle={{ fontSize: '1.6rem' }}
                                />
                                <Layout>{this.props.children}</Layout>
                            </ThemeProvider>
                        </PersistGate>
                    </Provider>
                </GraphQlProvider>
            </BrowserRouter>
        );
    }
}
