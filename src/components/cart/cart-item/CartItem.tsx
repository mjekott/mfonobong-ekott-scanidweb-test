/* eslint-disable max-len */
import { Component } from 'react';
import { ConnectedProps, connect } from 'react-redux';

import ImageSelector from 'utils/ImageSelector';

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
import VariantSelector from '@/components/ui/variant-selector/VariantSelector';
import allActions from '@/store/allActions';
import { ICartItem } from '@/store/features/cart/cart.interface';

type Props = PropsFromRedux & { item: ICartItem; currency: string };

class CartItem extends Component<Props> {
    getAmount = () => {
        const match = this.props.item.product.prices.find(
            (item) => item.currency.symbol === this.props.currency,
        );
        return `${this.props.currency}${match?.amount}`;
    };

    render() {
        const { increaseCartQuantity, decreaseCartQuantity, updateAttr, item } =
            this.props;

        return (
            <Item>
                <ItemLeft>
                    <ItemHeader>{item.product.name}</ItemHeader>
                    <ItemPrice>{this.getAmount()}</ItemPrice>
                    <ItemLeftVariant>
                        {item.product.attributes?.map((attribute) => (
                            <VariantSelector
                                handleChange={(data) => {
                                    updateAttr({
                                        productId: item.product.id,
                                        attributeId: attribute?.id as string,
                                        item: data.item,
                                    });
                                }}
                                selected={{
                                    item: item.selectedAttribute?.find(
                                        (item) =>
                                            item.attributeId === attribute?.id,
                                    )?.item as any,
                                }}
                                name={attribute?.name as string}
                                key={attribute?.id as string}
                                items={attribute as any}
                            />
                        ))}
                    </ItemLeftVariant>
                </ItemLeft>
                <ItemRight>
                    <div>
                        <button
                            onClick={() => {
                                increaseCartQuantity({ product: item.product });
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                />
                            </svg>
                        </button>
                        <p>{item.quantity}</p>
                        <button
                            onClick={() => {
                                decreaseCartQuantity({ product: item.product });
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 12h-15"
                                />
                            </svg>
                        </button>
                    </div>
                    <ItemRightImage>
                        {/* schema has a null condition  */}
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
                                        src={
                                            (item.product.gallery &&
                                                (item.product.gallery[
                                                    currentIndex
                                                ] as string)) ||
                                            ''
                                        }
                                        alt={item.product.name}
                                    />
                                    {noOfImage > 1 && (
                                        <Controls>
                                            <button onClick={handlePrev}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15.75 19.5L8.25 12l7.5-7.5"
                                                    />
                                                </svg>
                                            </button>
                                            <button onClick={handleNext}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                                    />
                                                </svg>
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

const { increaseCartQuantity, decreaseCartQuantity, updateAttr } = allActions;
const connector = connect(undefined, {
    increaseCartQuantity,
    decreaseCartQuantity,
    updateAttr,
});

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(CartItem);
