import React, { Component, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from './theme';
import store from '@/store/store';

interface Props {
    children: ReactNode;
}

export default class MainProvider extends Component<Props> {
    render() {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <ThemeProvider>{this.props.children}</ThemeProvider>
                </Provider>
            </BrowserRouter>
        );
    }
}
