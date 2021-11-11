import React, {useEffect, useReducer, useContext} from 'react'
import { reducer } from './reducer';

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

    return (
        <div>
           <contextProvider.Provider value={{...state}}>
               {children}</contextProvider.Provider> 
        </div>
    )
}

export const useDemoContext = ()=>{
    return useContext(contextProvider);
}

export default DemoContext
