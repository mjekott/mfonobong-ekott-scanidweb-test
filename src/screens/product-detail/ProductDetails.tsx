import { Component } from 'react';

import { ChildProps } from '@apollo/client/react/hoc';
import { WithRouterProps, withRouter } from 'hoc/withRouter';
import { IGetProductDetails } from 'shared/types';

import { withProduct } from './withProduct';
import ProductDetails from '@/components/products/product-details/ProductDetails';

// eslint-disable-next-line max-len

type Props = WithRouterProps & ChildProps<{}, IGetProductDetails>;

class ProductDetailScreen extends Component<Props> {
    render() {
        const { data } = this.props;
        if (!data?.product) return null;
        return <ProductDetails product={data.product} />;
    }
}

export default withRouter(withProduct(ProductDetailScreen));
