import { Component } from 'react';
import { ConnectedProps, connect } from 'react-redux';

import { CartItemsContainer, Summary, TitleHeader } from './Cart.style';
import CartItem from './cart-item/CartItem';
import {
    getTax,
    getTotal,
    getTotalQuantity,
} from '@/store/features/cart/helpers';
import { RootState } from '@/store/store';

type Props = PropsFromRedux;

class Cart extends Component<Props> {
    state = {};

    render() {
        const { cartItems, totalAmount, currency, totalQuantity, tax } =
            this.props;
        return (
            <div>
                <TitleHeader>Cart</TitleHeader>
                <CartItemsContainer>
                    {cartItems.length > 0 && (
                        <div className="cart-items">
                            {cartItems.map((item) => (
                                <CartItem
                                    item={item}
                                    key={item.id}
                                    currency={this.props.currency}
                                />
                            ))}
                        </div>
                    )}
                </CartItemsContainer>

                <Summary>
                    <table>
                        <tbody>
                            <tr>
                                <td>Tax 21%</td>
                                <td>
                                    {currency}
                                    {tax.toFixed(2)}
                                </td>
                            </tr>
                            <tr>
                                <td>Quantity:</td>
                                <td>{totalQuantity}</td>
                            </tr>
                            <tr>
                                <td>Total:</td>
                                <td>
                                    {currency}
                                    {totalAmount.toFixed(2)}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button>order</button>
                </Summary>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        cartItems: state.cart.cart,
        currency: state.cart.currency,
        totalQuantity: getTotalQuantity(state),
        totalAmount: getTotal(state),
        tax: getTax(state),
    };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Cart);
