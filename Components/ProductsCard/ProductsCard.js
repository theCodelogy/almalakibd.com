import Image from "next/image";
import React from "react";
import ImageOne from "@/assests/MobileImage/20240123_1705987892_224395.jpeg";
import ImageTwo from "@/assests/MobileImage/20230924_1695544794_808872.jpeg";
import ImageThree from "@/assests/MobileImage/20231109_1699518759_729998.jpeg";
import Link from "next/link";

const ProductsCard = () => {
  return (
    <div className="bg-[#F3F3F3] rounded-md max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-5 my-10">
      <h1 className="text-xl font-bold my-5">Products</h1>

      <div className=" grid grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="relative group text-center duration-300 box-shadow-sm bg-white bg-opacity-25 px-2 py-6 print:py-4 flex flex-col justify-between items-center rounded-2xl h-full">
          <Link
            href={"product/id"}
            className="flex flex-col justify-between items-center w-full"
          >
            <div className="absolute top-0 right-0">
              <p className="text-sm duration-300 h-5 px-1 bg-primary text-[#F17E23] font-bold rounded-l rounded-tr">
                23 % OFF
              </p>
            </div>
            <figure className="w-[145px] h-[145px] relative group print:w-[70px] print:h-[70px] print:overflow-hidden">
              <Image
                alt="iPhone 11"
                loading="lazy"
                width="145"
                height="145"
                decoding="async"
                data-nimg="1"
                className=""
                src={ImageOne}
                style={{ color: "transparent" }}
              />
            </figure>
            <p className="font-SFProDisplaySemibold text-sm mt-5 px-3">
              iPhone 11
            </p>
            <p className="font-SFProDisplaySemibold text-tiny my-2 group-hover:text-primary duration-300">
              58000৳
              <del className="font-SFProDisplayMedium ml-2 text-xs">৳75000</del>
            </p>
          </Link>
          <div className="grid grid-rows-1 lg:grid-cols-2 gap-1 print:hidden">
            <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-[#F17E23] border border-primary rounded py-1 px-[2px] md:px-2 text-white duration-300">
              Buy Now
            </button>
            <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-white border border-primary rounded py-1 px-[2px] md:px-2 text-primary duration-300">
              Add to Cart
            </button>
          </div>
        </div>

        <article className="relative group text-center duration-300 box-shadow-sm bg-white bg-opacity-25 px-2 py-6 print:py-4 flex flex-col justify-between items-center rounded-2xl h-full">
          <a
            className="flex flex-col justify-between items-center w-full"
            href="/product/iphone-11"
          >
            <div className="absolute top-0 right-0">
              <p className="text-sm duration-300 h-5 px-1 bg-primary text-[#F17E23] font-bold rounded-l rounded-tr">
                23 % OFF
              </p>
            </div>
            <figure className="w-[145px] h-[145px] relative group print:w-[70px] print:h-[70px] print:overflow-hidden">
              <Image
                alt="iPhone 11"
                loading="lazy"
                width="145"
                height="145"
                decoding="async"
                data-nimg="1"
                className=""
                src={ImageOne}
                style={{ color: "transparent" }}
              />
            </figure>
            <p className="font-SFProDisplaySemibold text-sm mt-5 px-3">
              iPhone 11
            </p>
            <p className="font-SFProDisplaySemibold text-tiny my-2 group-hover:text-primary duration-300">
              58000৳
              <del className="font-SFProDisplayMedium ml-2 text-xs">৳75000</del>
            </p>
          </a>
          <div className="grid grid-rows-1 lg:grid-cols-2 gap-1 print:hidden">
            <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-[#F17E23] border border-primary rounded py-1 px-[2px] md:px-2 text-white duration-300">
              Buy Now
            </button>
            <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-white border border-primary rounded py-1 px-[2px] md:px-2 text-primary duration-300">
              Add to Cart
            </button>
          </div>
        </article>

        <article className="relative group text-center duration-300 box-shadow-sm bg-white bg-opacity-25 px-2 py-6 print:py-4 flex flex-col justify-between items-center rounded-2xl h-full">
          <a
            className="flex flex-col justify-between items-center w-full"
            href="/product/iphone-11"
          >
            <div className="absolute top-0 right-0">
              <p className="text-sm duration-300 h-5 px-1 bg-primary text-[#F17E23] font-bold rounded-l rounded-tr">
                23 % OFF
              </p>
            </div>
            <figure className="w-[145px] h-[145px] relative group print:w-[70px] print:h-[70px] print:overflow-hidden">
              <Image
                alt="iPhone 11"
                loading="lazy"
                width="145"
                height="145"
                decoding="async"
                data-nimg="1"
                className=""
                src={ImageOne}
                style={{ color: "transparent" }}
              />
            </figure>
            <p className="font-SFProDisplaySemibold text-sm mt-5 px-3">
              iPhone 11
            </p>
            <p className="font-SFProDisplaySemibold text-tiny my-2 group-hover:text-primary duration-300">
              58000৳
              <del className="font-SFProDisplayMedium ml-2 text-xs">৳75000</del>
            </p>
          </a>
          <div className="grid grid-rows-1 lg:grid-cols-2 gap-1 print:hidden">
            <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-[#F17E23] border border-primary rounded py-1 px-[2px] md:px-2 text-white duration-300">
              Buy Now
            </button>
            <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-white border border-primary rounded py-1 px-[2px] md:px-2 text-primary duration-300">
              Add to Cart
            </button>
          </div>
        </article>

        <article className="relative group text-center duration-300 box-shadow-sm bg-white bg-opacity-25 px-2 py-6 print:py-4 flex flex-col justify-between items-center rounded-2xl h-full">
          <a
            className="flex flex-col justify-between items-center w-full"
            href="/product/iphone-11"
          >
            <div className="absolute top-0 right-0">
              <p className="text-sm duration-300 h-5 px-1 bg-primary text-[#F17E23] font-bold rounded-l rounded-tr">
                23 % OFF
              </p>
            </div>
            <figure className="w-[145px] h-[145px] relative group print:w-[70px] print:h-[70px] print:overflow-hidden">
              <Image
                alt="iPhone 11"
                loading="lazy"
                width="145"
                height="145"
                decoding="async"
                data-nimg="1"
                className=""
                src={ImageOne}
                style={{ color: "transparent" }}
              />
            </figure>
            <p className="font-SFProDisplaySemibold text-sm mt-5 px-3">
              iPhone 11
            </p>
            <p className="font-SFProDisplaySemibold text-tiny my-2 group-hover:text-primary duration-300">
              58000৳
              <del className="font-SFProDisplayMedium ml-2 text-xs">৳75000</del>
            </p>
          </a>
          <div className="grid grid-rows-1 lg:grid-cols-2 gap-1 print:hidden">
            <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-[#F17E23] border border-primary rounded py-1 px-[2px] md:px-2 text-white duration-300">
              Buy Now
            </button>
            <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-white border border-primary rounded py-1 px-[2px] md:px-2 text-primary duration-300">
              Add to Cart
            </button>
          </div>
        </article>
        <article className="relative group text-center duration-300 box-shadow-sm bg-white bg-opacity-25 px-2 py-6 print:py-4 flex flex-col justify-between items-center rounded-2xl h-full">
          <a
            className="flex flex-col justify-between items-center w-full"
            href="/product/iphone-11"
          >
            <div className="absolute top-0 right-0">
              <p className="text-sm duration-300 h-5 px-1 bg-primary text-[#F17E23] font-bold rounded-l rounded-tr">
                23 % OFF
              </p>
            </div>
            <figure className="w-[145px] h-[145px] relative group print:w-[70px] print:h-[70px] print:overflow-hidden">
              <Image
                alt="iPhone 11"
                loading="lazy"
                width="145"
                height="145"
                decoding="async"
                data-nimg="1"
                className=""
                src={ImageOne}
                style={{ color: "transparent" }}
              />
            </figure>
            <p className="font-SFProDisplaySemibold text-sm mt-5 px-3">
              iPhone 11
            </p>
            <p className="font-SFProDisplaySemibold text-tiny my-2 group-hover:text-primary duration-300">
              58000৳
              <del className="font-SFProDisplayMedium ml-2 text-xs">৳75000</del>
            </p>
          </a>
          <div className="grid grid-rows-1 lg:grid-cols-2 gap-1 print:hidden">
            <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-[#F17E23] border border-primary rounded py-1 px-[2px] md:px-2 text-white duration-300">
              Buy Now
            </button>
            <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-white border border-primary rounded py-1 px-[2px] md:px-2 text-primary duration-300">
              Add to Cart
            </button>
          </div>
        </article>
        <article className="relative group text-center duration-300 box-shadow-sm bg-white bg-opacity-25 px-2 py-6 print:py-4 flex flex-col justify-between items-center rounded-2xl h-full">
          <a
            className="flex flex-col justify-between items-center w-full"
            href="/product/iphone-11"
          >
            <div className="absolute top-0 right-0">
              <p className="text-sm duration-300 h-5 px-1 bg-primary text-[#F17E23] font-bold rounded-l rounded-tr">
                23 % OFF
              </p>
            </div>
            <figure className="w-[145px] h-[145px] relative group print:w-[70px] print:h-[70px] print:overflow-hidden">
              <Image
                alt="iPhone 11"
                loading="lazy"
                width="145"
                height="145"
                decoding="async"
                data-nimg="1"
                className=""
                src={ImageOne}
                style={{ color: "transparent" }}
              />
            </figure>
            <p className="font-SFProDisplaySemibold text-sm mt-5 px-3">
              iPhone 11
            </p>
            <p className="font-SFProDisplaySemibold text-tiny my-2 group-hover:text-primary duration-300">
              58000৳
              <del className="font-SFProDisplayMedium ml-2 text-xs">৳75000</del>
            </p>
          </a>
          <div className="grid grid-rows-1 lg:grid-cols-2 gap-1 print:hidden">
            <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-[#F17E23] border border-primary rounded py-1 px-[2px] md:px-2 text-white duration-300">
              Buy Now
            </button>
            <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-white border border-primary rounded py-1 px-[2px] md:px-2 text-primary duration-300">
              Add to Cart
            </button>
          </div>
        </article>
        <article className="relative group text-center duration-300 box-shadow-sm bg-white bg-opacity-25 px-2 py-6 print:py-4 flex flex-col justify-between items-center rounded-2xl h-full">
          <a
            className="flex flex-col justify-between items-center w-full"
            href="/product/iphone-11"
          >
            <div className="absolute top-0 right-0">
              <p className="text-sm duration-300 h-5 px-1 bg-primary text-[#F17E23] font-bold rounded-l rounded-tr">
                23 % OFF
              </p>
            </div>
            <figure className="w-[145px] h-[145px] relative group print:w-[70px] print:h-[70px] print:overflow-hidden">
              <Image
                alt="iPhone 11"
                loading="lazy"
                width="145"
                height="145"
                decoding="async"
                data-nimg="1"
                className=""
                src={ImageOne}
                style={{ color: "transparent" }}
              />
            </figure>
            <p className="font-SFProDisplaySemibold text-sm mt-5 px-3">
              iPhone 11
            </p>
            <p className="font-SFProDisplaySemibold text-tiny my-2 group-hover:text-primary duration-300">
              58000৳
              <del className="font-SFProDisplayMedium ml-2 text-xs">৳75000</del>
            </p>
          </a>
          <div className="grid grid-rows-1 lg:grid-cols-2 gap-1 print:hidden">
            <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-[#F17E23] border border-primary rounded py-1 px-[2px] md:px-2 text-white duration-300">
              Buy Now
            </button>
            <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-white border border-primary rounded py-1 px-[2px] md:px-2 text-primary duration-300">
              Add to Cart
            </button>
          </div>
        </article>
        <article className="relative group text-center duration-300 box-shadow-sm bg-white bg-opacity-25 px-2 py-6 print:py-4 flex flex-col justify-between items-center rounded-2xl h-full">
          <a
            className="flex flex-col justify-between items-center w-full"
            href="/product/iphone-11"
          >
            <div className="absolute top-0 right-0">
              <p className="text-sm duration-300 h-5 px-1 bg-primary text-[#F17E23] font-bold rounded-l rounded-tr">
                23 % OFF
              </p>
            </div>
            <figure className="w-[145px] h-[145px] relative group print:w-[70px] print:h-[70px] print:overflow-hidden">
              <Image
                alt="iPhone 11"
                loading="lazy"
                width="145"
                height="145"
                decoding="async"
                data-nimg="1"
                className=""
                src={ImageOne}
                style={{ color: "transparent" }}
              />
            </figure>
            <p className="font-SFProDisplaySemibold text-sm mt-5 px-3">
              iPhone 11
            </p>
            <p className="font-SFProDisplaySemibold text-tiny my-2 group-hover:text-primary duration-300">
              58000৳
              <del className="font-SFProDisplayMedium ml-2 text-xs">৳75000</del>
            </p>
          </a>
          <div className="grid grid-rows-1 lg:grid-cols-2 gap-1 print:hidden">
            <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-[#F17E23] border border-primary rounded py-1 px-[2px] md:px-2 text-white duration-300">
              Buy Now
            </button>
            <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-white border border-primary rounded py-1 px-[2px] md:px-2 text-primary duration-300">
              Add to Cart
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ProductsCard;
