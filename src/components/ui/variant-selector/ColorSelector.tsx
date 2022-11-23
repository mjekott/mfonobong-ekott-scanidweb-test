import { Component } from 'react';

import { ColorBox, ColorBoxContainer, Wrapper } from './varaint.style';
import { TypeVariantProps } from './variant.interface';

export default class ColorSelector extends Component<TypeVariantProps> {
    render() {
        const { items, handleChange, name, value, id } = this.props;

        return (
            <Wrapper>
                <p>{name}:</p>
                <div>
                    {items.map((item) => (
                        <ColorBoxContainer
                            selected={item?.id === value?.item.id}
                            key={item?.id}
                        >
                            <ColorBox
                                color={item?.value}
                                selected={item?.id === value?.item.id}
                                onClick={() =>
                                    handleChange({
                                        attributeId: id,
                                        item: {
                                            id: item.id,
                                            value: item.value,
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
