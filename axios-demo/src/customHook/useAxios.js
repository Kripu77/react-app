import axios from 'axios';
import React, {useState, useEffect} from 'react'

const useAxios = (url) => {
    const[data, setData] =  useState([]);
    const[isLoading, setIsLoading] = useState(true)
    const[error, setError] = useState(false);

    //fetch fn

    const fetchData = ()=>{
        axios.get(url)
        .then((resp)=>{
            setIsLoading(false)
            setData(resp.data)
        })
        .catch((err)=>{
            setError(true)
            setIsLoading(false)
            console.error(err)
        })
        .finally(()=>{
            setIsLoading(false);
        })
    }

    useEffect(()=>{
        fetchData()
    },[])
    return {
        data, isLoading, error
    }
}

export default useAxios
