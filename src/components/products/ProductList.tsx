import { Component } from 'react';

import { GetProducts_category_products } from 'graphql-types/GetProducts';

import ProductItem from './Product';
import { ProductListContainer } from './Product.style';

type Props = {
    products: GetProducts_category_products[];
};

class ProductList extends Component<Props> {
    render() {
        const { products } = this.props;
        return (
            <ProductListContainer>
                {products.length > 0 &&
                    products.map((product) => (
                        <ProductItem
                            key={product.name}
                            product={product}
                            currency="$"
                        />
                    ))}
            </ProductListContainer>
        );
    }
}

export default ProductList;
