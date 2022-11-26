import { Component } from 'react';
import { ConnectedProps, connect } from 'react-redux';

import ErrorDisplay from '../ui/Error/ErrorDisplay';

import {
    CartContainer,
    CartItemsContainer,
    CartSummary,
    CartTitleHeader,
} from './Cart.style';
import CartItem from './cart-item/CartItem';
import { PrimaryButton } from '@/shared/styles';
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

        if (cartItems.length === 0) {
            return (
                <ErrorDisplay
                    message="No item in cart !!"
                    buttonText="Go Shopping"
                />
            );
        }
        return (
            <CartContainer>
                <CartTitleHeader>Cart</CartTitleHeader>
                <CartItemsContainer>
                    {cartItems.length > 0 && (
                        <div className="cart-items">
                            {cartItems.map((item) => (
                                <CartItem
                                    item={item}
                                    key={item.id}
                                    currency={this.props.currency}
                                    showBrand
                                />
                            ))}
                        </div>
                    )}
                </CartItemsContainer>

                <CartSummary>
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
                    <PrimaryButton>order</PrimaryButton>
                </CartSummary>
            </CartContainer>
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
