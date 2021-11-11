import React from 'react'
import { useDemoContext } from '../context/demoContext'

const Data = () => {
    const {loading, error, data, updating, loadingFn, errorFn, dataFn, updateData, updateFn} = useDemoContext();
    console.log(loadingFn, errorFn, dataFn)

    if(loading){
       
        return <h1> .....Loading</h1>
    }
    if(error){
        return <h1> .....Error 404</h1>
    }
    if(updating){
        return <h1> Hang In the data is upadting.....</h1>
    }
    return (

        
        <div>
            <h1> {data.body}, {data.title}</h1>
            <button onClick={()=>{
            updateData()
            }}> Update</button>
        </div>
    )
}

export default Data
