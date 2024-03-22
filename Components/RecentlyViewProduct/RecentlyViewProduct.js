import React from 'react';
import ImageThree from '@/assests/MobileImage/20231109_1699518759_729998.jpeg'
import Image from 'next/image';
import Link from 'next/link';
const RecentlyViewProduct = () => {
    return (
        <div>


<div className="space-y-2 py-3">
            <h1 className='text-center font-bold text-xl'>Recently Viewed</h1>


            <div className="flex items-center justify-center">
                <div className="flex items-center rounded overflow-hidden w-full py-2 gap-1 hover:box-shadow-sm duration-300">
                    <div >
                        <figure className="min-w-[90px] w-[90px] h-[90px] relative group">
                            <Image className="" src={ImageThree} />
                        </figure>
                    </div>
                    <div>
                        <a className="" >MacBook Air M1 13-in...</a>
                        <p className="">98000 <span>৳</span></p>
                        <div className="mt-1">

                            <button className=" text-2xs bg-[#F17E23] border border-primary rounded py-1 px-[2px] md:px-2 duration-300 text-white">Buy Now</button>

                            <button className=" text-2xs bg-white border border-primary rounded py-1 px-[2px] md:px-2 "><i className="bi bi-diagram-2 text-base"></i> Add to compare</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="flex items-center rounded overflow-hidden w-full py-2 gap-1 hover:box-shadow-sm duration-300">
                    <a >
                        <figure className="min-w-[90px] w-[90px] h-[90px] relative group">
                            <Image className="" src={ImageThree} />
                        </figure>
                    </a>
                    <div>
                        <a className="" >MacBook Air M1 13-in...</a>
                        <p className="">98000 <span>৳</span></p>
                        <div className="mt-1">
                            <button className=" text-2xs bg-[#F17E23] border border-primary rounded py-1 px-[2px] md:px-2 duration-300 text-white">Buy Now</button>
                            <button className=" text-2xs bg-white border border-primary rounded py-1 px-[2px] md:px-2 "><i className="bi bi-diagram-2 text-base"></i> Add to compare</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="flex items-center rounded overflow-hidden w-full py-2 gap-1 hover:box-shadow-sm duration-300">
                    <a >
                        <figure className="min-w-[90px] w-[90px] h-[90px] relative group">
                            <Image className="" src={ImageThree} />
                        </figure>
                    </a>
                    <div>
                        <a className="" >MacBook Air M1 13-in...</a>
                        <p className="">98000 <span>৳</span></p>
                        <div className="mt-1">
                            <button className=" text-2xs bg-[#F17E23] border border-primary rounded py-1 px-[2px] md:px-2 duration-300 text-white">Buy Now</button>
                            <button className=" text-2xs bg-white border border-primary rounded py-1 px-[2px] md:px-2 "><i className="bi bi-diagram-2 text-base"></i> Add to compare</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="flex items-center rounded overflow-hidden w-full py-2 gap-1 hover:box-shadow-sm duration-300">
                    <a >
                        <figure className="min-w-[90px] w-[90px] h-[90px] relative group">
                            <Image className="" src={ImageThree} />
                        </figure>
                    </a>
                    <div>
                        <a className="" >MacBook Air M1 13-in...</a>
                        <p className="">98000 <span>৳</span></p>
                        <div className="mt-1">
                            <button className=" text-2xs bg-[#F17E23] border border-primary rounded py-1 px-[2px] md:px-2 duration-300 text-white">Buy Now</button>
                            <button className=" text-2xs bg-white border border-primary rounded py-1 px-[2px] md:px-2 "><i className="bi bi-diagram-2 text-base"></i> Add to compare</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="flex items-center rounded overflow-hidden w-full py-2 gap-1 hover:box-shadow-sm duration-300">
                    <a >
                        <figure className="min-w-[90px] w-[90px] h-[90px] relative group">
                            <Image className="" src={ImageThree} />
                        </figure>
                    </a>
                    <div>
                        <a className="" >MacBook Air M1 13-in...</a>
                        <p className="">98000 <span>৳</span></p>
                        <div className="mt-1">
                            <button className=" text-2xs bg-[#F17E23] border border-primary rounded py-1 px-[2px] md:px-2 duration-300 text-white">Buy Now</button>
                            <button className=" text-2xs bg-white border border-primary rounded py-1 px-[2px] md:px-2 "><i className="bi bi-diagram-2 text-base"></i> Add to compare</button>
                        </div>
                    </div>
                </div>
            </div>


          
        </div>



        </div>
    );
};

export default RecentlyViewProduct;