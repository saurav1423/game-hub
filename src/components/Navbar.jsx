import React from 'react'
import logo from '../assets/logo.webp'
import { HStack, Image, Text } from '@chakra-ui/react'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const Navbar = ({onSearch}) => {
  return (
    <HStack padding="10px">
        <Image src={logo} alt="logo" boxSize= '60px' marginY={2} />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch  />
    </HStack>
  )
}

export default Navbar