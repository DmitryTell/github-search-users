import { FC } from 'react';

import { Button } from '@shared/';

import * as Styled from './footer.styled';


interface IFooter {
  currentPage: number;
  setCurrentPage: () => void;
}

export const Footer: FC<IFooter> = ({ currentPage, setCurrentPage }) => (
  <Styled.FooterContainer>
    <Styled.FooterTitle>Страница:</Styled.FooterTitle>
    <Styled.FooterPagination>
      <Styled.FooterButtonBox>
        <Button text='Назад' onClick={ () => console.log('Click back') } />
      </Styled.FooterButtonBox>
      <Styled.FooterNumber>{ currentPage }</Styled.FooterNumber>
      <Styled.FooterButtonBox>
        <Button text='Вперед' onClick={ () => console.log('Click forward') } />
      </Styled.FooterButtonBox>
    </Styled.FooterPagination>
  </Styled.FooterContainer>
);
