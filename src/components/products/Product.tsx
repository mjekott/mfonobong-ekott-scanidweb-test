import { Component } from 'react';
import { Link } from 'react-router-dom';

import IconCart from 'assets/IconCart';
import { GetProducts_category_products } from 'graphql-types/GetProducts';

import { StyledProductItem } from './Product.style';

type Props = {
    product: GetProducts_category_products;
    currency: string;
};

class Product extends Component<Props> {
    state = {};

    getAmount = () => {
        const match = this.props.product.prices.find(
            (item) => item.currency.symbol === this.props.currency,
        );
        return `${this.props.currency}${match?.amount}`;
    };

    render() {
        const { product } = this.props;
        return (
            <StyledProductItem>
                <Link to={'/'}>
                    <img
                        src={
                            (product.gallery &&
                                (product.gallery[0] as string)) ||
                            ''
                        }
                        alt={product.name}
                    />
                </Link>
                <p className="title">{product.name}</p>
                <p className="price">{this.getAmount()}</p>
                <button>
                    <IconCart />
                </button>
            </StyledProductItem>
        );
    }
}

export default Product;
