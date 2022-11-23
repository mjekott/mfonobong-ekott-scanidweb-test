import styled from 'styled-components';

type Props = {
    size?: 'big' | 'small';
};

export const Wrapper = styled.div.attrs({
    className: 'variant-wrapper',
})<Props>`
    > p {
        display: block;
        font-size: 1.8rem;
        font-weight: ${(props) => (props.size === 'small' ? 400 : 700)};
        margin-bottom: 0.8rem;
    }

    > div {
        display: flex;
        gap: 0.5rem;
    }
`;

export const Box = styled.button.attrs({ className: 'variantBox' })<{
    selected: boolean;
}>`
    font-size: 1.4rem;
    padding: 1.2rem;
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => (props.selected ? '#000' : '#fff')};
    color: ${(props) => (props.selected ? '#fff' : '#000')};
`;

export const ColorBox = styled.button.attrs({ className: 'colorBox' })<{
    selected: boolean;
    color: string;
}>`
    width: 3.6rem;
    height: 3.6rem;
    background: ${(props) => props.color};
`;

export const ColorBoxContainer = styled.div<{ selected: boolean }>`
    padding: 0.1rem;
    border: ${(props) => (props.selected ? '1px solid green' : 'none')};
    display: flex;
    justify-content: center;
    align-items: center;
`;
