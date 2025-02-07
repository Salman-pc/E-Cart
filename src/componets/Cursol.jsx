import delivary from '../assets/delivary.jpg'
import speciaoffer from '../assets/speciaoffer.jpg'
import perfume from '../assets/perfume.jpg'
import makeupkit from '../assets/makeupkit.jpg'
import furniture from '../assets/furniture.avif'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Cursol() {
  return (
    <div className='mt-4 px-2 px-md-4'>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      
      style={{height:'300px'}}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide className='rounded-3 overflow-hidden aspect-[16/9] border'><img className=' object-fit-fill' src={speciaoffer} alt="" /></SwiperSlide>
      <SwiperSlide className='rounded-3 overflow-hidden aspect-[16/9] border'><img className=' object-fit-fill' src={makeupkit} alt="" /></SwiperSlide>
      <SwiperSlide className='rounded-3 overflow-hidden aspect-[16/9] border'><img className=' object-fit-fill' src={perfume} alt="" /></SwiperSlide>
      <SwiperSlide className='rounded-3 overflow-hidden aspect-[16/9] border'><img className=' object-fit-fill' src={furniture} alt="" /></SwiperSlide>
      <SwiperSlide className='rounded-3 overflow-hidden aspect-[16/9] border'><img className=' object-fit-fill' src={delivary} alt="" /></SwiperSlide>
       aspect-[16/9]
    </Swiper>
  </div>
  )
}

export default Cursol




