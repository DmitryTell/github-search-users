import { FC, HTMLProps } from 'react';

import * as Styled from './input.styled';


interface IInput extends HTMLProps<HTMLInputElement> {
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input: FC<IInput> = ({ placeholder, onChange }) => (
  <Styled.Input placeholder={ placeholder } type='text' onChange={ onChange } />
);
