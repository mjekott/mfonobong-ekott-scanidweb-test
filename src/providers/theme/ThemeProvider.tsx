import { Component, ReactNode } from 'react';

import { ThemeProvider } from 'styled-components';

import theme from './theme';

type Props = {
    children: ReactNode;
};

export default class Provider extends Component<Props> {
    render() {
        return (
            <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
        );
    }
}
