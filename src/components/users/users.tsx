import { FC } from 'react';

import { IUsers } from '@interface/';

import * as Styled from './users.styled';


interface IUsersProp {
  users: IUsers;
}

export const Users: FC<IUsersProp> = ({ users }) => (
  <Styled.UsersContainer>
    <Styled.UsersAmount>Найдено { users?.total_count } пользователей</Styled.UsersAmount>
    <Styled.UsersList>
      { users?.items.length > 0 && users.items.map((item) => (
        <Styled.UsersItem key={ item.node_id }>
          <Styled.UsersAva>
            <img alt='Ava' src={ item?.avatar_url } />
          </Styled.UsersAva>
          <Styled.UsersName>{ item?.login }</Styled.UsersName>
        </Styled.UsersItem>
      )) }
    </Styled.UsersList>
  </Styled.UsersContainer>
);
