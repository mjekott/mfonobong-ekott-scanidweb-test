import styled from 'styled-components';

export const ProductDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    gap: 8rem;
    @media screen and (min-width: 700px) {
        flex-direction: row;
        padding: 8.2rem 0;
    }
`;

export const ProductDetailsImageSection = styled.div`
    width: 100%;
    @media screen and (min-width: 700px) {
        width: 65%;
    }
`;

export const ProductDetailsInfoSection = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
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
    }
    h2 {
        font-size: 3rem;
        font-weight: 400;
        margin-bottom: 4rem;
    }
    @media screen and (min-width: 700px) {
        width: 35%;
        h2 {
            margin-bottom: 6.9rem;
        }
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

    .addtocart {
        margin-top: 2rem;
        width: 100%;
    }
`;

export const ImageSlide = styled.div`
    display: flex;
    flex-direction: column;

    > div:first-child {
        order: 2;
        margin-top: 0.5rem;
    }
    @media screen and (min-width: 700px) {
        flex-direction: row;
        > div:first-child {
            order: -1;
        }
    }
`;

export const OtherImages = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    gap: 4rem;
    margin-right: 4rem;

    padding: 2rem;
    @media screen and (min-width: 700px) {
        flex-direction: column;
        max-height: 51rem;
        overflow-y: scroll;
    }
    > div {
        width: 8rem;
        height: 8rem;
        flex-shrink: 0;
        cursor: pointer;

        > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;

export const PreviewImage = styled.div`
    width: 100%;
    height: 51rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    > img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }

    @media screen and (min-width: 700px) {
        flex-direction: column;
    }
    > div {
        width: 8rem;
        height: 8rem;
        flex-shrink: 0;
        cursor: pointer;

        > img {
            max-width: 61rem;
            max-height: 51rem;
        }
    }
`;

export const OutOfStock = styled.div`
    font-size: 1.3rem;
    color: red;
    margin-top: 0.8rem;
    text-transform: capitalize;
`;
