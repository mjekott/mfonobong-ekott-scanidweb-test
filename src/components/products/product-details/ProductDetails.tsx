import { Component } from 'react';
import toast from 'react-hot-toast';
import { ConnectedProps, connect } from 'react-redux';

import { PrimaryButton } from 'shared/styles';
import { IProduct } from 'shared/types';

import ProductImageSlider from './ProductImageSlider';
import {
    ProductDetailsImageSection,
    ProductDetailsInfoSection,
    ProductDetailsWrapper,
} from './ProuductDetails.style';
import VariantSelector from '@/components/ui/variant-selector/VariantSelector';
// eslint-disable-next-line max-len
import { TypeSelectedProps } from '@/components/ui/variant-selector/variant.interface';
import allActions from '@/store/allActions';
import { SelectedVariant } from '@/store/features/cart/cart.interface';
import { RootState } from '@/store/store';
import { getAmount } from '@/utils/getAmount';

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

    handleVariantChange = (data: TypeSelectedProps) => {
        const { selectedVariants } = this.state;

        // create an empty array to hold variants
        let newVariants: SelectedVariant[] = [];

        // if selected variants already exist and update array
        if (selectedVariants) {
            newVariants = [...selectedVariants];
        }

        // check if a variant with the given attribute id exist
        const index = newVariants.findIndex((item) => {
            return item.attributeId === data.attributeId;
        });

        // if found update that index in the array
        if (index > -1) {
            newVariants[index] = data;
        } else {
            // if not found push new choice to array
            newVariants?.push(data);
        }

        // add the new choice to state
        this.setState({ ...this.state, selectedVariants: newVariants });
    };

    render() {
        const { product, addToCart, currency } = this.props;
        const { name, description, gallery, brand } = product;
        return (
            <ProductDetailsWrapper>
                <ProductDetailsImageSection>
                    <ProductImageSlider images={gallery} name={name} />
                </ProductDetailsImageSection>
                <ProductDetailsInfoSection>
                    <h2>{name}</h2>
                    <p>{brand}</p>
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
                        <span>{getAmount(product, currency)}</span>
                    </div>
                    <PrimaryButton
                        className="addtocart"
                        disabled={!product.inStock}
                        onClick={() => {
                            addToCart({
                                product,
                                selectedVariant: this.state.selectedVariants,
                            });
                            toast.success(`${product.name} added to cart`);
                        }}
                    >
                        {!product.inStock ? 'Out Of Stock' : 'Add to cart'}
                    </PrimaryButton>

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
