import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (axiosParams) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchData = async (params) => {
        try {
         const result = await axios.request(params);
          setResponse(result.data);
         } catch( error ) {
           setError(error);
         } finally {
           setLoading(false);
         }
    };
    
    useEffect(() => {
        fetchData(axiosParams);
    }, [axiosParams.url]); // execute once only

    return { response, error, loading };
}

export default useAxios;
