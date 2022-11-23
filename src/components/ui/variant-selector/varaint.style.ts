import styled from 'styled-components';

type Props = {
    size?: 'big' | 'small';
};

export const Wrapper = styled.div<Props>`
    > p {
        display: block;
        font-size: ${(props) => (props.size === 'small' ? '1.4rem' : '1.8rem')};
    }

    > div {
        display: flex;
        gap: 0.5rem;
    }
`;

export const Box = styled.button<{ selected: boolean; size?: 'big' | 'small' }>`
    font-size: 1.4rem;
    padding: ${(props) => (props.size === 'small' ? '0.5rem' : '2.8rem')};
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => (props.selected ? '#000' : '#fff')};
    color: ${(props) => (props.selected ? '#fff' : '#000')};
`;

export const ColorBox = styled.button<{
    selected: boolean;
    size?: 'big' | 'small';
    color: string;
}>`
    width: ${(props) => (props.size === 'small' ? '1.6rem' : '3.6rem')};
    height: ${(props) => (props.size === 'small' ? '1.6rem' : '3.6rem')};
    background: ${(props) => props.color};
`;

export const ColorBoxContainer = styled.div<{ selected: boolean }>`
    padding: 0.1rem;
    border: ${(props) => (props.selected ? '1px solid green' : 'none')};
    display: flex;
    justify-content: center;
    align-items: center;
`;
