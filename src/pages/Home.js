import React from 'react';
import slider from './slider.gif';
import photo from '../components/photo.png';

function Home() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-center mt-24 text-slate-800 text-xl font-semibold">
        Welcome to the{" "}
        <span className="text-3xl font-serif font-bold text-orange-800">
          Next-Gen Library Services
        </span>
        , where innovation meets libraries in the digital age.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-between mt-8">
        <div className="flex flex-col items-center ">
          <img src={photo} className="h-60 rounded-full" alt="Profile" />
          <span className="text-slate-700 font-extrabold text-center text-4xl mt-4 sm:mt-0">
            Next-Gen Library Services Using IoT
          </span>
        </div>
        <img
          src={slider}
          className="h-auto sm:h-96 w-full sm:w-auto rounded-3xl mt-8 sm:mt-0"
          alt="Slider"
        />
      </div>
    </div>
  );
}

export default Home;
