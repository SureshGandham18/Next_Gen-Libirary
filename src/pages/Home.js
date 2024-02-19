import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import photo1 from '../assets/1.jpg';
import photo2 from '../assets/2.jpg';
import photo3 from '../assets/3.jpg';
import photo4 from '../assets/4.jpg';
import photo5 from '../assets/5.jpg';
import photo from '../components/photo.png';


function Home() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="mx-auto sm:mt-11 px-4 sm:px-6 lg:px-8">
      <div className='flex mt-12 sm:mt-24 mx-6 sm:mx-36 flex-col items-center sm:flex-row'>
        <p className="text-center sm:text-left text-slate-800 text-xl font-semibold">
          Welcome to the{" "}
          <span className="text-3xl font-serif font-bold text-orange-800">
            Next-Gen Library Services
          </span>
          , where innovation meets libraries in the digital age.
        </p>
        <img src={photo} className="h-40 rounded-full mt-6 sm:mt-0" alt="Profile" />
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-2 mt-8 sm:mt-2">
        <Slider {...sliderSettings} className="h-auto sm:h-96 w-full sm:w-1/2 rounded-3xl">
          <div>
            <img src={photo1} className="w-full h-full object-cover rounded-3xl" alt="Slider Photo" />
          </div>
          <div>
            <img src={photo2} className="w-full h-full object-cover rounded-3xl" alt="Slider Photo" />
          </div>
          <div>
            <img src={photo3} className="w-full h-full object-cover rounded-3xl" alt="Slider Photo" />
          </div>
          <div>
            <img src={photo4} className="w-full h-full object-cover rounded-3xl" alt="Slider Photo" />
          </div>
          <div>
            <img src={photo5} className="w-full h-full object-cover rounded-3xl" alt="Slider Photo" />
          </div>
        </Slider>
        <div className="bg-slate-100 rounded-lg p-3 mt-6 sm:text-center sm:mb-24 w-full sm:w-1/2">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Study Tips for Gaining Knowledge</h2>
          <p className="text-gray-700 mb-2">Set clear goals and define what you want to learn.</p>
          <p className="text-gray-700 mb-2">Diversify your sources by exploring books, online courses, podcasts, etc.</p>
          <p className="text-gray-700 mb-2">Practice active learning by engaging with the material actively.</p>
          <p className="text-gray-700 mb-2">Read regularly to expose yourself to new ideas and perspectives.</p>
          <p className="text-gray-700 mb-2">Teach others what you've learned to reinforce your understanding.</p>
          <p className="text-gray-700 mb-2">Join discussion groups or study circles related to your interests.</p>
          <p className="text-gray-700 mb-2">Stay curious and never stop asking questions.</p>
          <p className="text-gray-700 mb-2">Reflect on what you've learned and review your progress regularly.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
