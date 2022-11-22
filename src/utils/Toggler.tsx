import React, { PureComponent, ReactNode } from 'react';

interface IToggler {
    ref: any;
    open: boolean;
    handleOpen: () => void;
    handleClose: () => void;
}

type Props = {
    children: (variable: IToggler) => ReactNode;
};

export default class Toggler extends PureComponent<Props, { open: boolean }> {
    private divRef: React.RefObject<any>;

    constructor(props: Props) {
        super(props);
        this.state = {
            open: false,
        };
        this.divRef = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = (event: MouseEvent) => {
        if (
            this.divRef.current &&
            !this.divRef.current.contains(event.target)
        ) {
            this.setState({ ...this.state, open: false });
        }
    };

    handleOpen = () => {
        this.setState({ ...this.state, open: true });
    };

    handleClose = () => {
        this.setState({ ...this.state, open: false });
    };

    render() {
        console.log(this.state.open);
        return this.props.children({
            ref: this.divRef,
            open: this.state.open,
            handleClose: this.handleClose,
            handleOpen: this.handleOpen,
        });
    }
}
