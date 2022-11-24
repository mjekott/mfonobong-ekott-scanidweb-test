import { Component } from 'react';

import { ChildProps, graphql } from '@apollo/client/react/hoc';
import { WithRouterProps, withRouter } from 'hoc/withRouter';
import { TitleHeader } from 'shared/styles';
import { IGetProducts } from 'shared/types';

import { GET_PRODUCTS } from './query';
import ProductList from '@/components/products/ProductList';
import ErrorDisplay from '@/components/ui/Error/ErrorDisplay';

type Props = WithRouterProps & ChildProps<{}, IGetProducts>;

class Home extends Component<Props> {
    state = {};

    render() {
        const { data } = this.props;
        if (data?.loading) return null;
        if (data?.error) {
            <ErrorDisplay message="Opps something went wrong!" route="/" />;
        }

        if (!data?.error && !data?.category) {
            return <ErrorDisplay message="No product found!!" route="/" />;
        }

        return (
            <>
                <TitleHeader>{data?.category?.name}</TitleHeader>
                {data?.category?.products && (
                    <ProductList products={data?.category?.products} />
                )}
            </>
        );
    }
}

export default withRouter(
    graphql<WithRouterProps, IGetProducts>(GET_PRODUCTS, {
        options: (props) => ({
            variables: {
                input: { title: props.params.slug ? props.params.slug : 'all' },
            },
        }),
    })(Home),
);
