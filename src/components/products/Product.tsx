import { Component } from 'react';
import toast from 'react-hot-toast';
import { ConnectedProps, connect } from 'react-redux';
import { Link } from 'react-router-dom';

import IconCart from 'assets/IconCart';
import { IProduct } from 'shared/types';

import { ProductWrapper } from './Product.style';
import allActions from '@/store/allActions';
import { RootState } from '@/store/store';

type Props = {
    product: IProduct;
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
        const { product, addToCart } = this.props;
        return (
            <ProductWrapper>
                <Link
                    style={{ position: 'relative' }}
                    to={`/product/${product.id}`}
                >
                    <img
                        className="product-image"
                        loading="lazy"
                        src={
                            (product.gallery &&
                                (product.gallery[0] as string)) ||
                            ''
                        }
                        alt={product.name}
                    />
                    {!product.inStock && (
                        <div>
                            <p>out of stock</p>
                        </div>
                    )}
                </Link>
                <p className="title">{product.name}</p>
                <p className="price">{this.getAmount()}</p>
                <button
                    disabled={!product.inStock}
                    onClick={() => {
                        addToCart({ product });
                        toast.success(`${product.name} added to cart`);
                    }}
                >
                    <IconCart />
                </button>
            </ProductWrapper>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    currency: state.cart.currency,
});

const { addToCart } = allActions;

const connector = connect(mapStateToProps, { addToCart });
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Product);
