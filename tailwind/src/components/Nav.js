import React from 'react'
import Header from './Header';
import {FaBars, FaCrosshairs} from "react-icons/fa"

const Nav = () => {

    //useState
    const [open, setIsOpen] = React.useState(false);

    return (
      <main className="bg-blue-500 text-white text-xl p-2 sm:text-3xl sm:p-4">
        <Header />
        <nav className="flex justify-between">
          <section className="flex justify-between">
            <h1> Kripu Khadka</h1>
          </section>
          <section
            className={
              open
                ? "fixed bg-blue-500 z-10 top-0 left-0 right-0 h-screen flex justify-around transition-all sm:static sm:h-0 "
                : "hidden sm:flex"
            }
          >
            <section className="flex flex-col mt-1 m:flex-row sm:space-x-7">
              <section className="sm:hidden">
                <h1> Kripu Khadka</h1>
              </section>
              <section className="p-6 flex flex-col sm:flex-row sm:space-x-6 sm:p-0 ">
                <button>Sign In</button>
                <button> Sign Up</button>
                <button> Home</button>
              </section>
            </section>
            <button
              className="fixed  right-2 top-10 sm:hidden"
              onClick={() => setIsOpen(false)}
            >
              {" "}
              <FaCrosshairs />{" "}
            </button>
          </section>
          <button
            className={open ? "hidden sm:hidden" : "block sm:hidden"}
            onClick={() => setIsOpen(true)}
          >
            {" "}
            <FaBars />{" "}
          </button>
        </nav>
      </main>
    );
}

export default Nav
