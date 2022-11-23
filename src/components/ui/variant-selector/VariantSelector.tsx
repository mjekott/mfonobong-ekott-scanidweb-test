import { Component } from 'react';

import ColorSelector from './ColorSelector';
import SizeSelector from './SizeSelector';
import { TypeVariantProps } from './variant.interface';

export default class VariantSelector extends Component<TypeVariantProps> {
    state = {};

    getComponent = () => {
        let component = null;
        switch (this.props.name) {
            case 'Color': {
                component = ColorSelector;
                break;
            }
            default: {
                component = SizeSelector;
                break;
            }
        }
        return component;
    };

    render() {
        const Component = this.getComponent();
        return <Component {...this.props} />;
    }
}
