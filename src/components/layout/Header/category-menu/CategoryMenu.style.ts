import { FadeIn } from 'shared/animation';
import styled, { css, keyframes } from 'styled-components';

import { screen } from '@/shared/styles/_var';

const hoverAnimation = keyframes`
 0% { width:0 }
 100% { width:100% }
 `;

export const CategoryMenuContainer = styled.ul`
    display: none;
    text-transform: uppercase;

    > a {
        padding: 0 1.6rem;
    }
    @media (min-width: ${screen.lg}) {
        display: flex;
    }
`;

export const CategoryItemWrapper = styled.li<{ isactive: number }>`
    position: relative;
    cursor: pointer;
    list-style: none;
    animation: ${FadeIn} 1s;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.9rem;
    padding: 0 1.6rem;
    color: ${(props) =>
        props.isactive ? props.theme.colors.primary : props.theme.colors.black};

    ::before {
        content: '';
        position: absolute;
        top: 4.4rem;
        left: 0rem;
        background-color: ${(props) => props.theme.colors.primary};
    }

    ${(props) => {
        return props.isactive
            ? css`
                  ::before {
                      width: 100%;
                      height: 2px;
                  }
                  font-weight: 600;
              `
            : css`
                  :hover {
                      color: ${(props) => props.theme.colors.primary};
                      ::before {
                          width: 100%;
                          height: 2px;
                          animation: ${hoverAnimation} 0.3s;
                      }
                  }
              `;
    }}
`;
