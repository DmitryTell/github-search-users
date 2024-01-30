import { FC, useState } from 'react';

import { Input, Button } from '@shared/';
import { ReactComponent as Logo } from '@assets/icon/Logo.svg';

import { OrderModal } from './modal';
import * as Styled from './header.styled';


interface IHeader {
  order: string;
  setOrder: (order: string) => void;
  setValue: (value: string) => void;
}

export const Header: FC<IHeader> = ({
  order, setOrder, setValue
}) => {
  const [isOrderModal, setIsOrderModal] = useState<boolean>(false);

  return (
    <Styled.HeaderContainer>
      <Styled.HeaderTop>
        <div>
          <Logo />
        </div>
        <Styled.HeaderTitle>GitHub Search Users</Styled.HeaderTitle>
      </Styled.HeaderTop>
      <Styled.HeaderSearch>
        <Styled.HeaderInputBox>
          <Input placeholder='Введите имя пользователя' onChange={ (e) => setValue(e.target.value) } />
        </Styled.HeaderInputBox>
        <Styled.HeaderButtonBox>
          <Button text='Сортировать по:' onClick={ () => setIsOrderModal(true) } />
        </Styled.HeaderButtonBox>
      </Styled.HeaderSearch>
      { isOrderModal && <OrderModal order={ order } setIsOrderModal={ setIsOrderModal } setOrder={ setOrder } /> }
    </Styled.HeaderContainer>
  );
};
