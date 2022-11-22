import { Component } from 'react';
import { ConnectedProps, connect } from 'react-redux';

import { CartItemStyled } from './CartPopup.style';
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
        const { increaseCartQuantity, decreaseCartQuantity, item } = this.props;

        return (
            <CartItemStyled>
                <div className="left">
                    <div className="info">
                        <h3>{item.product.name}</h3>
                        <p>{this.getAmount()}</p>
                    </div>
                    <div className="action">
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
                    </div>
                </div>
                <img
                    src={
                        (item.product.gallery &&
                            (item.product.gallery[0] as string)) ||
                        ''
                    }
                    alt={item.product.name}
                />
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

/* 
{item.product.attributes &&
  item.product.attributes.map((attribute) => {
    if (attribute?.name === "Size") {
      return (
        attribute.items &&
        attribute.items?.map((item, index) => {
          return (
            <li
              onClick={() => {
                updateAttr({
                  productId: this.props.item.product.id,
                  name: "Color",
                  id: item!.id,
                  value: item!.value as string,
                  attributeId: "",
                });
              }}
              key={index}
            >
              {item?.value}
            </li>
          );
        })
      );
    }

    if (attribute?.name === "Color") {
      return (
        attribute.items &&
        attribute.items?.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                updateAttr({
                  productId: this.props.item.product.id,
                  name: "Color",
                  value: item!.value as string,
                  attributeId: attribute.id,
                  id: "",
                });
              }}
              style={{
                width: "5px",
                height: "5px",
                backgroundColor: `${item?.value}`,
              }}
            ></div>
          );
        })
      );
    }
  })} */
