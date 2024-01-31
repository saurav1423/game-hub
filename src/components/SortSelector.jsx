import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import {BsChevronDown} from 'react-icons/bs'

const SortSelector = ({onSelectSortOrder, selectedSort}) => {

    const sortOrders = [
        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Date Added'},
        {value: 'name', label: 'Name'},
        {value: '-released', label: 'Release Date'},
        {value: '-metacritic', label: 'Popularity'},
        {value: '-rating', label: 'Average Rating'},
    ]

    const selectedOrder = sortOrders.find(o => o.value == selectedSort)

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedOrder?.label || "Sort By" }</MenuButton>
            <MenuList>
                {sortOrders.map((order) => (
                    <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>
                        {order.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu> 
  )
}

export default SortSelector