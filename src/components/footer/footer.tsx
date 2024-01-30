import { FC } from 'react';

import { Button } from '@shared/';

import * as Styled from './footer.styled';


interface IFooter {
  currentPage: number;
  lastPage: number;
  setCurrentPage: (currentPage: number) => void;
}

export const Footer: FC<IFooter> = ({ currentPage, lastPage, setCurrentPage }) => {
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <Styled.FooterContainer>
      <Styled.FooterTitle>Страница:</Styled.FooterTitle>
      <Styled.FooterPagination>
        <Styled.FooterButtonBox>
          <Button disabled={ currentPage === 1 } text='Назад' onClick={ handlePrevPage } />
        </Styled.FooterButtonBox>
        <Styled.FooterNumber>{ currentPage }</Styled.FooterNumber>
        <Styled.FooterButtonBox>
          <Button disabled={ currentPage === lastPage } text='Вперед' onClick={ handleNextPage } />
        </Styled.FooterButtonBox>
      </Styled.FooterPagination>
    </Styled.FooterContainer>
  );
};
