import { FadeIn } from 'shared/animation';
import styled from 'styled-components';

export const BackDrop = styled.div`
    position: fixed;
    top: 8rem;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: hidden;
    z-index: 5;
    background: rgba(57, 55, 72, 0.22);
    animation: 0.3s ${FadeIn};
`;

export const TitleHeader = styled.div`
    font-weight: 400;
    font-size: 2.625rem;
    text-transform: capitalize;
    margin-top: 5rem;
    margin-bottom: 6.438rem;
`;

export const PrimaryButton = styled.button`
    background: ${(props) => props.theme.colors.primary};
    color: #fff;
    height: 4.3rem;
    width: 27.9rem;
    text-transform: uppercase;
    margin-top: 0.4rem;

    &:disabled {
        background: #eeeeee;
        color: rgba(0, 0, 0, 0.6);
        cursor: not-allowed;
    }
`;
