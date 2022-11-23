import { Link } from 'react-router-dom';

import { FadeIn } from 'shared/animation';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    height: 8rem;
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    background: #fff;
    z-index: 10;
`;

export const HeaderNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
`;

export const HeaderButton = styled.span`
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border: none;
    outline: none;
    color: rgba(0, 0, 0, 0.8);
    background: transparent;
    @media (min-width: 1024px) {
        display: none;
    }
`;

export const RightSide = styled.div`
    display: flex;
    align-items: center;
    > :first-child {
        margin-right: 2.2rem;
    }
`;

export const LogoWrapper = styled(Link)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${FadeIn} 1s;
`;
