import { Component } from 'react';

// eslint-disable-next-line max-len
import { Box, Wrapper } from './varaint.style';
import { TypeVariantProps } from './variant.interface';

export default class SizeSelector extends Component<TypeVariantProps> {
    render() {
        const { items, handleChange, selected, name } = this.props;

        return (
            <Wrapper>
                <p>{name}:</p>
                <div>
                    {items.items?.map((item) => (
                        <Box
                            selected={item?.id === selected?.item.id}
                            key={item?.id}
                            onClick={() =>
                                handleChange({
                                    item: {
                                        id: item?.id as string,
                                        value: item?.value as string,
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
