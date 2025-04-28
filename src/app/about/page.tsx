"use client";

import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <div
        className="flex flex-col md:flex-row justify-between pt-24 min-w-0 h-[917px] md:h-[880px] bg-no-repeat bg-cover bg-[position:left] 
  bg-[url('/BgMobile4.svg')] md:bg-[url('/Bg4.svg')]"
      ></div>

      <main className="mx-5 sm:mx-25">
        <div className="py-15 space-x-5 sm:space-x-25 flex flex-col sm:flex-row justify-center gap-5 sm:gap-0">
          <div className="bg-[#F6F7F7] border border-[#D9D9D9] w-full sm:w-[600px] h-[auto] sm:h-[337px] flex flex-col p-5 sm:p-15 items-center space-y-5 sm:space-y-10">
            <span className="text-2xl sm:text-3xl font-bold font-serif">
              Vision
            </span>
            <span className="text-lg sm:text-xl font-normal text-center">
              To provide affordable, accessible, inclusive & quality healthcare
              services to five million rural and urban poor by 2025.
            </span>
          </div>

          <div className="bg-[#F6F7F7] border border-[#D9D9D9] w-full sm:w-[600px] h-[auto] sm:h-[337px] flex flex-col p-5 sm:p-15 items-center space-y-5 sm:space-y-10">
            <span className="text-2xl sm:text-3xl font-bold font-serif">
              Mission
            </span>
            <span className="text-lg sm:text-xl font-normal text-center">
              To serve the underserved in restoration and maintenance of their
              health through implementation of suitable healthcare schemes &
              development of integrated healthcare infrastructure always keeping
              the focus on the beneficiary.
            </span>
          </div>
        </div>

        <div className="aspect-w-16 aspect-h-9 w-full mx-auto my-10 sm:my-20 flex justify-center">
          <iframe
            className="w-full h-[300px] sm:h-[810px]"
            src="https://www.youtube.com/embed/tpZdN8ijU9c"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full overflow-x-auto sm:overflow-visible">
          <div className="w-full overflow-x-hidden sm:overflow-visible">
            <div className="flex flex-col sm:flex-row flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-5 sm:gap-6 mx-auto my-10 sm:my-20">
              <iframe
                className="w-[90%] sm:w-[230px] h-[200px] sm:h-[230px]"
                src="https://www.youtube.com/embed/tpZdN8ijU9c"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="w-[90%] sm:w-[230px] h-[200px] sm:h-[230px]"
                src="https://www.youtube.com/embed/389OFMyx4BA?start=36"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="w-[90%] sm:w-[230px] h-[200px] sm:h-[230px]"
                src="https://www.youtube.com/embed/wW_WOzha5to"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="w-[90%] sm:w-[230px] h-[200px] sm:h-[230px]"
                src="https://www.youtube.com/embed/7Ua-RMh3I2c"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                className="w-[90%] sm:w-[230px] h-[200px] sm:h-[230px]"
                src="https://www.youtube.com/embed/2-PzV8G9S6A"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-10 sm:gap-0">
          <div className="flex flex-col sm:w-[60%] lg:w-[50%]">
            <span className="font-bold text-2xl sm:text-3xl text-center sm:text-left">
              Monthly News Letter - March 2025
            </span>
            <span className="mt-5 sm:mt-7 text-center sm:text-left">
              <button className="w-full sm:w-40 bg-[#0A72BB] text-white p-3">
                Download PDF
              </button>
            </span>
            <span className="mt-10 sm:mt-15 text-lg sm:text-xl font-normal max-w-md text-center sm:text-left">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla.
            </span>
          </div>
          <div className="flex justify-center sm:justify-start">
            <Image src="/Img8.svg" alt="Image" width={400} height={400} />
          </div>
        </div>

        <div className="font-bold text-3xl mt-10 sm:mt-30 flex justify-center">
          Our Leaders
        </div>
      </main>
    </>
  );
};

export default Page;
