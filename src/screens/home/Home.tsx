import { Component } from 'react';

import { ChildProps } from '@apollo/client/react/hoc';
import {
    GetProducts,
    GetProducts_category_products,
} from 'graphql-types/GetProducts';
import { WithRouterProps, withRouter } from 'hoc/withRouter';
import { TitleHeader } from 'shared/styles';

import { withCategoryProducts } from './withProducts';
import ProductList from '@/components/products/ProductList';

type Props = WithRouterProps & ChildProps<{}, GetProducts>;

class Home extends Component<Props> {
    state = {};

    render() {
        const { data } = this.props;
        if (data?.loading) return null;
        return (
            <>
                <TitleHeader>{data?.category?.name}</TitleHeader>
                <ProductList
                    products={
                        data?.category
                            ?.products as GetProducts_category_products[]
                    }
                />
            </>
        );
    }
}

export default withRouter(withCategoryProducts(Home));
