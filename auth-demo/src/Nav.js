import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0, Auth0Context } from '@auth0/auth0-react';

const Nav = () => {
console.log(Auth0Context)
console.log(useAuth0)
 const {loginWithPopup, loginWithRedirect, logout, isAuthenticated, user} = useAuth0();
    return (
      <div>
        <h1> Nav</h1>
             <button onClick={loginWithRedirect}> Popup </button>
        <button onClick={loginWithPopup}>
          <Link to="/"> Sign In page</Link>
        </button>
        <button>
          <Link to="/signup"> Sign up page</Link>
        </button>
        {isAuthenticated?"user authenticated" : "not authenticated"}
        <button onClick={logout}> Sign Out</button>
      </div>
    );
}

export default Nav
