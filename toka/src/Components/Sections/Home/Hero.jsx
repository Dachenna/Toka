import React from 'react'

const Hero = () => {
  return (
    <main className="w-full min-h-[70vh] flex items-center justify-center ">
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center px-6 py-16 gap-8">
        {/* Left Side - Text */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Buy and sell <br />
            digital art,<br />
            NFT collection
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            Our marketplace has 2M+ works of popular artists around the world.
          </p>
          <button className="bg-[#8f5cff] hover:bg-[#a084fa] text-white font-semibold px-8 py-3 rounded-full shadow-lg transition">
            Explore Now
          </button>
        </div>
        {/* Right Side - Placeholder for image/video */}
        <div className="flex-1 flex items-center justify-center min-h-[300px]">
          <div className="w-full h-[300px] md:h-[400px] bg-black rounded-lg shadow-lg">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero;
