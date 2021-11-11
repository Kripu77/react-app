import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useDemoContext } from '../context/demoContext';

//setup instance for the baseURL

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts"
});

const Client = () => {
    console.log(useDemoContext());
 
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
        setUpdating(false)
    })
}

//useEffect to monitor the fetch
useEffect(()=>{
    fetchFn()
}, [])



//to update using put request

const updateFn = ()=>{
    setUpdating(true);
    client.patch('/1',{
        body:"Updated",title: "Changed"
    })
    .then((res)=>{
        setUpdating(true)
        setData(res.data)})
    .catch((err)=>{setError(true)
        setUpdating(false)
      
    console.log(err)})
    .finally(()=>setUpdating(false))
}








const {body, title} = data;

if(loading){
    return <h1> Loading.....</h1>
}
if(error){
    return <h1> There is an error...Please review</h1>
}
if(updating){
    return <h1> Updating...... hang in</h1>
}
    return (
        <div>
            <h1> {body}</h1>
            <h2> {title}</h2>
            <button onClick={()=>updateFn()}>Update</button>
        </div>
    )
}

export default Client
