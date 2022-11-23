import { Component, ReactNode } from 'react';

interface IVariable {
    handleNext: () => void;
    handlePrev: () => void;
    handleSelect: (value: number) => void;
    noOfImage: number;
    currentIndex: number;
}

type Props = {
    children: (variable: IVariable) => ReactNode;
    noOfImages: number;
};

type State = {
    currentIndex: number;
    noOfImages: number;
};

export default class ImageSelector extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            currentIndex: 0,
            noOfImages: this.props.noOfImages,
        };
    }

    handleNext = () => {
        if (this.state.currentIndex + 1 === this.state.noOfImages) {
            this.setState({ ...this.state, currentIndex: 0 });
            return;
        }
        this.setState({
            ...this.state,
            currentIndex: this.state.currentIndex + 1,
        });
    };

    handleSelect = (index: number) => {
        if (index >= this.state.noOfImages || index < 0) {
            return;
        }

        this.setState({ ...this.state, currentIndex: index });
    };

    handlePrev = () => {
        if (this.state.currentIndex - 1 < 0) {
            this.setState({
                ...this.state,
                currentIndex: this.state.noOfImages - 1,
            });
            return;
        }
        this.setState({
            ...this.state,
            currentIndex: this.state.currentIndex - 1,
        });
    };

    render() {
        return this.props.children({
            currentIndex: this.state.currentIndex,
            noOfImage: this.state.noOfImages,
            handleNext: this.handleNext,
            handlePrev: this.handlePrev,
            handleSelect: this.handleSelect,
        });
    }
}
