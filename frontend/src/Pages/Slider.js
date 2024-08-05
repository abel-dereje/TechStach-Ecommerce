import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import 'swiper/swiper-bundle.min.css';

import img1 from '../assets/banner/WebBanner.webp';
import img2 from '../assets/banner/Airpode.webp';
import img3 from '../assets/banner/PLACEHOLDER-PHOTOPEA.webp';
import img4 from '../assets/banner/Professional Web Banner Design.webp';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
  return (
    <div className="bg-white p-4 mb-4">

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={img1}
              alt="Slide 1"
              className="object-cover w-full h-full"
            />
            {/* <p className="absolute bottom-4 left-4 text-2xl text-white">Slide 1 Content</p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={img2}
              alt="Slide 2"
              className="object-cover w-full h-full"
            />
            {/* <p className="absolute bottom-4 left-4 text-2xl text-white">Slide 2 Content</p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={img3}
              alt="Slide 3"
              className="object-cover w-full h-full"
            />
            {/* <p className="absolute bottom-4 left-4 text-2xl text-white">Slide 3 Content</p> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={img4}
              alt="Slide 4"
              className="object-cover w-full h-full"
            />
            {/* <p className="absolute bottom-4 left-4 text-2xl text-white">Slide 3 Content</p> */}
          </div>
        </SwiperSlide>
      </Swiper>
      
    </div>
  )
}

export default Slider;
