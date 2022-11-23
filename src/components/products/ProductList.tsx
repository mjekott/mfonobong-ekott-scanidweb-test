import { Component } from 'react';

import { IProduct } from 'shared/types';

import ProductItem from './Product';
import { ProductListContainer } from './Product.style';

type Props = {
    products: IProduct[];
};

class ProductList extends Component<Props> {
    render() {
        const { products } = this.props;
        return (
            <ProductListContainer>
                {products.length > 0 &&
                    products.map((product) => (
                        <ProductItem key={product.name} product={product} />
                    ))}
            </ProductListContainer>
        );
    }
}

export default ProductList;
