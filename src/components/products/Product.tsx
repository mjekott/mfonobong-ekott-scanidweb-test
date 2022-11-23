import { Component } from 'react';
import { ConnectedProps, connect } from 'react-redux';
import { Link } from 'react-router-dom';

import IconCart from 'assets/IconCart';
import { GetProducts_category_products } from 'graphql-types/GetProducts';

import { StyledProductItem } from './Product.style';
import allActions from '@/store/allActions';
import { RootState } from '@/store/store';

type Props = {
    product: GetProducts_category_products;
} & PropsFromRedux;

class Product extends Component<Props> {
    state = {};

    getAmount = () => {
        const match = this.props.product.prices.find(
            (item) => item.currency.symbol === this.props.currency,
        );
        return `${this.props.currency}${match?.amount}`;
    };

    render() {
        const { product, increaseCartQuantity } = this.props;
        return (
            <StyledProductItem>
                <Link style={{ position: 'relative' }} to={'/'}>
                    <img
                        loading="lazy"
                        src={
                            (product.gallery &&
                                (product.gallery[0] as string)) ||
                            ''
                        }
                        alt={product.name}
                    />
                    {!product.inStock && <p>out of stock</p>}
                </Link>
                <p className="title">{product.name}</p>
                <p className="price">{this.getAmount()}</p>
                <button
                    disabled={!product.inStock}
                    onClick={() => {
                        increaseCartQuantity({ product });
                    }}
                >
                    <IconCart />
                </button>
            </StyledProductItem>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    currency: state.cart.currency,
});

const { increaseCartQuantity } = allActions;

const connector = connect(mapStateToProps, { increaseCartQuantity });
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Product);
