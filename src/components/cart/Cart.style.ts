import styled from 'styled-components';

export const TitleHeader = styled.div`
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 160%;
    text-transform: uppercase;
    margin-top: 8rem;
    margin-bottom: 5.5rem;
`;

export const CartItemsContainer = styled.div`
    border-top: 1px solid #e5e5e5;
    @media (max-width: 720px) {
        .item {
            line-height: 2rem;
            .left {
                .title {
                    font-size: 2.4rem;
                    margin-bottom: 0.5rem;
                }
                .price {
                    font-size: 1.5rem;
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
                    height: 20.8rem;
                    width: 15rem;
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
`;

export const Summary = styled.div`
    font-size: 2.4rem;
    margin-top: 3.2rem;
    margin-bottom: 10rem;

    > table {
        border-spacing: 10px;
        > tbody > tr {
            > td:not(:first-child) {
                font-weight: 700;
            }
        }
    }
    button {
        background: ${(props) => props.theme.colors.primary};
        color: #fff;
        height: 4.3rem;
        width: 27.9rem;
        text-transform: uppercase;
        margin-top: 0.4rem;
    }
`;
