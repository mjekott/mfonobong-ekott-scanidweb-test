import { Component } from 'react';
import { ConnectedProps, connect } from 'react-redux';

import { PrimaryButton } from 'shared/styles';
import { IProduct } from 'shared/types';

import ProductImageSlider from './ProductImageSlider';
import {
    OutOfStock,
    ProductDetailsImageSection,
    ProductDetailsInfoSection,
    ProductDetailsWrapper,
} from './ProuductDetials.style';
import VariantSelector from '@/components/ui/variant-selector/VariantSelector';
import { TypeSelectedProps } from '@/components/ui/variant-selector/variant.interface';
import allActions from '@/store/allActions';
import { SelectedVariant } from '@/store/features/cart/cart.interface';
import { RootState } from '@/store/store';

type Props = PropsFromRedux & {
    product: IProduct;
    currency: string;
};

type State = {
    selectedVariants: SelectedVariant[];
};

class ProductDetails extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedVariants: [],
        };
    }

    getAmount = () => {
        const match = this.props.product.prices.find(
            (item) => item.currency.symbol === this.props.currency,
        );
        return `${this.props.currency}${match?.amount}`;
    };

    handleVariantChange = (data: TypeSelectedProps) => {
        const { selectedVariants } = this.state;

        let newVariants: SelectedVariant[] = [];
        if (selectedVariants) {
            newVariants = [...selectedVariants];
        }
        const index = newVariants.findIndex((item) => {
            return item.attributeId === data.attributeId;
        });

        if (index > -1) {
            newVariants[index] = data;
        } else {
            newVariants?.push(data);
        }

        this.setState({ ...this.state, selectedVariants: newVariants });
    };

    render() {
        const { product, addToCart } = this.props;
        const { name, description, gallery } = product;
        return (
            <ProductDetailsWrapper>
                <ProductDetailsImageSection>
                    <ProductImageSlider images={gallery} name={name} />
                </ProductDetailsImageSection>
                <ProductDetailsInfoSection>
                    <h2>{name}</h2>
                    <div className="variant">
                        {product.attributes.map((attribute) => {
                            const match =
                                this.state.selectedVariants &&
                                this.state.selectedVariants.find(
                                    (variant) =>
                                        variant.attributeId === attribute?.id,
                                );

                            return (
                                <VariantSelector
                                    value={match}
                                    handleChange={this.handleVariantChange}
                                    name={attribute?.name as string}
                                    id={attribute?.id as string}
                                    items={attribute.items}
                                    key={attribute?.id}
                                />
                            );
                        })}
                    </div>

                    <div className="price">
                        <span> Price:</span>
                        <span>{this.getAmount()}</span>
                    </div>
                    <PrimaryButton
                        className="addtocart"
                        disabled={!product.inStock}
                        onClick={() => {
                            addToCart({
                                product,
                                selectedVariant: this.state.selectedVariants,
                            });
                        }}
                    >
                        Add to cart
                    </PrimaryButton>
                    {!product.inStock && <OutOfStock>out of stock</OutOfStock>}
                    <div
                        className="description"
                        dangerouslySetInnerHTML={{
                            __html: description,
                        }}
                    ></div>
                </ProductDetailsInfoSection>
            </ProductDetailsWrapper>
        );
    }
}

const { addToCart, updateVariant } = allActions;

const mapStateToProps = (state: RootState) => {
    return {
        currency: state.cart.currency,
    };
};

const connector = connect(mapStateToProps, {
    addToCart,
    updateVariant,
});

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ProductDetails);
