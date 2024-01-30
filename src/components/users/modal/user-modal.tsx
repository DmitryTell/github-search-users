import { FC } from 'react';

import { IUserItem } from '@interface/';

import * as Styled from './user-modal.styled';


interface IUserModal {
  user: IUserItem | null;
  setIsUserModal: (isUserModal: boolean) => void;
}

export const UserModal: FC<IUserModal> = ({ user, setIsUserModal }) => (
  <>
    <Styled.UserBackdrop />
    <Styled.UserContainer>
      <Styled.UserTop>
        <Styled.UsersName>{ user?.login || '' }</Styled.UsersName>
        <Styled.UserCloseButton type='button' onClick={ () => setIsUserModal(false) }>
          <svg fill='none' height='43' viewBox='0 0 43 43' width='43' xmlns='http://www.w3.org/2000/svg'>
            <path d='M31.8193 10.6066L10.6061 31.8198' stroke='#000' strokeWidth='2' />
            <path d='M31.8193 31.8198L10.6061 10.6066' stroke='#000' strokeWidth='2' />
          </svg>
        </Styled.UserCloseButton>
      </Styled.UserTop>
      <Styled.UserAva>
        <img alt='Ava' src={ user?.avatar_url || '' } />
      </Styled.UserAva>
      <Styled.UserLink href={ user?.html_url || '' } target='blank'>Перейти на страницу пользователя</Styled.UserLink>
    </Styled.UserContainer>
  </>
);
