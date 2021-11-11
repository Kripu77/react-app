import React, {useState, useEffect} from 'react'
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";
const UseFetch = () => {
   

    const[data, setData] = useState([]);

    //axios fetch function

    // const fetchData = ()=>{
    //     axios.get(url)
    // // .then((resp)=>resp)
    //     .then((resp)=>setData(resp))
    // }

    // //useEffect to control 


    // useEffect(()=>{
    //     fetchData()
    // }, [])



    //axios post example
const postDemo=()=>{
    
    axios
      .post(url, {
        title: "This is my axios post example",
        body: "This is a new post done by Kripu for YT tutorial",
      })
      .then((resp) => setData(resp.data));

}

//useEffect for POST

useEffect(()=>{
    postDemo();
},[])

    return {data};
}

export default UseFetch
