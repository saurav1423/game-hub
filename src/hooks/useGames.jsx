import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

const useGames = () => {
 
  const [games, setGames] = useState([]);
 const [error, setError] = useState('');

 useEffect(() => {


   apiClient.get('/games')
    .then(res => {
        setGames(res.data.results)
        console.log(res.data.results)
    })
    .catch(err => setError(err))
 
 },[])

 return {games, error}

}

export default useGames