import React from 'react';

function CollapsibleExample() {
  return (
    <div>
          <nav className='flex justify-between mx-20'>
            <ul className='flex items-center'>
              <li>
                <a href="/" className="px-5 no-underline text-gray-900 hover:text-gray-400">Home</a>
              </li>
              <li>
                <a href="/" className="px-5 no-underline text-gray-900 hover:text-gray-400">About </a>
              </li>
              <li>
                <a href="/" className="px-5 no-underline text-gray-900 hover:text-gray-400">Our Services</a>
              </li>
            </ul>
            <img width="130px" src="https://i.ibb.co/QF2KXsW/logo.png" alt="logo" />
            <ul className='flex items-center'>
              <li>
                <a href="/" className="px-5 no-underline text-gray-900 hover:text-gray-400">Contact</a>
              </li>
              <li>
                <a href="/" className="px-5 no-underline text-gray-900 hover:text-gray-400">Login</a>
              </li>
              <li>
                <button className='btn btn-outline-dark px-4'>Book Now</button>
              </li>
             
            </ul>
          </nav>
    </div>
  );
}

export default CollapsibleExample;