'use client'
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import BannerOne from '@/assests/1710053029215673.png'
import BannerTwo from '@/assests/1708243878905690.png'
import BannerThree from '@/assests/170693196871673.png'
import BannerFour from '@/assests/169017050988.webp'

// const Banner = () => {
//     const [currentSlider, setCurrentSlider] = useState(0);
//     const sliders = [BannerOne , BannerTwo , BannerThree];
//     const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === sliders.length - 1 ? 0 : currentSlider + 1));
//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             nextSlider();
//         }, 3000);
//         return () => clearInterval(intervalId);
//     }, [currentSlider]);

//     return (
//         <div>
//              <div >
//             <div className="w-full mx-auto h-[240px] md:h-[440px] flex flex-col lg:flex-row items-center overflow-hidden gap-5 lg:gap-10 px-10">
//                 <div className="relative overflow-hidden">
//                     {/* dots */}
//                     <div className="flex h-fit rounded-full z-50 absolute right-0 bottom-1/2 w-fit gap-1 rotate-90">
//                         {sliders.map((_, inx) => (
//                             <button key={inx} onClick={() => setCurrentSlider(inx)}
//                                 className={`rounded-full duration-300 bg-white ${currentSlider === inx ? 'w-10' : 'w-2'} h-2`}>
//                             </button>
//                         ))}
//                     </div>
//                     {/* slider container */}
//                     <div className="ease-linear duration-300 flex flex-col h-60 sm:h-96 md:h-[540px] transform-gpu relative" style={{ transform: `translateY(-${currentSlider * 100}%)` }}>
//                         {/* sliders */}
//                         {sliders.map((_, inx) => (
//                             <div key={inx} className="min-w-full duration-200 before:content-['Image'] before:bg-black/20 before:-z-10 before:absolute before:text-3xl before:flex before:justify-center before:items-center before:text-black/40 before:inset-0 relative">
//                                 <Image src={_} className="w-full h-60 sm:h-96 md:h-[540px] " alt={`Slider - ${inx + 1}`} />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </div>
//     );
// };

// export default Banner;




const Banner = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const carouselImages = [BannerOne, BannerTwo , BannerThree , BannerFour];
    const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1);
    const nextSlider = useCallback(() => setCurrentSlider((currentSlider) => currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1), [carouselImages.length]);
    useEffect(() => {
        const intervalId = setInterval(() => {
          nextSlider();
        }, 3000);
        return () => clearInterval(intervalId);
      }, [nextSlider]);
    return (
        <div>
            <div className="h-60 w-full md:h-[470px] lg:h-[540px] relative overflow-hidden">
       
        {/* dots */}
        <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
          {carouselImages.map((_, inx) => (
            <button key={_} onClick={() => setCurrentSlider(inx)} className={`rounded-full duration-500 bg-black ${currentSlider === inx ? "w-8" : "wz-2"} h-2`}></button>
          ))}
        </div>
        {/* Carousel container */}
        <div className="ease-linear duration-500 flex transform-gpu" style={{ transform: `translateX(-${currentSlider * 100}%)`}}>
          {/* sliders */}
          {carouselImages.map((slide, inx) => (
            <Image key={slide} src={slide} className="w-full h-60 bg-black/20 sm:h-96 md:h-[540px] bg-cover" alt={`Slider - ${inx + 1}`}/>
          ))}
        </div>
    </div>


    
        </div>
    );
};

export default Banner;