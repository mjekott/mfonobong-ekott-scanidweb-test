import { Component } from 'react';

import { ChildProps } from '@apollo/client/react/hoc';
import { WithRouterProps, withRouter } from 'hoc/withRouter';
import { IGetProductDetails } from 'shared/types';

import { withProduct } from './withProduct';
import ProductDetails from '@/components/products/product-details/ProductDetails';
import ErrorDisplay from '@/components/ui/Error/ErrorDisplay';

// eslint-disable-next-line max-len

type Props = WithRouterProps & ChildProps<{}, IGetProductDetails>;

class ProductDetailScreen extends Component<Props> {
    render() {
        const { data } = this.props;

        if (!data?.product)
            return (
                <ErrorDisplay
                    message="No Product found"
                    buttonText="Continue shopping"
                />
            );
        return <ProductDetails product={data.product} />;
    }
}

export default withRouter(withProduct(ProductDetailScreen));
