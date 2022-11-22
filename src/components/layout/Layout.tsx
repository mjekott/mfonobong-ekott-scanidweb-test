import { Component, ReactNode } from 'react';

import Header from './Header';
import { Container } from './Layout.style';

type Props = {
    children: ReactNode;
};

export default class Layout extends Component<Props> {
    state = {};

    render() {
        const { children } = this.props;
        return (
            <Container>
                <Header />
                <main>{children}</main>
            </Container>
        );
    }
}
