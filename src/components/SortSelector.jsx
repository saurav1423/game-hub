import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import {BsChevronDown} from 'react-icons/bs'

const SortSelector = () => {

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>sort by</MenuButton>
            <MenuList>
                <MenuItem>Name</MenuItem>
                <MenuItem>Cast</MenuItem>
                <MenuItem>Albhapet</MenuItem>
                <MenuItem>Relevance</MenuItem>
                <MenuItem>Look</MenuItem>
                <MenuItem>Shook</MenuItem>
            </MenuList>
        </Menu> 
  )
}

export default SortSelector