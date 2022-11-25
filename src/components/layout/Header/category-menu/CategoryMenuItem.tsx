import { Component } from 'react';
import { Link } from 'react-router-dom';

import { WithRouterProps, withRouter } from 'hoc/withRouter';

import { CategoryItemWrapper } from './CategoryMenu.style';

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
            <CategoryItemWrapper isactive={this.activeRoute() ? 1 : 0}>
                <Link to={this.props.link}>
                    <span>{name}</span>
                </Link>
            </CategoryItemWrapper>
        );
    }
}

export default withRouter(CategoryItem);
