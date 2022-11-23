/* eslint-disable max-len */
import { Component } from 'react';
import { ConnectedProps, connect } from 'react-redux';

import VariantSelector from '../ui/variant-selector/VariantSelector';

import {
    Attributes,
    CartAction,
    CartItemLeft,
    CartItemRight,
    CartItemStyled,
} from './CartPopup.style';
import allActions from '@/store/allActions';
import { ICartItem } from '@/store/features/cart/cart.interface';

type Props = PropsFromRedux & { item: ICartItem; currency: string };

class CartItems extends Component<Props> {
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
            <CartItemStyled>
                <CartItemLeft>
                    <div className="info">
                        <h3>{item.product.name}</h3>
                        <p>{this.getAmount()}</p>
                        <Attributes>
                            {item.product.attributes?.map((attribute) => (
                                <VariantSelector
                                    handleChange={(data) => {
                                        updateAttr({
                                            productId: item.product.id,
                                            attributeId:
                                                attribute?.id as string,
                                            item: data.item,
                                        });
                                    }}
                                    selected={{
                                        item: item.selectedAttribute?.find(
                                            (item) =>
                                                item.attributeId ===
                                                attribute?.id,
                                        )?.item as any,
                                    }}
                                    name={attribute?.name as string}
                                    key={attribute?.id as string}
                                    items={attribute as any}
                                />
                            ))}
                        </Attributes>
                    </div>
                    <CartAction>
                        <button
                            onClick={() => {
                                increaseCartQuantity({ product: item.product });
                            }}
                        >
                            +
                        </button>
                        <span>{item.quantity}</span>
                        <button
                            onClick={() => {
                                decreaseCartQuantity({ product: item.product });
                            }}
                        >
                            -
                        </button>
                    </CartAction>
                </CartItemLeft>
                <CartItemRight>
                    <img
                        src={
                            (item.product.gallery &&
                                (item.product.gallery[0] as string)) ||
                            ''
                        }
                        alt={item.product.name}
                    />
                </CartItemRight>
            </CartItemStyled>
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

export default connector(CartItems);
