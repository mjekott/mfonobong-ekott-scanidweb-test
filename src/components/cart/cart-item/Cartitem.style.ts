import styled from 'styled-components';

export const CartItemWrapper = styled.div.attrs({ className: 'item' })`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e5e5e5;
    padding: 2.4rem 0;
`;

export const CartItemLeft = styled.div.attrs({ className: 'left' })`
    display: flex;
    flex-direction: column;
`;

export const CartItemHeader = styled.h3.attrs({ className: 'title' })`
    font-size: 3rem;
    font-weight: 600;
    line-height: 2.7rem;
    margin-bottom: 1.6rem;

    + p {
        font-size: 3rem;
        font-weight: 400;
        line-height: 2.7rem;
        margin-bottom: 1.6rem;

        + p {
            font-weight: 700;
        }
    }
`;

export const CartItemPrice = styled.p.attrs({ className: 'price' })`
    font-size: 2.4rem;
    line-height: 2.4rem;
    font-weight: 500;
`;

export const CartItemVariant = styled.div`
    margin-top: auto;
    > div {
        margin-top: 1rem;
    }
`;

export const CartItemRight = styled.div.attrs({ className: 'right' })`
    display: flex;
    > div:first-child {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-right: 2.4rem;

        > button {
            width: 4.5rem;
            height: 4.5rem;
            border: 1px solid #000;
            background: #fff;
            > svg {
                width: 2rem;
                height: 2rem;
                stroke: #1d1f22;
            }
        }

        > p {
            font-size: 2.4rem;
            line-height: 160%;
        }
    }
`;

export const CartItemRightImage = styled.div.attrs({
    className: 'imageHolder',
})`
    width: 20rem;
    height: 28.8rem;
    position: relative;
    > img {
        object-fit: contain;
        object-position: center;
        width: 100%;
        height: 100%;
    }
`;

export const CartItemRightImageControls = styled.div.attrs({
    className: 'slider-control',
})`
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    display: flex;
    gap: 0.5rem;

    button {
        background: rgba(0, 0, 0, 0.73);
        color: white;
        stroke: white;
        width: 2.4rem;
        height: 2.4rem;
    }
`;
