import * as Styled from './users-loading.styled';


export const UsersLoading = () => (
  <Styled.UsersContainer>
    <Styled.UsersAmount />
    <Styled.UsersList>
      { ['1', '2', '3', '4', '5', '6', '7', '8'].map((item) => (
        <Styled.UsersItem key={ item } />
      )) }
    </Styled.UsersList>
  </Styled.UsersContainer>
);
