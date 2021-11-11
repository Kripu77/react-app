import React from 'react'
import axios from 'axios'
const url = 'https://jsonplaceholder.typicode.com/posts/1';

const Put = () => {


    const [data, setData] = React.useState([])


    //initially fecth a given post

    const fetchPost = ()=>{
        axios.get(url)
        .then((resp)=>{setData(resp.data)
        console.log(resp.data)})
        .catch((err)=>console.erorr(err))
    }

    //useEffect to trigger only once

    React.useEffect(()=>{
        fetchPost()
    },[])


    // to update the post 
const updateFn =()=>{
    axios.put(url,{
        title:"This is the title once its updated", 
        body:"This is the body once its updated"
    })
.then((resp)=>{{setData(resp.data)
console.log(resp.data)
}})
}

    //repaint and reflow
      const { title, body } = data;
    return (
        
        <div>
            <h1> {title}</h1>
            <h2> {body}</h2>
            <button onClick= {()=>updateFn()}> Update</button>
            
          
        </div>
    )
}

export default Put
