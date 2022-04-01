import React from 'react'

// Use background-image for design purposes only and not for content.
// Use <img> tag when the image is meant for content.
const ImageHoverDemo = () => {

  const imgSrc = "https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp";

  return (
    <>
      <h1 className="m-8 text-center">Image Hover Effects</h1>
      <div className="ml-32">

        <div className="flex gap-16 my-16">
          <div className="w-[250px] h-[200px] bg-blue-500 overflow-hidden">
            <img src={imgSrc} className="h-full w-full object-cover object-center hover:scale-110 transition duration-300 ease-in-out" alt="Image" />
          </div>

          <div className="w-[250px] h-[200px] bg-blue-500 overflow-hidden">
            <div style={{ backgroundImage: `url(${imgSrc})` }}
              className="w-full h-full bg-no-repeat bg-cover bg-center hover:scale-110 transition duration-300 ease-in-out">
            </div>
          </div>
        </div>



        <div className="flex gap-16 my-16">
          <div className="relative w-[250px] h-[200px] bg-blue-500 overflow-hidden" >
            <img src={imgSrc} className="h-full w-full object-cover object-center" alt="alt-text" />
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-white/20 overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"></div>
          </div>

          <div className="relative w-[250px] h-[200px] bg-blue-500 overflow-hidden">
            <div style={{ backgroundImage: `url(${imgSrc})` }}
              className="w-full h-full bg-no-repeat bg-cover bg-center transition duration-300 ease-in-out">
            </div>
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-white/20 overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"></div>
          </div>
        </div>



        <div className="flex gap-16 my-16">
          <div className="relative w-[250px] h-[200px] bg-blue-500 overflow-hidden" >
            <img src={imgSrc} className="h-full w-full object-cover object-center" alt="alt-text" />
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-white/20 flex justify-center items-center overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
              <button className='p-4 bg-teal-300'>View Profile</button>
            </div>
          </div>

          <div className="relative w-[250px] h-[200px] bg-blue-500 overflow-hidden">
            <div style={{ backgroundImage: `url(${imgSrc})` }}
              className="w-full h-full bg-no-repeat bg-cover bg-center transition duration-300 ease-in-out">
            </div>
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-white/20 flex justify-center items-center overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
              <button className='p-4 bg-teal-300'>View Profile</button>
            </div>
          </div>
        </div>



        <div className="flex gap-16 my-16">
          <div className="relative w-[250px] h-[200px] bg-blue-500 overflow-hidden group" >
            <img src={imgSrc} className="h-full w-full object-cover object-center" alt="alt-text" />
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-blue-300 flex justify-center items-center overflow-hidden bg-fixed opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition duration-300 ease-in-out">
              <span className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
            </div>
          </div>

          <div className="relative w-[250px] h-[200px] bg-blue-500 overflow-hidden group">
            <div style={{ backgroundImage: `url(${imgSrc})` }}
              className="w-full h-full bg-no-repeat bg-cover bg-center transition duration-300 ease-in-out">
            </div>
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-blue-300 flex justify-center items-center overflow-hidden bg-fixed opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition duration-300 ease-in-out bg-white/20">
              <span className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
            </div>
          </div>
        </div>



        <div className="flex gap-16 my-16">
          <div className="relative w-[250px] h-[200px] bg-blue-500 overflow-hidden group" style={{ perspective: "500px" }}>
            <img src={imgSrc} className="h-full w-full object-cover object-center" alt="alt-text" />
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-blue-300 flex justify-center items-center overflow-hidden bg-fixed opacity-0 rotate-y-90 group-hover:opacity-100 group-hover:rotate-0 transition duration-500 ease-in-out">
              <span className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
            </div>
          </div>

          <div className="relative w-[250px] h-[200px] bg-blue-500 overflow-hidden group" style={{ perspective: "500px" }}>
            <div style={{ backgroundImage: `url(${imgSrc})` }}
              className="w-full h-full bg-no-repeat bg-cover bg-center transition duration-300 ease-in-out">
            </div>
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-blue-300 flex justify-center items-center overflow-hidden bg-fixed opacity-0 rotate-y-90 group-hover:opacity-100 group-hover:rotate-0 transition duration-500 ease-in-out bg-white/20">
              <span className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default ImageHoverDemo