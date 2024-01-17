import React from 'react'
import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react';
const GameGrid = () => {
 const [games, setGames] = useState([]);
 const [error, setError] = useState('');

 useEffect(() => {
   apiClient.get('/games')
    .then(res => setGames(res.data.results))
    .catch(err => setError(err))
 })

  return (
    <>
     {error && <Text>{error}</Text>}
     <ul>
        {games.map((game) => <li key={game.id}>{game.name}</li>)}
     </ul>
    </>
  )
}

export default GameGrid