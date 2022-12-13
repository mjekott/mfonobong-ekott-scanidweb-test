import styled from 'styled-components';

export const CartDropDownWrapper = styled.div`
    position: relative;

    > .main {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        > svg {
            fill: black;
        }
        > span {
            position: absolute;
            top: -0.7rem;
            right: -1rem;
            width: 20px;
            height: 20px;
            background: #000;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.2rem;
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
        overflow-y: scroll;
        max-height: 70vh;

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
            margin-bottom: 2rem;
            gap: 5rem;

            .item {
                line-height: 2rem;
                height: auto;
                border: none;
                .left {
                    .title {
                        margin-bottom: 0.5rem;
                        font-size: 1.6rem;
                        line-height: 160%;
                        font-weight: 300;
                        word-wrap: break-word;
                    }
                    .price {
                        font-size: 1.6rem;
                        line-height: 160%;
                        font-weight: 500;
                    }
                }

                .right {
                    > div:first-child {
                        margin-right: 0.5rem;
                        button {
                            width: 2.8rem;
                            height: 2.8rem;
                            > svg {
                                width: 1.4rem;
                                height: 1.4rem;
                                stroke: #1d1f22;
                            }
                        }

                        p {
                            font-size: 1.8rem;
                        }
                    }
                    .imageHolder {
                        height: 15rem;
                        width: 12.1rem;
                    }
                }
                .variant-wrapper {
                    > P {
                        font-size: 1.4rem;
                    }

                    .variantBox {
                        padding: 0.5rem;
                    }

                    .colorBox {
                        width: 1.6rem;
                        height: 1.6rem;
                    }
                }
            }
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
