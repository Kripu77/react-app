import React from 'react'
import UseFetch from '../Axios/UseFetch';

const Demo = () => {
    const {data} = UseFetch();
    console.log(data);
    return (
        <div>
           <h1> Check</h1> 
        </div>
    )
}

export default Demo
