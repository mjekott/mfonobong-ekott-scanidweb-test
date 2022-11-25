import { FadeIn } from 'shared/animation';
import styled from 'styled-components';

import { screen } from '@/shared/styles/_var';

export const ProductListContainer = styled.div`
    display: grid;
    grid-gap: 4rem;
    @media screen and (min-width: ${screen.sm}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: ${screen.lg}) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const StyledProductItem = styled.div`
    padding: 1.6rem;
    position: relative;
    transition: all 0.2s ease-in-out;
    animation: ${FadeIn} 0.75s ease-in-out forwards;

    img {
        display: block;
        width: 100%;
        height: 100%;
        max-height: 330px;
        margin-bottom: 1.5rem;
        object-fit: fill;
    }
    img + div {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.4rem;
        line-height: 160%;
        color: #8d8f9a;
        text-transform: uppercase;
        background: rgba(255, 255, 255, 0.7);
    }
    p {
        font-size: 1.8rem;
        line-height: 160%;
    }

    .title {
        font-weight: 300;
    }

    .price {
        font-weight: 500;
    }
    > button {
        position: absolute;
        display: none;
        right: 4rem;
        bottom: 5.8rem;
        width: 5.2rem;
        height: 5.2rem;
        outline: none;
        border: none;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease-in-out;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0px 4px 11px rgba(29, 31, 34, 0.1);
        background: ${(props) => props.theme.colors.primary};
        > svg {
            fill: #fff;
        }

        :active {
            transform: scale(0.75);
        }
    }

    :hover {
        > button {
            display: flex;

            :disabled {
                display: none;
            }
        }
        box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    }
`;
