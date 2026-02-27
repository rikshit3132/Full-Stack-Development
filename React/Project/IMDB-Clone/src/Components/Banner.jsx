import React from 'react'
import banner from "../assets/img/banner.jpg"
const Banner = () => {
  return (
    <>
      <div
        class="flex w-full mt-[2rem] h-[60vh] bg-[url('/image.jpg')] bg-cover bg-center items-center justify-center "
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="text-white text-center text-2xl font-bold">
          Movie Text
        </div>
      </div>
    </>
  );
}

export default Banner