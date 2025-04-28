"use client";

import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <div
        className="flex flex-col md:flex-row justify-between pt-24 min-w-0 h-[917px] md:h-[880px] bg-no-repeat bg-cover bg-[position:left] 
  bg-[url('/TechMobileBg.svg')] md:bg-[url('/TechBg.svg')]"
      ></div>

      <main className="flex flex-col items-center justify-center m-3 space-y-5 sm:m-20 sm:gap-10">
        <div className="relative group w-full h-[692px] overflow-hidden cursor-pointer">
          <div className="hidden sm:block w-full h-full relative">
            <Image
              src="/SbplImg.svg"
              alt="Image"
              fill
              className="object-cover"
            />

            <div className="absolute top-8 bottom-8 left-8 p-10 space-y-10 text-white h-auto w-[596px] bg-black/30 backdrop-blur-sm flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="font-medium text-4xl font-serif">
                Sudhanand Business Solutions Pvt. Ltd{" "}
              </p>
              <p className="font-normal text-2xl max-w-lg">
                Sudhanand Business Solutions Pvt. Ltd. (SBPL), based in Mysuru,
                is a growing IT and ITES company with presence in India, the
                USA, Saudi Arabia, and the UAE. Since 2019, SBPL has built a
                strong reputation with 100+ professionals. Its IT wing, launched
                in 2022, specializes in Software Testing and Data Science using
                Agile, Selenium, Jira, and RPA. In ITES, SBPL supports
                pre-underwriting, claims, bookrolls, and accounting, serving top
                clients like Cabrillo Coastal in the U.S.
              </p>
            </div>
          </div>

          <div className="sm:hidden flex justify-center w-full h-[910px] relative">
            <div className="w-[90%] h-auto mx-auto">
              <Image
                src="/SbplMobileImg.svg"
                alt="Mobile Image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="relative group w-full h-[692px] overflow-hidden  cursor-pointer">
          <div className="hidden sm:block w-full h-full relative">
            <Image
              src="/TiamedsImg.svg"
              alt="Image"
              fill
              className="object-cover"
            />

            <div className="absolute top-8 bottom-8 right-8 p-10 space-y-10 text-white h-auto w-[596px] bg-black/30 backdrop-blur-sm flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="font-medium text-4xl font-serif">
                TiaMeds Technologies Pvt. Ltd.{" "}
              </p>
              <p className="font-normal text-2xl max-w-lg">
                TiaMeds Technologies Pvt. Ltd., founded in early 2024, is the
                tech arm of the Sudhanand Group, focused on developing
                cutting-edge, in-house software solutions for the healthcare and
                pharma sectors. With expertise in development, testing, data
                science, BI, analytics, and digital marketing, our team delivers
                end-to-end products built for impact. While healthcare is our
                current focus, our tech capabilities are industry-agnostic,
                ready to drive innovation across sectors.
              </p>
            </div>
          </div>

          <div className="sm:hidden flex justify-center w-full h-[910px] relative">
            <div className="w-[90%] h-auto mx-auto">
              <Image
                src="/TiamedsMobileImg.svg"
                alt="Mobile Image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
