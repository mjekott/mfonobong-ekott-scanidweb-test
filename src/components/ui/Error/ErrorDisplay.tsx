import { Component } from 'react';
import { Link } from 'react-router-dom';

import { PrimaryButton } from 'shared/styles';

import { ErrorContainer, ErrorMessage } from './ErrorDisplay.style';

type Props = {
    message?: string;
    route?: string;
    buttonText?: string;
};

export default class ErrorDisplay extends Component<Props> {
    state = {};

    render() {
        const {
            message = 'Opps somthing went wrong',
            route = '/',
            buttonText = 'Go Home',
        } = this.props;
        return (
            <ErrorContainer>
                <ErrorMessage>{message}</ErrorMessage>
                <Link to={route}>
                    <PrimaryButton>{buttonText}</PrimaryButton>
                </Link>
            </ErrorContainer>
        );
    }
}
