import { FC, HTMLProps } from 'react';

import * as Styled from './button.styled';


interface IButton extends HTMLProps<HTMLButtonElement> {
  text: string;
  onClick: React.MouseEventHandler;
}

export const Button: FC<IButton> = ({ text, onClick }) => (
  <Styled.Button onClick={ onClick }>{ text }</Styled.Button>
);
