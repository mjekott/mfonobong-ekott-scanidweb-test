import React, { Component, ReactNode } from 'react';

import { Header } from './Header';

type Props = {
    children: ReactNode;
};

export default class Layout extends Component<Props> {
    state = {};

    render() {
        const { children } = this.props;
        return (
            <div>
                <Header />
                <main>{children}</main>
            </div>
        );
    }
}
