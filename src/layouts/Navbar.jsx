import React from 'react'

function Navbar() {
  return (
   <nav className='fixed top-0 left-0 w-full bg-white shadow z-50'>
    <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between'>
        <h1 className='text-lg font-bold'>Pallavi Bhalerao</h1>
        <div className='space-x-6'>
            <a href='#about'>About</a>
            <a href='#projects'>Projects</a>
            <a href='#contact'>Contact</a>
        </div>
    </div>
   </nav>
  )
}

export default Navbar