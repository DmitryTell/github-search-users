import { FC } from 'react';

import * as Styled from './order-modal.styled';


interface IOrderModal {
  order: string;
  setOrder: (order: string) => void;
  setIsOrderModal: (isOrderModal: boolean) => void;
}

export const OrderModal: FC<IOrderModal> = ({ order, setOrder, setIsOrderModal }) => (
  <Styled.OrderContainer>
    { order === 'desc' ? (
      <Styled.OrderText>По возрастанию</Styled.OrderText>
    ) : (
      <Styled.OrderLink
        href='/#'
        onClick={ (e) => {
          e.preventDefault();
          setOrder('desc');
          setIsOrderModal(false);
        } }
      >По возрастанию
      </Styled.OrderLink>
    ) }
    { order === 'asc' ? (
      <Styled.OrderText>По убыванию</Styled.OrderText>
    ) : (
      <Styled.OrderLink
        href='/#'
        onClick={ (e) => {
          e.preventDefault();
          setOrder('asc');
          setIsOrderModal(false);
        } }
      >По убыванию
      </Styled.OrderLink>
    ) }
  </Styled.OrderContainer>
);
