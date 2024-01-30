import styled from 'styled-components';


export const OrderContainer = styled.div`
    position: absolute;
    top: 235px;
    left: 343px;
    z-index: 5;
    width: 300px;
    height: 150px;
    padding: 20px;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 40%);
    border-radius: 6px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

export const OrderLink = styled.a`
    color: #000;
    opacity: 0.5;
    font-size: 16px;
    line-height: 100%;
    transition: all 0.5s;

    &:hover {
        opacity: 1;
        text-decoration: underline;
    }
`;

export const OrderText = styled.span`
    color: #000;
    font-size: 16px;
    line-height: 100%;
`;
