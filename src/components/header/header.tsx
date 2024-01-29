import { Input, Button } from '@shared/';
import { ReactComponent as Logo } from '@assets/icon/Logo.svg';

import * as Styled from './header.styled';


export const Header = () => (
  <Styled.HeaderContainer>
    <Styled.HeaderTop>
      <div>
        <Logo />
      </div>
      <Styled.HeaderTitle>GitHub Search Users</Styled.HeaderTitle>
    </Styled.HeaderTop>
    <Styled.HeaderSearch>
      <Styled.HeaderInputBox>
        <Input placeholder='Введите имя пользователя' onChange={ (e) => console.log(`Input: ${e.target.value}`) } />
      </Styled.HeaderInputBox>
      <Styled.HeaderButtonBox>
        <Button text='Сортировать по:' onClick={ () => console.log('Click button') } />
      </Styled.HeaderButtonBox>
    </Styled.HeaderSearch>
  </Styled.HeaderContainer>
);
