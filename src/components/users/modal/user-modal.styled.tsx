import styled from 'styled-components';


export const UserBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #000;
    opacity: 0.5;
    z-index: 10;
`;

export const UserContainer = styled.div`
    position: fixed;
    top: 50px;
    left: 40%;
    z-index: 11;
    width: 400px;
    height: 500px;
    padding: 50px 15px;
    border-radius: 10px;
    background: #fff;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 821px) {
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        border-radius: 0;
    }
`;

export const UserTop = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

export const UsersName = styled.p`
    max-width: 300px;
    font-size: 22px;
    line-height: 100%;
`;

export const UserAva = styled.div`
    width: 230px;
    height: 230px;
    border-radius: 50%;
    background: #e7e7e7;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const UserLink = styled.a`
    font-family: sans-serif;
    font-size: 18px;
    line-height: 100%;
    transition: all 0.5s;

    &:hover {
        text-decoration: underline;
    }

    @media (max-width: 350px) {
        font-size: 16px;
    }
`;

export const UserCloseButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.5s;

    &:hover svg path {
        stroke: #e7e7e7;
    }
`;
