"use client";

import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <main>
        <div className="flex justify-between pt-24 bg-[url(/Bg1.svg)] h-[871px] bg-no-repeat bg-cover bg-[position:right]"></div>

        <div className="flex p-20 space-x-30 items-center justify-center">
          <div className="space-y-5">
            <div className="font-bold text-3xl font-serif">Our Businesses</div>
            <div className="font-normal text-xl max-w-2xs">
              We excel across industries, with a strong focus on medical
              solutions that enhance pharmacy operations and lab testing. Our
              tech division powers businesses with intelligent automation, while
              our hospitality arm offers premium resort experiences. United by
              innovation and quality, we deliver value across healthcare,
              technology, and hospitality.
            </div>
          </div>

          <div>
            <Image src="/Img1.svg" alt="Image" width={800} height={300} />
          </div>
        </div>

        <div className="bg-[#F6F7F7] h-[686px]">
          <div className="flex flex-col text-5xl font-medium font-serif justify-center items-center pt-24 text-center">
            <span>“Businesses that work for</span>
            <span>a better tomorrow”</span>
          </div>

          <div className="aspect-w-16 aspect-h-9 w-full max-w-3xl mx-auto my-20 flex justify-center">
            <iframe
              className="w-[400px] h-[260px]"
              src="https://www.youtube.com/embed/tpZdN8ijU9c"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              className="w-[400px] h-[260px]"
              src="https://www.youtube.com/embed/389OFMyx4BA?start=36"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              className="w-[400px] h-[260px]"
              src="https://www.youtube.com/embed/wW_WOzha5to"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="flex justify-between pt-24 bg-[url(/Img2.svg)] h-[1163px] bg-no-repeat bg-cover bg-[position:right]"></div>

        <div className="m-20 flex gap-x-20">
          <div>
            <Image src="/Founder1.svg" alt="Image" width={350} height={350} />
          </div>

          <div className="space-y-5">
            <div className="font-bold text-4xl font-serif">
              Our Founder & Chairman
            </div>
            <div className="font-medium text-[40px] font-serif">
              Dr. Arjun Sachidanand
            </div>
            <div className="max-w-lg text-2xl text-[#333333] font-medium ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
              officiis aut, earum eveniet cum suscipit veniam obcaecati, odit
              debitis corporis eius nihil nostrum quas? Consectetur sapiente
              dolorem ea fuga est?
            </div>
            <div>Signature</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
