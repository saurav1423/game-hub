import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

const useData = (endpoint, requestConfig, deps) => {
 
 const [data, setData] = useState([]);
 const [error, setError] = useState('');
 const [loading, setLoading] = useState(false);

 useEffect(() => {

   setLoading(true)
   apiClient.get(endpoint, requestConfig)
    .then(res => {
        setData(res.data.results)
        console.log(res.data.results)
        setLoading(false)
    })
    .catch(err => {
      setError(err)
      setLoading(false)
    })
 
 },deps?[...deps] : [])

 return {data, error, loading}

}

export default useData