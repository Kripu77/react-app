import React from 'react'
import UseFetch from '../Axios/UseFetch';


const Demo = () => {
    const {data} = UseFetch();
    console.log(data);
    return (
        <div>
           <h1> {data.title}</h1>
           <h2>{data.body}</h2> 
        </div>
    )
}

export default Demo
