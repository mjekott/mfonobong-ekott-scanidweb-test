/* eslint-disable max-len */
import { Component } from 'react';
import { ConnectedProps, connect } from 'react-redux';

import {
    Controls,
    Item,
    ItemHeader,
    ItemLeft,
    ItemLeftVariant,
    ItemPrice,
    ItemRight,
    ItemRightImage,
} from './Cartitem.style';
import IconMinus from '@/assets/IconMinus';
import IconNext from '@/assets/IconNext';
import IconPlus from '@/assets/IconPlus';
import IconPrev from '@/assets/IconPrev';
import VariantSelector from '@/components/ui/variant-selector/VariantSelector';
import { TypeSelectedProps } from '@/components/ui/variant-selector/variant.interface';
import allActions from '@/store/allActions';
import {
    ICartItem,
    SelectedVariant,
} from '@/store/features/cart/cart.interface';
import ImageSelector from '@/utils/ImageSelector';
import { getAmount } from '@/utils/getAmount';

type Props = PropsFromRedux & {
    item: ICartItem;
    currency: string;
    showBrand?: boolean;
};

class CartItem extends Component<Props> {
    /* Handle product variant update */
    handleVariantChange = (data: TypeSelectedProps) => {
        const { item, updateVariant } = this.props;

        //create an empty variant arrray
        let newVariants: SelectedVariant[] = [];

        // check if variant exist in cart and copy to new array
        if (item.selectedVariants) {
            newVariants = [...item.selectedVariants];
        }

        // find variant index with particular attribute id
        const index = newVariants.findIndex((item) => {
            return item.attributeId === data.attributeId;
        });

        // if index is found,update array with new choice or push new choice to array
        if (index > -1) {
            newVariants[index] = data;
        } else {
            newVariants?.push(data);
        }

        // update variant in the store
        updateVariant({
            cartId: item.id,
            selectedVariant: newVariants,
        });
    };

    render() {
        const {
            increaseCartQuantity,
            decreaseCartQuantity,
            showBrand,
            currency,
            item,
        } = this.props;

        return (
            <Item>
                <ItemLeft>
                    <ItemHeader>{item.product.name}</ItemHeader>
                    {showBrand && <p>{item.product.brand}</p>}
                    <ItemPrice>{getAmount(item.product, currency)}</ItemPrice>
                    <ItemLeftVariant>
                        {item.product.attributes.map((attribute) => {
                            const match =
                                item.selectedVariants &&
                                item.selectedVariants.find(
                                    (variant) =>
                                        variant.attributeId === attribute?.id,
                                );

                            return (
                                <VariantSelector
                                    value={match}
                                    handleChange={this.handleVariantChange}
                                    name={attribute?.name as string}
                                    id={attribute?.id as string}
                                    items={attribute.items}
                                    key={attribute?.id}
                                />
                            );
                        })}
                    </ItemLeftVariant>
                </ItemLeft>
                <ItemRight>
                    <div>
                        <button
                            onClick={() => {
                                increaseCartQuantity({ cartId: item.id });
                            }}
                        >
                            <IconPlus />
                        </button>
                        <p>{item.quantity}</p>
                        <button
                            onClick={() => {
                                decreaseCartQuantity({ cartId: item.id });
                            }}
                        >
                            <IconMinus />
                        </button>
                    </div>
                    <ItemRightImage>
                        <ImageSelector
                            noOfImages={
                                item.product.gallery
                                    ? item.product.gallery.length
                                    : 1
                            }
                        >
                            {({
                                currentIndex,
                                handleNext,
                                handlePrev,
                                noOfImage,
                            }) => (
                                <>
                                    <img
                                        loading="lazy"
                                        src={item.product.gallery[currentIndex]}
                                        alt={item.product.name}
                                    />
                                    {noOfImage > 1 && (
                                        <Controls>
                                            <button onClick={handlePrev}>
                                                <IconPrev />
                                            </button>
                                            <button onClick={handleNext}>
                                                <IconNext />
                                            </button>
                                        </Controls>
                                    )}
                                </>
                            )}
                        </ImageSelector>
                    </ItemRightImage>
                </ItemRight>
            </Item>
        );
    }
}

const { increaseCartQuantity, decreaseCartQuantity, updateVariant } =
    allActions;
const connector = connect(undefined, {
    increaseCartQuantity,
    decreaseCartQuantity,
    updateVariant,
});

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(CartItem);
