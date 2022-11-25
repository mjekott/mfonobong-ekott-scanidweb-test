import styled from 'styled-components';

import { screen } from '@/shared/styles/_var';

export const HeaderWrapper = styled.header`
    height: 8rem;
    display: block;
    position: sticky;
    top: 0;
    background: #fff;
    z-index: 10;
`;

export const HeaderNav = styled.nav`
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    @media screen and (max-width: ${screen.lg}) {
        padding-right: 1rem;
    }
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
    @media (min-width: ${screen.lg}) {
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
