import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1440px;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-right: auto;
    margin-left: auto;
    padding: 0 10rem;
    position: relative;

    @media (max-width: 960px) {
        padding: 0 1rem;
    }

    main {
        flex: 1;
    }
`;
