import React from 'react'

const App = () => {
    //slice method returns a new array it bascially removes the selected value in the slice method and only returns the unsxelected value.
    let users = [ "Kripu", "Äsim", "John", "Nikita", "Ryan"]

console.log(users.slice(1,4));
//we can also do 
console.log(users.slice(1))
//this will slice off only the 1st value which is the 0 index based value

    return (
        <div>
            <h1> This is a test</h1>
            {}
        </div>
    )
}

export default App
