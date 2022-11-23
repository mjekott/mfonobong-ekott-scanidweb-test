import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1440px;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0 1rem;
    position: relative;

    @media (min-width: 1024px) {
        padding: 0 10rem;
    }

    main {
        flex: 1;
    }
`;
