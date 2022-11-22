import { FadeIn } from 'shared/animation';
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
            top: -0.3rem;
            right: -0.5rem;
            width: 1.25rem;
            height: 1.25rem;
            background: #000;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-size: 0.813rem;
            font-weight: 700;
            border-radius: 100%;
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
        background: blue;
        width: 32.5rem;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;

        > .cart-items {
            display: flex;
            flex-direction: column;
            padding: 1rem;
            gap: 1.25rem;
            width: 100%;
            max-height: 50vh;
            overflow-y: auto;
            margin-bottom: 2rem;
            animation: ${FadeIn} 0.5s ease-in-out forwards;
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

export const CartItemStyled = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    height: 19rem;

    justify-content: space-between;

    img {
        height: 100%;
        width: 12.1rem;
        object-fit: fill;
    }

    .left {
        display: flex;
        justify-content: space-between;
        flex: 1;
        margin-right: 0.5rem;
        padding: 0.2rem 0rem;

        > .info {
            h3 {
                font-size: 1.6rem;
                line-height: 160%;
                font-weight: 300;
            }
            p {
                font-size: 1.6rem;
                line-height: 160%;
                font-weight: 500;
            }
        }

        .action {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            > button {
                width: 2.4rem;
                height: 2.4rem;
                border: 1px solid black;
                outline: none;
                background: #fff;
            }
        }
    }
`;
