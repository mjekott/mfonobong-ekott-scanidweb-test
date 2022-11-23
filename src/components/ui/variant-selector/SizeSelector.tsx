import { Component } from 'react';

// eslint-disable-next-line max-len
import { Box, Wrapper } from './varaint.style';
import { TypeVariantProps } from './variant.interface';

export default class SizeSelector extends Component<TypeVariantProps> {
    render() {
        const { items, handleChange, value, name, id } = this.props;

        return (
            <Wrapper>
                <p>{name}:</p>
                <div>
                    {items.map((item) => (
                        <Box
                            selected={item?.id === value?.item.id}
                            key={item?.id}
                            onClick={() =>
                                handleChange({
                                    attributeId: id,
                                    item: {
                                        id: item.id,
                                        value: item.value,
                                    },
                                })
                            }
                        >
                            {item?.value}
                        </Box>
                    ))}
                </div>
            </Wrapper>
        );
    }
}
