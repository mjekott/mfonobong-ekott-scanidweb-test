import { Component } from 'react';

import { WithRouterProps, withRouter } from 'hoc/withRouter';

import { Item } from './CategoryMenu.style';

type Props = {
    name: string;
    link: string;
} & WithRouterProps;

class CategoryItem extends Component<Props> {
    state = {};

    activeRoute = () => {
        if (
            this.props.location.pathname === '/' &&
            this.props.link === '/all'
        ) {
            return true;
        }
        if (this.props.location.pathname === this.props.link) {
            return true;
        }
        return false;
    };

    render() {
        const { name } = this.props;
        return (
            <Item to={this.props.link} isactive={this.activeRoute() ? 1 : 0}>
                <p>{name}</p>
            </Item>
        );
    }
}

export default withRouter(CategoryItem);
