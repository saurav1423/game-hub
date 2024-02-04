import { HStack, Switch, Text, useColorMode, Show } from '@chakra-ui/react'
import React from 'react'

const ColorModeSwitch = () => {

    const {toggleColorMode, colorMode} = useColorMode()

  return (
    <HStack>
       <Switch colorScheme='green' isChecked = {colorMode === "dark"} onChange={toggleColorMode}  />
       <Show above="lg">
          <Text whiteSpace='nowrap' >Dark Mode</Text>
       </Show>
       
    </HStack>
  )
}

export default ColorModeSwitch