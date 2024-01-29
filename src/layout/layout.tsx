import { FC, ReactNode } from 'react';

import * as Styled from './layout.styled';


interface IWrapper {
  children: ReactNode;
}

export const Wrapper: FC<IWrapper> = ({ children }) => (
  <Styled.LayoutWrapper>{ children }</Styled.LayoutWrapper>
);
