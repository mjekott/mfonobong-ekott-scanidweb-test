import { Component } from 'react';

import { ChildProps, graphql } from '@apollo/client/react/hoc';
import { GetCategories } from 'graphql-types/GetCategories';

import { GET_CATEGORIES } from './query';

class CategoryMenu extends Component<ChildProps<{}, GetCategories>, {}> {
    public render() {
        return <div></div>;
    }
}

export default graphql<{}, GetCategories>(GET_CATEGORIES)(CategoryMenu);
