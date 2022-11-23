import { Component } from 'react';
import { ConnectedProps, connect } from 'react-redux';
import { Link } from 'react-router-dom';

import IconCart from 'assets/IconCart';
import { RootState } from 'store/store';
import Toggler from 'utils/Toggler';

import { Wrapper } from './CartPopup.style';
import CartPopupItem from './CartPopupItem';

type Props = PropsFromRedux;

class Cart extends Component<Props> {
    render() {
        const { totalCart, cartItems, totalAmount, currency } = this.props;

        return (
            <Toggler>
                {({ ref, open, handleOpen, handleClose }) => (
                    <Wrapper
                        ref={ref}
                        onClick={() => {
                            if (!open) {
                                handleOpen();
                            } else {
                                handleClose();
                            }
                        }}
                    >
                        <div>
                            <IconCart />
                            {cartItems.length > 0 && <p>{totalCart}</p>}
                        </div>
                        {open && (
                            <>
                                <div
                                    className="backdrop"
                                    onClick={handleClose}
                                ></div>
                                <div
                                    className="cart"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="title">
                                        <p>My Bag</p>
                                        <span>{totalCart} items</span>
                                    </div>
                                    {cartItems.length > 0 && (
                                        <div className="cart-items">
                                            {cartItems.map((item) => (
                                                <CartPopupItem
                                                    item={item}
                                                    key={item.product.id}
                                                    currency={
                                                        this.props.currency
                                                    }
                                                />
                                            ))}
                                        </div>
                                    )}
                                    <div className="amount">
                                        <p>Total</p>
                                        <p>
                                            <span> {currency}</span>
                                            <span>
                                                {' '}
                                                {totalAmount.toFixed(2)}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="checkout">
                                        <Link to="/cart">View bag</Link>
                                        <Link to="/cart">Check out</Link>
                                    </div>
                                </div>
                            </>
                        )}
                    </Wrapper>
                )}
            </Toggler>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        cartItems: state.cart.cart,
        currency: state.cart.currency,
        totalCart: state.cart.cart.reduce(
            (acc, curr) => acc + curr.quantity,
            0,
        ),
        totalAmount: state.cart.cart.reduce((acc, curr) => {
            let amount = 0;
            const price = curr.product.prices.find(
                (item) => item.currency.symbol === state.cart.currency,
            );
            if (price) {
                amount = price.amount;
            }
            return acc + amount * curr.quantity;
        }, 0),
    };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Cart);
