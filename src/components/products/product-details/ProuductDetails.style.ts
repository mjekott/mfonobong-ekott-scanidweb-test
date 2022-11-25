import styled from 'styled-components';

import { screen } from '@/shared/styles/_var';

export const ProductDetailsWrapper = styled.div`
    display: flex;
    padding: 8.2rem 0;
    gap: 9.3rem;
    @media screen and (max-width: ${screen.lg}) {
        flex-direction: column;
        padding: 1rem 0;
    }
`;

export const ProductDetailsImageSection = styled.div`
    width: 100%;
`;

export const ImageSlide = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4rem;

    @media screen and (max-width: ${screen.lg}) {
        flex-direction: column;
        gap: 2rem;
        > div:first-child {
            order: 2;
        }
    }
`;

export const OtherImages = styled.div`
    display: flex;
    flex-direction: column;
    overflow-x: scroll;
    gap: 4rem;
    overflow-y: scroll;
    max-height: 511px;
    width: auto;

    > div {
        flex-shrink: 0;
        cursor: pointer;

        img {
            width: 80px;
            height: 80px;
            cursor: pointer;
            object-fit: fill;
        }
    }

    @media screen and (max-width: ${screen.lg}) {
        flex-direction: row;
        overflow-x: scroll;
        justify-content: center;
        align-items: flex-start;
    }
`;

export const PreviewImage = styled.div`
    overflow: hidden;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    > img {
        object-fit: fill;
        max-width: 610px;
        width: 100%;
        height: 511px;
    }
`;

export const ProductDetailsInfoSection = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 160%;
    width: 100%;

    .variant {
        display: flex;
        flex-direction: column;
        gap: 2.8rem;
    }

    .variant-wrapper {
        > div {
            gap: 1.2rem;
        }
        > p {
            font-size: 1.8rem;
        }
    }
    h2,
    p {
        font-size: 3rem;
        line-height: 2.7rem;
    }
    h2 {
        font-weight: 600;
        margin-bottom: 1.6rem;
    }
    > p {
        font-weight: 400;
        margin-bottom: 4.3rem;
    }
    @media screen and (min-width: ${screen.lg}) {
        width: 24.3%;
        margin-right: 13%;
    }

    > .price {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        font-weight: 700;
        font-size: 1.8rem;
        > span:first-child {
            margin-bottom: 1rem;
            margin-top: 3.6rem;
        }
    }

    > .description {
        font-size: 1.6rem;
        font-weight: 400;
        margin-top: 4rem;
        font-family: 'Roboto', sans-serif;

        > * {
            line-height: 159.96%;
        }
    }
    .variantBox {
        width: 10rem;
    }

    .addtocart {
        width: 100%;
        margin-top: 2rem;
    }
`;
