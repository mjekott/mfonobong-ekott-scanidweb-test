import { Component } from 'react';
import { ConnectedProps, connect } from 'react-redux';
import { Link } from 'react-router-dom';

import IconCart from 'assets/IconCart';
import { RootState } from 'store/store';
import Toggler from 'utils/Toggler';

import CartItem from '../cart/cart-item/CartItem';

import { Wrapper } from './CartPopup.style';
import { getTotal, getTotalQuantity } from '@/store/features/cart/helpers';

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
                                    className="cart hide-scrollbar"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="title">
                                        <p>My Bag</p>
                                        <span>{totalCart} items</span>
                                    </div>
                                    {cartItems.length > 0 && (
                                        <div className="cart-items ">
                                            {cartItems.length > 0 && (
                                                <div className="cart-items">
                                                    {cartItems.map((item) => (
                                                        <CartItem
                                                            item={item}
                                                            key={item.id}
                                                            currency={
                                                                this.props
                                                                    .currency
                                                            }
                                                        />
                                                    ))}
                                                </div>
                                            )}
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
                                    <div
                                        className="checkout"
                                        onClick={handleClose}
                                    >
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
        totalCart: getTotalQuantity(state),
        totalAmount: getTotal(state),
    };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Cart);
