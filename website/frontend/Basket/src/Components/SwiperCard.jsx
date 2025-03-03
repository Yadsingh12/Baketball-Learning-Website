import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import one from '../assets/Images/2.png'

// import required modules
import {Autoplay,EffectCards } from 'swiper/modules';

const SwiperCard = () => {
  return (
    <div>
      <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={one}/></SwiperSlide>
        <SwiperSlide><img src={one}/></SwiperSlide>
        <SwiperSlide><img src={one}/></SwiperSlide>
        <SwiperSlide><img src={one}/></SwiperSlide>
        <SwiperSlide><img src={one}/></SwiperSlide>
        <SwiperSlide><img src={one}/></SwiperSlide>
        <SwiperSlide><img src={one}/></SwiperSlide>
        <SwiperSlide><img src={one}/></SwiperSlide>
        <SwiperSlide><img src={one}/></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperCard
