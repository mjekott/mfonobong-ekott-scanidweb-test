import { Component } from 'react';

import { ColorBox, ColorBoxContainer, Wrapper } from './varaint.style';
import { TypeVariantProps } from './variant.interface';

export default class ColorSelector extends Component<TypeVariantProps> {
    componentDidMount() {
        if (this.props.items.id !== 'Color') {
            throw new Error('only accepts attributes with an Id of Color');
        }
    }
    render() {
        const {
            items,
            handleChange,
            selected,
            name,
            size = 'small',
        } = this.props;

        return (
            <Wrapper>
                <p>{name}</p>
                <div style={{ display: 'flex', gap: 5 }}>
                    {items.items?.map((item) => (
                        <ColorBoxContainer
                            selected={item?.id === selected.item.id}
                            key={item?.id}
                        >
                            <ColorBox
                                size={size}
                                color={item?.value as string}
                                selected={item?.id === selected.item.id}
                                onClick={() =>
                                    handleChange({
                                        item: {
                                            id: item?.id as string,
                                            value: item?.value as string,
                                        },
                                    })
                                }
                            />
                        </ColorBoxContainer>
                    ))}
                </div>
            </Wrapper>
        );
    }
}
