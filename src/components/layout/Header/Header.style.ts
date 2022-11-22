import { Link } from 'react-router-dom';

import { FadeIn } from 'shared/animation';
import styled from 'styled-components';

export const HeaderWrapper = styled.nav`
    display: flex;
    align-items: center;
    height: 8rem;
    justify-content: space-between;
    position: relative;
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
`;

export const LogoWrapper = styled(Link)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${FadeIn} 1s;
`;
