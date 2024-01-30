import { FC } from 'react';

import { IUserItem, IUsers } from '@interface/';

import * as Styled from './users.styled';


interface IUsersProp {
  errorText: string | null;
  users: IUsers | null;
  setCurrentUser: (currentUser: IUserItem) => void;
}

export const Users: FC<IUsersProp> = ({ errorText, users, setCurrentUser }) => (
  <Styled.UsersContainer>
    { !errorText && <Styled.UsersAmount>Найдено { users?.total_count ?? 0 } пользователей</Styled.UsersAmount> }
    { errorText ? <Styled.UsersErrorText>{ errorText }</Styled.UsersErrorText> : (
      <Styled.UsersList>
        { users ? users?.items?.map((item) => (
          <Styled.UsersItem key={ item.node_id } onClick={ () => setCurrentUser(item) }>
            <Styled.UsersAva>
              <img alt='Ava' src={ item?.avatar_url } />
            </Styled.UsersAva>
            <Styled.UsersName>{ item?.login }</Styled.UsersName>
          </Styled.UsersItem>
        )) : <Styled.UsersErrorText>Не удалось загрузить список пользователей</Styled.UsersErrorText> }
      </Styled.UsersList>
    ) }
  </Styled.UsersContainer>
);
