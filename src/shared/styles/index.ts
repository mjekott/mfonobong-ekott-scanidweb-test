import { FadeIn } from 'shared/animation';
import styled from 'styled-components';

export const BackDrop = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 8rem;
    background: #d3d3d7;
    z-index: 2;
    animation: 0.3s ${FadeIn};
`;
