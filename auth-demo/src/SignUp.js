import React from 'react'

const SignUp = () => {

    
     const [inputData, setInputData] = React.useState({email:"", password:""})

    //handle change function

    const handleChange = (e)=>{

let name= e.target.name;
let value= e.target.value;
setInputData({...inputData, [name]:value})

    }

    const handleClick = (e)=>{


        e.preventDefault()
    }
    return (
      <section>
          <h1> Sign up</h1>
        <form onSubmit={handleClick}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={inputData.email}
            onChange={handleChange}
          ></input>
          <br />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="Password"
            id="password"
            name="password"
            value={inputData.password}
            onChange={handleChange}
          ></input>
          <br/>
          <br/>
          <button type='submit'>Submit</button>
        </form>
      </section>)
}

export default SignUp
