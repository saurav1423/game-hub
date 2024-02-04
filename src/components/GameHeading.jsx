import { Heading } from '@chakra-ui/react'
import React from 'react'

const GameHeading = ({gameQuery}) => {
  
  //games
  //Action Games
  //Xbox Games
  //Xbox Action Games  
  const heading = `${gameQuery.selectedPlatform?.name || ''} ${gameQuery.selectedGenre?.name || ''} Games`   
    
  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default GameHeading