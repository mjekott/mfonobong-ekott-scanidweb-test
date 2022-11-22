import { Component } from 'react';

import { GetCategories_categories } from 'graphql-types/GetCategories';
import { BackDrop } from 'shared/styles';

import CategoryMenuItem from '../category-menu/CategoryMenuItem';

import { SidebarContainer } from './SideBar.style';

type Props = {
    open: boolean;
    handleClose: () => void;
    categories: GetCategories_categories[];
};

class SideBar extends Component<Props> {
    state = {};

    render() {
        const { open, handleClose, categories } = this.props;

        return open ? (
            <>
                <BackDrop onClick={handleClose} />
                <SidebarContainer
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <div>
                        {categories &&
                            categories.map((item) => (
                                <CategoryMenuItem
                                    key={item.name}
                                    name={item.name || ''}
                                    link={
                                        item.name === 'all'
                                            ? '/'
                                            : `/${item.name}`
                                    }
                                />
                            ))}
                    </div>
                </SidebarContainer>
            </>
        ) : null;
    }
}

export default SideBar;
