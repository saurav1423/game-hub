import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

const useGames = () => {
 
 const [games, setGames] = useState([]);
 const [error, setError] = useState('');
 const [loading, setLoading] = useState(false);

 useEffect(() => {

   setLoading(true)
   apiClient.get('/games')
    .then(res => {
        setGames(res.data.results)
        console.log(res.data.results)
        setLoading(false)
    })
    .catch(err => {
      setError(err)
      setLoading(false)
    })
 
 },[])

 return {games, error, loading}

}

export default useGames