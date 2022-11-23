// eslint-disable-next-line max-len
import { IAttribute } from 'shared/types';

export type TypeSelectedProps = {
    attributeId: string;
    item: {
        id: string;
        value: string;
    };
};

export type TypeVariantProps = {
    items: IAttribute[];
    handleChange: (data: TypeSelectedProps) => void;
    value?: TypeSelectedProps;
    name: string | undefined;
    id: string;
};
