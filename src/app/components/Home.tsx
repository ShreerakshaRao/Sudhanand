"use client";

import React, { useEffect } from "react";
import Image from "next/image";

const Home = () => {
  useEffect(() => {
    // Prevent horizontal scrolling globally after initial render
    document.body.style.overflowX = 'hidden';
  }, []);

  return (
    <>
      <div className="w-full overflow-x-hidden">
        <main className="overflow-x-hidden">

          {/* Hero Section */}
          <div className="flex flex-col md:flex-row justify-between pt-24 bg-[url(/Bg1.svg)] h-[600px] md:h-[871px] bg-no-repeat bg-cover bg-[position:left] min-w-0"></div>

          {/* Our Businesses Section */}
          <div className="flex flex-col md:flex-row p-5 md:p-20 md:space-x-30 items-center justify-center space-y-8 md:space-y-0 min-w-0">
            <div className="space-y-5 text-center md:text-left min-w-0">
              <div className="font-bold text-2xl md:text-3xl font-serif">
                Our Businesses
              </div>
              <div className="font-normal text-base md:text-xl max-w-full md:max-w-2xs px-4 md:px-0">
                We excel across industries, with a strong focus on medical
                solutions that enhance pharmacy operations and lab testing. Our
                tech division powers businesses with intelligent automation, while
                our hospitality arm offers premium resort experiences. United by
                innovation and quality, we deliver value across healthcare,
                technology, and hospitality.
              </div>
            </div>

            <div className="px-4 md:px-0 min-w-0">
              <Image
                src="/Img1.svg"
                alt="Image"
                width={800}
                height={300}
                className="w-full max-w-xs md:max-w-full"
              />
            </div>
          </div>

          {/* Quote and Videos Section */}
          <div className="bg-[#F6F7F7] py-10 md:h-[686px] min-w-0">
            <div className="flex flex-col text-2xl md:text-5xl font-medium font-serif justify-center items-center pt-10 md:pt-24 text-center space-y-2">
              <span>“Businesses that work for</span>
              <span>a better tomorrow”</span>
            </div>

            <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 mt-10 px-4 w-full overflow-x-hidden min-w-0">
              <iframe
                className="w-full max-w-[400px] h-[220px] md:h-[260px]"
                src="https://www.youtube.com/embed/tpZdN8ijU9c"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="w-full max-w-[400px] h-[220px] md:h-[260px]"
                src="https://www.youtube.com/embed/389OFMyx4BA?start=36"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="w-full max-w-[400px] h-[220px] md:h-[260px]"
                src="https://www.youtube.com/embed/wW_WOzha5to"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Founder Background Image Section */}
          <div className="flex flex-col md:flex-row justify-between pt-24 bg-[url(/Img2.svg)] h-[600px] md:h-[1163px] bg-no-repeat bg-cover bg-[position:right] min-w-0"></div>

          {/* Founder Info Section */}
          <div className="m-4 md:m-20 flex flex-col md:flex-row gap-y-10 md:gap-x-20 items-center min-w-0">
            <div>
              <Image
                src="/Founder1.svg"
                alt="Image"
                width={350}
                height={350}
                className="w-[90%] max-w-[250px] md:w-[350px]"
              />
            </div>

            <div className="space-y-5 text-center md:text-left min-w-0">
              <div className="font-bold text-3xl md:text-4xl font-serif">
                Our Founder & Chairman
              </div>
              <div className="font-medium text-2xl md:text-[40px] font-serif">
                Dr. Arjun Sachidanand
              </div>
              <div className="text-lg md:text-2xl text-[#333333] font-medium max-w-md md:max-w-lg px-4 md:px-0">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
                officiis aut, earum eveniet cum suscipit veniam obcaecati, odit
                debitis corporis eius nihil nostrum quas? Consectetur sapiente
                dolorem ea fuga est?
              </div>
              <div>Signature</div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
