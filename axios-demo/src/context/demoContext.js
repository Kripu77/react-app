import React, {useEffect, useReducer, useContext} from 'react'
import useAxios from '../customHook/useAxios';
import { reducer } from './reducer';
import axios from 'axios';
const url = "https://jsonplaceholder.typicode.com/posts/1";
//context provider
const contextProvider=  React.createContext();

const initialState = {
    loading: true,
    error: false, 
    data: [],
    updating : false
}
const DemoContext = ({children}) => {


    const [state, dispatch] = useReducer(reducer, initialState)

//custom hook




    //function to control the state

    const loadingFn=()=>{
dispatch ({type:"loadingState"})
    }

    //when data is updating
    const updateFn= ()=>{

        dispatch({type:"UpdatingState"})

    }

//error

const errorFn = ()=>{
    dispatch({type:"errorState"})
}
const dataFn= (data)=>{
    dispatch({type:"dataState", payLoad:data})
}


const updateDataFn = (data)=>{

    dispatch({type:"update", payLoad:data})
}
//fetch data

const getData = () => {
    axios.get(url)
    .then((resp)=>dataFn(resp.data))
};
React.useEffect(()=>{
    getData()
},[])

//update data

const updateData = ()=>{

    axios.put(url, {
        body:"Updated",title:"Üpdated"
    })
    .then((resp)=>{  
        updateDataFn(resp.data)
  })
}

    return (
        <div>
           <contextProvider.Provider value={{...state, loadingFn, updateFn, errorFn, dataFn, updateData}}>
               {children}</contextProvider.Provider> 
        </div>
    )
}

export const useDemoContext = ()=>{
    return useContext(contextProvider);
}

export default DemoContext
