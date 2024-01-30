import styled, { css } from 'styled-components';


const animation = css`
    -webkit-animation: loading-animation 2s linear infinite alternate both;
    animation: loading-animation 2s linear infinite alternate both;
`;

export const UsersContainer = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 30px;
`;

export const UsersAmount = styled.div`
    width: 300px;
    height: 60px;
    border-radius: 3px;
    ${animation}
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
    border-radius: 10px;
    ${animation}
`;
