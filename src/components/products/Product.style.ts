import { FadeIn } from 'shared/animation';
import styled from 'styled-components';

export const ProductListContainer = styled.div`
    display: grid;
    gap: 2.5rem;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    place-items: center;
    padding: 1rem 0;

    @media (min-width: 640px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
`;

export const StyledProductItem = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    position: relative;
    transition: all 0.2s ease-in-out;
    animation: ${FadeIn} 0.75s ease-in-out forwards;

    img {
        width: 100%;
        height: 33.3rem;
        margin-bottom: 1.5rem;
        object-fit: fill;
    }
    img + p {
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
    }
    p {
        font-size: 1.8rem;
        line-height: 160%;
    }

    .title {
        font-weight: 300;
    }

    .price {
        font-family: 500;
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
