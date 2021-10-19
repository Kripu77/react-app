import React from 'react'

const App = () => {
    return (
        <div className="md:flex">
  <div className="md:flex-shrink-0">
    <img className="rounded-lg md:w-56" src="/img/shopping.jpg" alt="Woman paying for a purchase"/>
  </div>
  <div className="mt-4 md:mt-0 md:ml-6">
    <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
      Marketing
    </div>
    <a href="/get-started" className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">
      Finding customers for your new business
    </a>
    <p className="mt-2 text-gray-600">
      Getting a new business off the ground is a lot of hard work.
      Here are five ideas you can use to find your first customers.
    </p>
    <button className="bg-red-500 hover:bg-red-700 ...">
  Hover me
</button>
  </div>




<button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
  Click me
</button>


<button className="btn btn-green">
  Button
</button>


</div>
    )
}

export default App
