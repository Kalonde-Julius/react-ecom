import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import banner2 from '../../assets/images/banner2.avif';
import banner3 from '../../assets/images/banner3.avif';

const Hero = () => {

  return (
    
        <section className='section-1'>
        <Swiper spaceBetween={0} slidesPerView={1} 
        breakpoints={{ 
            1024: {
                slidesPerView: 1,
                spaceBetween: 0,
            }
         }}>
            <SwiperSlide>
                <div className='content' 
                    style={{ backgroundImage: `url(${banner2})` }}> 
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='content' 
                    style={{ backgroundImage: `url(${banner3})` }}> 
                </div>
            </SwiperSlide>

        </Swiper>
    </section>

  )
}

export default Hero