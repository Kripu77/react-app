import React, {useState, useEffect} from 'react'
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";
const UseFetch = () => {
   

    const[data, setData] = useState([]);

    //axios fetch function

    const fetchData = ()=>{
        axios.get(url)
    // .then((resp)=>resp)
        .then((resp)=>setData(resp))
    }

    //useEffect to control 


    useEffect(()=>{
        fetchData()
    }, [])

    return {data};
}

export default UseFetch
