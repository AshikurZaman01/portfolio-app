import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Testimonials = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('../../../public/testimonials.json')
            .then((res) => res.json())
            .then((jsonData) => setData(jsonData))
            .catch((err) => console.log(err));
    }, []);

    const { name, position, testimonial, image } = data || {};

    return (
        <div>
            <div className='w-[80%] mx-auto text-center'>
                {data.length > 0 && (
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        {data.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className='space-y-5'>
                                    <div className='md:w-[250px] w-[200px] h-[200px] md:h-[300px] mx-auto '>
                                        <img className='w-full h-full rounded-full' src={testimonial.image} alt="" />
                                    </div>
                                    <h3 className='text-2xl font-bold '>{testimonial.name}</h3>
                                    <p className='text-base text-gray-500'>{testimonial.position}</p>
                                    <p className='text-justify'>{testimonial.testimonial}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </div>
    );
};

export default Testimonials;
