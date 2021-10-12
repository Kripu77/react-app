import React from 'react'

const App = () => {
    //slice method returns a new array it bascially removes the selected value in the slice method and only returns the unsxelected value.
    let users = [ "Kripu", "Äsim", "John", "Nikita", "Ryan"]

//splice and slice method are often tend to be confusing array methods
//lets use the aboved array to demonstrtate the method
console.log(users.slice(1,3))
console.log(users.slice(1))
console.log(users.slice(3))
//after this we will discuss about call, apply and bind method

//this will slice off only the 1st value which is the 0 index based value

    return (
        <div>
            <h1> This is a test</h1>
            {}
        </div>
    )
}

export default App
