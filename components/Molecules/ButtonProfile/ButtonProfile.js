import styled from 'styled-components'
import { FiUser } from 'react-icons/fi'
import Button from '@components/Atoms/Button'

const ButtonProf = styled(Button)`
  padding: 5px;
  border-radius: 50%;
  overflow: hidden;
  width: 30px;
  height: 30px;

  &:hover {
    background-color: var(--color-border-buttton-profile);
  }
`

const CircleBg = styled.i`
  border-radius: 50%;
  width: 20px;
  height: 20px;
`

export const ButtonProfile = () => {
  return (
    <ButtonProf>
      <CircleBg>
        <FiUser size={20} />
      </CircleBg>
    </ButtonProf>
  )
}
