import React from 'react'

function Navbar({menuOpen, setMenuOpen}) {
    const navLinks = [
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
    <header className='fixed top-0 py-3 w-full z-30 bg-[#201C2D] backdrop-blur-lg border-b border-gray-800 shadow-lg'>
      <nav className='max-w-5xl mx-auto px-2 sm:px-4'>
        <div className='flex justify-between items-center'>
          <a href="/"
             className='font-mono text-xl font-semibold'>
            Toka
          </a>
          <div className="flex-1 flex justify-center">
            <div className="hidden md:flex items-center space-x-4 sm:space-x-8">
              {navLinks.map(index => (
                <div key={index.name} className='relative group'>
                  <a href={index.link} className="text-gray-300 hover:text-pink-400 transition-colors duration-200">
                    {index.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className='w-7 h-5 relative cursor-pointer z-30 md:hidden'
             onClick={() => setMenuOpen(prev => !prev)}>
              &#9776;
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
