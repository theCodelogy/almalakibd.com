import Image from 'next/image';
import React from 'react';
import imageOne from '@/assests/CategoryImage/brand-apple.svg'
import ImageTwo from '@/assests/CategoryImage/samsung-logo-on-transparent-background-free-vector.jpg'
import ImageThree from '@/assests/CategoryImage/download.png'
import ImageFour from '@/assests/CategoryImage/download (1).png'
import ImageFive from '@/assests/CategoryImage/download (2).png'

const Brand = () => {
    return (
        <div>
             <div className="bg-white w-full px-4 pt-16 pb-16" id="faq">
      <h2 className="text-4xl font-bold text-center">Happy Customers</h2>
      <p className="pt-6 pb-8 text-base max-w-2xl text-center m-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit nam maxime quas fugiat tempore blanditiis, eveniet quia accusantium.
      </p>
      <div className="mx-auto w-full max-w-4xl bg-white">
        <div className="text-center justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
          <a target="_blank" href="">
            <Image alt="" className="h-20 mx-auto" src={imageOne} />
          </a>
          <a target="_blank" href="">
            <Image alt="" className="h-20 mx-auto" src={ImageTwo} />
          </a>
          <a target="_blank" href="">
            <Image alt="" className="h-20 mx-auto" src={ImageThree} />
          </a>
          <a target="_blank" href="">
            <Image alt="" className="h-20 mx-auto" src={ImageFour} />
          </a>
          <a target="_blank" href="">
            <Image alt="" className="h-20 mx-auto" src={ImageFive} />
          </a>
         
        </div>
      </div>
    </div>
        </div>
    );
};

export default Brand;