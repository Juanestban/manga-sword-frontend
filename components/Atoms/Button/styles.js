import styled from 'styled-components'

export const ButtonStyles = styled.button`
  position: relative;
  display: inline-flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.9rem;
  font-family: 'Montserrat', sans-serif;
  border: 0;
  border-radius: 0.3rem;
  background-color: transparent;
  color: var(--text-color);
  cursor: pointer;
  transition-property: background, box-shadow;
  transition-duration: 0ms.35s;

  &:hover {
    /* background-color: var(----bg-color-hover-button); */
    color: var(--secundary-color);
  }

  &:focus {
    box-shadow: 0 0 0 2px var(--border-color);
  }

  &:disabled {
    color: #555455;
    background-color: #302e30;
    cursor: not-allowed;
  }
`
