import { useState, useEffect } from 'react';

import { Wrapper } from '@layout/';
import {
  Header, Users, UsersLoading, Footer, UserModal
} from '@components/';
import { IUserItem, IUsers } from '@interface/';

import { getUsers } from '../api/get-users';


export const MainPage = () => {
  const [users, setUsers] = useState<IUsers | null>(null);
  const [errorText, setErrorText] = useState<string | null>(null);
  const [value, setValue] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [order, setOrder] = useState<string>('desc');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<IUserItem | null>(null);
  const [isUserModal, setIsUserModal] = useState<boolean>(false);

  const lastPage = users ? Math.ceil(users.total_count / 20) : 1;

  useEffect(() => {
    setIsLoading(true);

    getUsers(value, order, currentPage)
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
        setErrorText(null);
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorText(error.message);
      });
  }, [value, currentPage, order]);

  useEffect(() => {
    if (currentUser) {
      setIsUserModal(true);
    }
  }, [currentUser]);

  return (
    <Wrapper>
      <Header order={ order } setOrder={ setOrder } setValue={ setValue } />
      { isLoading ? <UsersLoading /> : (
        <Users errorText={ errorText } setCurrentUser={ setCurrentUser } users={ users } />
      ) }
      <Footer currentPage={ currentPage } lastPage={ lastPage } setCurrentPage={ setCurrentPage } />
      { isUserModal && <UserModal setIsUserModal={ setIsUserModal } user={ currentUser } /> }
    </Wrapper>
  );
};
