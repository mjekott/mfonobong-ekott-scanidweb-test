import React, { PureComponent, ReactNode } from 'react';

interface IToggler {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: any;
    open: boolean;
    handleOpen: () => void;
    handleClose: () => void;
    toggleOpen: () => void;
}

type Props = {
    children: (variable: IToggler) => ReactNode;
};

export default class Toggler extends PureComponent<Props, { open: boolean }> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private ref: React.RefObject<any>;

    constructor(props: Props) {
        super(props);
        this.state = {
            open: false,
        };
        this.ref = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = (event: MouseEvent) => {
        if (this.ref.current && !this.ref.current.contains(event.target)) {
            this.setState({ ...this.state, open: false });
        }
    };

    handleOpen = () => {
        this.setState({ ...this.state, open: true });
    };

    handleClose = () => {
        this.setState({ ...this.state, open: false });
    };

    toggleOpen = () => {
        this.setState({ ...this.state, open: !this.state.open });
    };

    render() {
        const {
            handleClose,
            handleOpen,
            toggleOpen,
            state: { open },
            ref,
        } = this;
        return this.props.children({
            ref,
            open,
            handleClose,
            handleOpen,
            toggleOpen,
        });
    }
}
