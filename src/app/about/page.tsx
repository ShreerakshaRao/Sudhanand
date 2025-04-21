"use client";

import React from "react";
import Image from "next/image";
const Page = () => {
  return (
    <>
      <div className="flex justify-between pt-24 bg-[url(/Bg4.svg)] h-[880px] bg-no-repeat bg-cover bg-[position:right]"></div>

      <main className="mx-25">
        <div className="py-15 space-x-25 flex justify-center">
          <div className="bg-[#F6F7F7] border border-[#D9D9D9] w-[600px] h-[337px] flex flex-col p-15 items-center space-y-10">
            <span className="text-3xl font-bold font-serif">Vision</span>
            <span className="text-xl font-normal">
              To provide affordable, accessible, inclusive & quality healthcare
              services to five million rural and urban poor by 2025.
            </span>
          </div>

          <div className="bg-[#F6F7F7] border border-[#D9D9D9] w-[600px] h-[337px] flex flex-col p-15 items-center space-y-10">
            <span className="text-3xl font-bold font-serif">Mission</span>
            <span className="text-xl font-normal">
              To serve the underserved in restoration and maintenance of their
              health through implementation of suitable healthcare schemes &
              development of integrated healthcare infrastructure always keeping
              the focus on the beneficiary.
            </span>
          </div>
        </div>

        <div className="aspect-w-16 aspect-h-9 w-full mx-auto my-20 flex justify-center">
          <iframe
            className="w-full h-[810px]"
            src="https://www.youtube.com/embed/tpZdN8ijU9c"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="aspect-w-16 aspect-h-9 w-full max-w-3xl mx-auto my-20 flex justify-center space-x-5">
            <iframe
              className="w-[230px] h-[230px]"
              src="https://www.youtube.com/embed/tpZdN8ijU9c"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              className="w-[230px] h-[230px]"
              src="https://www.youtube.com/embed/389OFMyx4BA?start=36"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              className="w-[230px] h-[230px]"
              src="https://www.youtube.com/embed/wW_WOzha5to"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              className="w-[230px] h-[230px]"
              src="https://www.youtube.com/embed/7Ua-RMh3I2c"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              className="w-[230px] h-[230px]"
              src="https://www.youtube.com/embed/2-PzV8G9S6A"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="font-bold text-3xl">
              Monthly News Letter - March 2025
            </span>
            <span className="mt-7">
              <button className="w-full sm:w-40 bg-[#0A72BB] text-white p-3">
                Download PDF
              </button>
            </span>
            <span className="mt-15 text-xl font-normal max-w-md">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla.
            </span>
          </div>
          <div>
            <Image src="/Img8.svg" alt="Image" width={400} height={400} />
          </div>
        </div>

        <div className="font-bold text-3xl mt-30 flex justify-center">
          Our Leaders
        </div>
      </main>
    </>
  );
};

export default Page;
