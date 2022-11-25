import styled from 'styled-components';

import { screen } from '@/shared/styles/_var';

export const Container = styled.div`
    max-width: 144rem;
    height: inherit;
    width: 100%;
    margin: 0 auto;
    padding: 0 10rem;

    @media (max-width: ${screen.lg}) {
        padding: 0 1rem;
    }

    main {
        height: 100%;
    }
`;
