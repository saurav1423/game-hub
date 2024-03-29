import React from 'react'
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = ({gameQuery}) => {
    const {data, error, loading} = useGames(gameQuery);
    const skeletons = [1,2,3,4,5,6]

  if (error) return <Text>{error}</Text>
    
  return (
     <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} padding={10} spacing={5}>
      {loading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton} />)}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
     </SimpleGrid>
  )
}

export default GameGrid