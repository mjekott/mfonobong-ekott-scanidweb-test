import { Link } from 'react-router-dom';

import { FadeIn } from 'shared/animation';
import styled, { css, keyframes } from 'styled-components';

const hoverAnimation = keyframes`
 0% { width:0 }
 100% { width:100% }
 `;

export const CategoryMenuContainer = styled.ul`
    display: none;
    text-transform: uppercase;

    > a:not(:first-child) {
        margin-left: 1.25rem;
    }
    @media (min-width: 1024px) {
        display: flex;
    }
`;

export const Item = styled(Link)<{ isactive: number }>`
    position: relative;
    display: flex;
    cursor: pointer;
    justify-items: center;
    animation: ${FadeIn} 1s;
    font-size: 1.6rem;
    color: ${(props) =>
        props.isactive ? props.theme.colors.primary : props.theme.colors.black};

    > P {
        text-align: center;
        padding: 0 1rem;
        width: 100%;
    }

    ::before {
        content: '';
        position: absolute;
        top: 4.4rem;
        background-color: ${(props) => props.theme.colors.primary};
    }

    ${(props) => {
        return props.isactive
            ? css`
                  ::before {
                      width: 100%;
                      height: 2px;
                  }
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
