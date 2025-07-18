import React from 'react'

const MobileMenu = ({menuOpen, setMenuOpen}) => {

    const mobileNavLinks = [
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
    <div className={` fixed top-0 left-0 w-full h-screen bg-[#2d283ef3] z-40 flex flex-col items-center justify-center
     transition-all duration-300 ease-in-out
     ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
     `}>
        <button onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-8 text-gray-300 text-4xl focus:outline-none cursor-pointer"
            aria-label="Close Menu">
                &times;
        </button>

        {/*Mobile Menu Links */}
        <div className='md:flex items-center justify-center space-x-6'>
            {mobileNavLinks.map(index =>(
                <div key={index.link} className='relative group'>
                    <a href={index.link} className='text-2xl font-semibold text-gray-300 my-4 transform 
                    transition-transform duration-300 hover:text-pink-500'>
                        {index.name}
                    </a>
                </div>
            ))}

        </div>
      
    </div>
  )
}

export default MobileMenu
