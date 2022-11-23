import { Component } from 'react';
import { ConnectedProps, connect } from 'react-redux';

import { IProduct } from 'shared/types';

import {
    ProductDetailsImageSection,
    ProductDetailsInfoSection,
} from './ProuductDetials.style';
import allActions from '@/store/allActions';
import { ICartItem } from '@/store/features/cart/cart.interface';
import { RootState } from '@/store/store';

type Props = PropsFromRedux & {
    product: IProduct;
    currency: string;
};

type State = {
    productInCart: ICartItem | null;
};

class ProductDetails extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            productInCart: null,
        };
    }

    componentDidMount() {
        const foundProductInCart = this.props.cart.find(
            (item) => item.product.id === this.props.product.id,
        );
        if (foundProductInCart) {
            this.setState({ productInCart: foundProductInCart });
        }
    }

    render() {
        const { product } = this.props;
        const { name } = product;
        return (
            <div>
                <ProductDetailsImageSection></ProductDetailsImageSection>
                <ProductDetailsInfoSection>
                    <h2>{name}</h2>
                </ProductDetailsInfoSection>
            </div>
        );
    }
}

const { increaseCartQuantity, updateVariant } = allActions;

const mapStateToProps = (state: RootState) => {
    return {
        currency: state.cart.currency,
        cart: state.cart.cart,
    };
};

const connector = connect(mapStateToProps, {
    increaseCartQuantity,
    updateVariant,
});

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ProductDetails);
