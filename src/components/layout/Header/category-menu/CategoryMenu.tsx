import { Component } from 'react';

import { ICategory } from 'shared/types';

import { CategoryMenuContainer } from './CategoryMenu.style';
import CategoryMenuItem from './CategoryMenuItem';

type Props = {
    categories: ICategory[];
};

export default class CategoryMenu extends Component<Props> {
    public render() {
        const { categories } = this.props;
        return (
            <CategoryMenuContainer>
                {categories &&
                    categories.length > 0 &&
                    categories.map((item) => (
                        <CategoryMenuItem
                            key={item.name}
                            name={item.name || ''}
                            link={item.name === 'all' ? '/' : `/${item.name}`}
                        />
                    ))}
            </CategoryMenuContainer>
        );
    }
}
