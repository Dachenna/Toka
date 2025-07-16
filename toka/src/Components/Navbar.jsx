import React from 'react'

function Navbar() {
    const navItems = [
        {
            name: 'Home',
            link : '/',
        },
        {
            name: 'Create',
            link: '/create',
        },
        {
            name: 'Trends',
            link: '/trends',
        },
        {
            name: 'Collections',
            link: '/collections',
        },
    ];

  return (
    <header>
      <nav className='flex flex-col items-center justify-between p-3 gap-0.5 bg-gradient-to-r'>

      </nav>
    </header>
  )
}

export default Navbar
