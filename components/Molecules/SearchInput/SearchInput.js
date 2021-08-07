import { FiSearch } from 'react-icons/fi'
import Input from '@components/Atoms/Input'
import { Form, ContainerSearch, ButtonSearch } from './styles'

export const SearchInput = () => {
  return (
    <Form>
      <ContainerSearch>
        <Input type="text" placeholder="Search" />
        <ButtonSearch>
          {/* refactor this button Icon like object button[icon] == name or title pass by props */}
          <FiSearch />
        </ButtonSearch>
      </ContainerSearch>
    </Form>
  )
}
