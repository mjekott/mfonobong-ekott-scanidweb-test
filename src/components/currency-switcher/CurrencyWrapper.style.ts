import styled from 'styled-components';

export const CurrencySwitcherWrapper = styled.div`
    position: relative;

    > .currency_main {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        > p {
            font-size: 1.5rem;
            line-height: 160%;
            margin-right: 0.5rem;
        }
    }

    > .currency_list {
        position: absolute;
        top: 200%;
        background: blue;
        width: 114px;
        transform: translateX(-25%);
        background: white;
        z-index: 5;
        box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
        > .currency_list_item {
            display: block;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            height: 45px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;

            :hover {
                background: #eeeeee;
            }
            > span:first-child {
                margin-right: 0.2rem;
            }
        }

        @media (max-width: 700px) {
            transform: translateX(-50%);
        }
    }
`;
