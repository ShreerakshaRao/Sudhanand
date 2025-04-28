"use client";

import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between pt-24 bg-[url(/TechBg.svg)] h-[500px] md:h-[880px] bg-no-repeat bg-cover bg-[position:left] md:bg-[position:right]"></div>

      <main className="flex flex-col items-center justify-center mx-10 my-20 gap-10">
        <div className="relative group w-full h-[692px] overflow-hidden cursor-pointer">
          <Image src="/SbplImg.svg" alt="Image" fill className="object-cover" />

          <div className="absolute top-8 bottom-8 left-8 p-10 space-y-10 text-white h-auto w-[596px] bg-black/30 backdrop-blur-sm flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-300">
            <p className="font-medium text-4xl font-serif">
              Sudhanand Business Solutions Pvt. Ltd{" "}
            </p>
            <p className="font-normal text-2xl max-w-lg">
              Sudhanand Business Solutions Pvt. Ltd. (SBPL), based in Mysuru, is
              a growing IT and ITES company with presence in India, the USA,
              Saudi Arabia, and the UAE. Since 2019, SBPL has built a strong
              reputation with 100+ professionals. Its IT wing, launched in 2022,
              specializes in Software Testing and Data Science using Agile,
              Selenium, Jira, and RPA. In ITES, SBPL supports pre-underwriting,
              claims, bookrolls, and accounting, serving top clients like
              Cabrillo Coastal in the U.S.
            </p>
          </div>
        </div>

        <div className="relative group w-full h-[692px] overflow-hidden  cursor-pointer">
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
              TiaMeds Technologies Pvt. Ltd., founded in early 2024, is the tech
              arm of the Sudhanand Group, focused on developing cutting-edge,
              in-house software solutions for the healthcare and pharma sectors.
              With expertise in development, testing, data science, BI,
              analytics, and digital marketing, our team delivers end-to-end
              products built for impact. While healthcare is our current focus,
              our tech capabilities are industry-agnostic, ready to drive
              innovation across sectors.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
