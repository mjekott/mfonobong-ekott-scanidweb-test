// eslint-disable-next-line max-len
import { GetProducts_category_products_attributes } from './../../../graphql-types/GetProducts';

export type TypeSelectedProps = {
    item: {
        id: string;
        value: string;
    };
};

export type TypeVariantProps = {
    items: GetProducts_category_products_attributes;
    handleChange: (data: TypeSelectedProps) => void;
    selected: TypeSelectedProps;
    name: string;
};
