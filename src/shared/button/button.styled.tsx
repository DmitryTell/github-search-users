import styled from 'styled-components';


export const Button = styled.button`
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 40%);
    border-radius: 6px;
    background: transparent;
    font-size: 20px;
    opacity: 0.6;
    transition: all 0.5s;

    &:hover {
        opacity: 1;
        border: 1px solid #000;
    }
`;
