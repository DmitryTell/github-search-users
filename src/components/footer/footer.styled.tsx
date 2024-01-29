import styled from 'styled-components';


export const FooterContainer = styled.footer`
    width: 100%;
    height: 150px;
    padding-top: 20px;
    padding-bottom: 20px;
    background: #f4f9f6;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

export const FooterTitle = styled.h3`
    font-family: sans-serif;
    color: #3958f3;
    font-size: 20px;
    line-height: 120%;
`;

export const FooterPagination = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const FooterNumber = styled.span`
    font-family: sans-serif;
    color: #3958f3;
    font-size: 18px;
    line-height: 100%;
`;

export const FooterButtonBox = styled.div`
    width: 75px;
    height: 25px;
`;
