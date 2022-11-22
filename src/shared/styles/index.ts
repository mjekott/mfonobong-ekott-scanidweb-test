import { FadeIn } from 'shared/animation';
import styled from 'styled-components';

export const BackDrop = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 8rem;
    background: rgba(57, 55, 72, 0.22);
    z-index: 2;
    animation: 0.3s ${FadeIn};
`;

export const TitleHeader = styled.div`
    font-weight: 400;
    font-size: 2.625rem;
    text-transform: capitalize;
    margin-top: 5rem;
    margin-bottom: 6.438rem;
`;
