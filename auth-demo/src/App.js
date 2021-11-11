import React from 'react'
import SignIn from './SignIn';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Nav from './Nav';
import SignUp from './SignUp';
const App = () => {
    return (
      <main>
          <Router>
              <Nav/>
              <Routes>
                  <Route exact path="/" element={<SignIn/>}></Route>
                  <Route path="/signup" element={<SignUp/>}></Route>
              </Routes>
              
          </Router>
    
     
      </main>
    );
}

export default App
