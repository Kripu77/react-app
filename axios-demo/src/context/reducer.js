export const reducer = (currentState, action)=>{

    if(action.type === "loadingState"){
return {...currentState, loading:action.payLoad}
    }

    if(action.type === "errorState"){
        return {...currentState, error:true}
    }

    if(action.type === "dataState"){
        return {...currentState, data:action.payLoad, error:false, loading:false, updating:false}
    }
    if(action.type === "updatingState"){
        return {...currentState, updating:true}

    
    }

    if(action.type === "update"){
        return {...action.currentState, data:action.payLoad, updating:false}
    }
}