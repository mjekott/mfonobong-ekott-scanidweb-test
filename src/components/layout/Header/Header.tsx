import { Component } from 'react';
import { Link } from 'react-router-dom';

import { ChildProps } from '@apollo/client/react/hoc';
import { IGetCategories } from 'shared/types';

import {
    HeaderButton,
    HeaderNav,
    HeaderWrapper,
    RightSide,
} from './Header.style';
import SideBar from './SideBar/SideBar';
import CategoryMenu from './category-menu/CategoryMenu';
import { withCategories } from './withCategories';
import { Logo } from '@/assets/Logo';
import CartPopup from '@/components/cart-popup/CartPopup';
import CurrencySwitcher from '@/components/currency-switcher/CurrencySwitcher';

class Header extends Component<ChildProps<{}, IGetCategories>, {}> {
    state = {
        open: false,
    };

    openSidebar = () => {
        this.setState({ ...this.state, open: true });
    };

    closeSidebar = () => {
        this.setState({ ...this.state, open: false });
    };
    toggleSidebar = () => {
        this.setState({ ...this.state, open: !this.state.open });
    };

    render() {
        const { open } = this.state;
        const { data } = this.props;
        return (
            <>
                <HeaderWrapper>
                    <HeaderNav>
                        <HeaderButton onClick={this.toggleSidebar}>
                            {!open ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        // eslint-disable-next-line max-len
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </HeaderButton>
                        <CategoryMenu categories={data?.categories || []} />
                        <Link to="/">
                            <Logo />
                        </Link>
                        <RightSide>
                            <CurrencySwitcher />
                            <CartPopup />
                        </RightSide>
                    </HeaderNav>
                </HeaderWrapper>
                <SideBar
                    handleClose={this.closeSidebar}
                    open={open}
                    categories={data?.categories || []}
                />
            </>
        );
    }
}

export default withCategories(Header);
