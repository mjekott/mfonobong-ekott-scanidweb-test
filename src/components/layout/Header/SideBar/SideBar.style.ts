import { SlideIn } from 'shared/animation';
import styled from 'styled-components';

export const SidebarContainer = styled.div`
    position: fixed;
    top: 8rem;
    left: 0;
    bottom: 0;
    width: 20rem;
    background: #fff;
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: 0.3s ${SlideIn};

    > div {
        display: flex;
        flex-direction: column;
        gap: 5rem;
        text-transform: capitalize;
    }
`;
