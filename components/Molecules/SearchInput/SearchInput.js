import { FiSearch } from 'react-icons/fi'
import Button from '@components/Atoms/Button'
import styled from 'styled-components'

const ButtonSearch = styled(Button)``
const ContainerSearch = styled.div``

export const SearchInput = () => {
  return (
    <ContainerSearch>
      <input type="text" />
      <ButtonSearch>
        {/* refactor this button Icon like object button[icon] == name or title pass by props */}
        <FiSearch />
      </ButtonSearch>
    </ContainerSearch>
  )
}
