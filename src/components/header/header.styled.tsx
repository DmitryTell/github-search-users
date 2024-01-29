import styled from 'styled-components';


export const HeaderContainer = styled.header`
    width: 100%;
    padding-top: 25px;
    padding-bottom: 25px;
    background: #f4f9f6;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 15px;
`;

export const HeaderTop = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const HeaderTitle = styled.h1`
    font-size: 40px;
    line-height: 220%;

    @media (max-width: 475px) {
        font-size: 24px;
        line-height: 120%;
    }
`;

export const HeaderSearch = styled.nav`
    width: 800px;
    display: flex;
    flex-flow: column;
    gap: 10px;

    @media (max-width: 821px) {
        width: 100%;
        padding-left: 15px;
        padding-right: 15px;
    }
`;

export const HeaderInputBox = styled.div`
    width: 100%;
    height: 50px;
`;

export const HeaderButtonBox = styled.div`
    width: 250px;
    height: 50px;

    @media (max-width: 475px) {
        width: 100%;
    }
`;
