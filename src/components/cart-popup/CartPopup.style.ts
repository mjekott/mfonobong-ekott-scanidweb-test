import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;

    > div {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: black;
        > svg {
            fill: black;
        }
        > p {
            position: absolute;
            top: -0.7rem;
            right: -1rem;
            width: 2rem;
            height: 2rem;
            background: #000;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.4rem;
            font-weight: 700;
            border-radius: 50%;
        }
    }

    .backdrop {
        position: fixed;
        top: 7.6rem;
        left: 0;
        width: 100%;
        height: 100%;
        overflow-y: hidden;
        z-index: 5;
        background: rgba(57, 55, 72, 0.22);
    }

    .cart {
        position: absolute;
        top: 200%;
        right: -1rem;
        width: 32.5rem;
        background: #fff;
        z-index: 5;
        display: flex;
        flex-direction: column;
        max-height: 67.7rem;

        > .title {
            width: 100%;
            display: flex;
            padding: 1rem;
            font-size: 1.6rem;
            margin-top: 3rem;
            > p {
                font-weight: 700;
                margin-right: 1rem;
            }
        }

        > .cart-items {
            display: flex;
            flex-direction: column;
            padding: 1rem;
            width: 100%;
            overflow-y: auto;
            height: auto;
            margin-bottom: 2rem;
        }

        .amount {
            display: flex;
            justify-content: space-between;
            padding: 1rem;
            align-items: center;
            width: 100%;

            > p {
                font-size: 1.6rem;
                font-weight: 500;
            }
            > p:last-child {
                font-weight: 700;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }

        .checkout {
            display: flex;
            justify-content: space-between;
            padding: 1rem;
            align-items: center;
            width: 100%;
            > a {
                flex-wrap: nowrap;
                display: flex;
                justify-content: center;
                align-items: center;
                outline: none;
                border: none;
                font-size: 0.875rem;
                text-transform: uppercase;
                text-decoration: none;
                text-align: center;
                font-size: 1.4rem;
                height: 4.3rem;
                width: 14rem;
                cursor: pointer;
            }
            > a:first-child {
                margin-right: 0.75rem;
                background: transparent;
                border: 1px solid black;
                color: #000;
            }
            > a:last-child {
                background: ${(props) => props.theme.colors.primary};
                color: #fff;
            }
        }
    }
`;

export const CartContainer = styled.div`
    position: absolute;
    top: 500%;
    right: -1rem;
    width: 32.5rem;
    background: #fff;
    z-index: 5;
    display: flex;
    flex-direction: column;
    max-height: 67.7rem;

    > .title {
        width: 100%;
        display: flex;
        padding: 1rem;
        font-size: 1.6rem;
        > p {
            font-weight: 700;
            margin-right: 1rem;
        }
    }

    > .cart-items {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 100%;
        overflow-y: auto;
        height: auto;
        margin-bottom: 2rem;
        gap: 4rem;
    }

    .amount {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        align-items: center;
        width: 100%;

        > p {
            font-size: 1.6rem;
            font-weight: 500;
        }
        > p:last-child {
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .checkout {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        align-items: center;
        width: 100%;
        > a {
            flex-wrap: nowrap;
            display: flex;
            justify-content: center;
            align-items: center;
            outline: none;
            border: none;
            font-size: 0.875rem;
            text-transform: uppercase;
            text-decoration: none;
            text-align: center;
            font-size: 1.4rem;
            height: 4.3rem;
            width: 14rem;
            cursor: pointer;
        }
        > a:first-child {
            margin-right: 0.75rem;
            background: transparent;
            border: 1px solid black;
            color: #000;
        }
        > a:last-child {
            background: ${(props) => props.theme.colors.primary};
            color: #fff;
        }
    }
`;

export const CartItemStyled = styled.div`
    width: 100%;
    display: flex;
    max-height: 25rem;
    height: auto;
    justify-content: space-between;
    margin-top: 4rem;

    img {
        height: 100%;
        width: 12.1rem;
    }
`;

export const CartItemLeft = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1;
    margin-right: 0.5rem;
    padding: 0.2rem 0rem;

    > .info {
        display: flex;
        flex-direction: column;
        h3 {
            font-size: 1.6rem;
            line-height: 160%;
            font-weight: 300;
            word-wrap: break-word;
        }
        p {
            font-size: 1.6rem;
            line-height: 160%;
            font-weight: 500;
        }
    }
`;
export const CartItemRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12.1rem;
    > img {
        height: 100%;
        width: 100%;
    }
`;

export const CartAction = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 1rem;
    > button {
        width: 2.4rem;
        height: 2.4rem;
        border: 1px solid black;
        outline: none;
        background: #fff;
    }
    > span {
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 160%;
    }
`;

export const Attributes = styled.div`
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`;
