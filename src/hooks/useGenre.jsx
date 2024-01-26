import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

const useGenre = () => {
 
 const [genres, setGenres] = useState([]);
 const [error, setError] = useState('');
 const [loading, setLoading] = useState(false);

 useEffect(() => {

   setLoading(true)
   apiClient.get('/genres')
    .then(res => {
        setGenres(res.data.results)
        console.log(res.data.results)
        setLoading(false)
    })
    .catch(err => {
      setError(err)
      setLoading(false)
    })
 
 },[])

 return {genres, error, loading}

}

export default useGenre