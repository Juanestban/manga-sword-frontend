import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  border-color: transparent;
  box-shadow: none;
  background-color: transparent;
  font-family: 'Regular', sans-serif;
  border-radius: 0;
  padding: 0.5rem 0.7rem;
  color: var(--text-color);
  outline: none;
  border: 1px solid var(--border-color-input);

  &:focus {
    border-color: var(--secundary-color);
    box-shadow: none;
  }
`
