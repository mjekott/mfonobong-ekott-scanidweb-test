import { Component } from 'react';

import { ChildProps } from '@apollo/client/react/hoc';
import { WithRouterProps, withRouter } from 'hoc/withRouter';
import { IGetProductDetails } from 'shared/types';

import { withProduct } from './withProduct';

// eslint-disable-next-line max-len

type Props = WithRouterProps & ChildProps<{}, IGetProductDetails>;

class ProductDetailScreen extends Component<Props> {
    render() {
        const { data } = this.props;
        if (!data?.product) return null;
        return null;
    }
}

export default withRouter(withProduct(ProductDetailScreen));
