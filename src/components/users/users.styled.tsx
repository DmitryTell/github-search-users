import styled from 'styled-components';


export const UsersContainer = styled.div`
    max-width: 1440px;
    min-height: 400px;
    margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 30px;
`;

export const UsersAmount = styled.h2`
    color: #3958f3;
    font-family: sans-serif;
    font-size: 24px;
    line-height: 120%;

    @media (max-width: 475px) {
        font-size: 18px;
        line-height: 100%;
    }
`;

export const UsersList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

export const UsersItem = styled.li`
    width: 300px;
    height: 450px;
    padding: 50px 15px;
    border: 1px solid rgba(0, 0, 0, 40%);
    border-radius: 10px;
    background: transparent;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
        border: none;
        background: #f4f9f6;
        -webkit-box-shadow: 0px 0px 6px 5px rgba(0, 0, 0, 0.62);
        -moz-box-shadow: 0px 0px 6px 5px rgba(0, 0, 0, 0.62);
        box-shadow: 0px 0px 6px 5px rgba(0, 0, 0, 0.62);
  }
`;

export const UsersAva = styled.div`
    width: 190px;
    height: 190px;
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

export const UsersName = styled.p`
    font-size: 18px;
    line-height: 100%;
`;

export const UsersErrorText = styled.p`
    font-family: sans-serif;
    font-size: 20px;
    line-height: 120%;
`;
