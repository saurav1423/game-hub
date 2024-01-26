import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

const useData = (endpoint) => {
 
 const [data, setData] = useState([]);
 const [error, setError] = useState('');
 const [loading, setLoading] = useState(false);

 useEffect(() => {

   setLoading(true)
   apiClient.get(endpoint)
    .then(res => {
        setData(res.data.results)
        console.log(res.data.results)
        setLoading(false)
    })
    .catch(err => {
      setError(err)
      setLoading(false)
    })
 
 },[])

 return {data, error, loading}

}

export default useData