import React, {useState, useEffect} from 'react'
import axios from 'axios'

//setup instance for the baseURL

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts"
});

const Client = () => {
    const[data, setData] = useState([])
    const[loading,setLoading] = useState(true)
    const [error, setError] = useState(false);
    const [updating, setUpdating] = useState(false);


    //fetch function using axios instance

const fetchFn  = ()=>{

    client.get('/3')
    .then((resp)=>{setData(resp.data)})
    .catch((err)=>{
        setError(true)
        setLoading(false)
        console.error(err)
    })
    .finally(()=>{
        setLoading(false)
    })
}

//useEffect to monitor the fetch
useEffect(()=>{
    fetchFn()
}, [])

const {body, title} = data;

if(loading){
    return <h1> Loading.....</h1>
}
if(error){
    return <h1> There is an error...Please review</h1>
}
    return (
        <div>
            <h1> {body}</h1>
            <h2> {title}</h2>
        </div>
    )
}

export default Client
