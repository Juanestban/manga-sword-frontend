import Button from '@components/Atoms/Button'
import styled from 'styled-components'

export const ButtonSearch = styled(Button)`
  background-color: var(--border-color-input);
  border-radius: 0;
  width: 5rem;

  &:focus {
    box-shadow: none;
  }
`
export const Form = styled.form`
  width: 100%;
  display: inline-flex;
`

export const ContainerSearch = styled.div`
  width: 100%;
  display: inline-flex;
`
