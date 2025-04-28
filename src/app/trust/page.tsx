"use client";

import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <div
        className="flex flex-col md:flex-row justify-between pt-24 min-w-0 h-[917px] md:h-[880px] bg-no-repeat bg-cover bg-[position:left] 
  bg-[url('/TrustMobileBg.svg')] md:bg-[url('/TrustBg.svg')]"
      ></div>

      <main className="flex flex-col items-center justify-center m-3 space-y-5 sm:m-20 sm:gap-10">
        <div className="relative group w-full h-[692px] overflow-hidden cursor-pointer">
          <div className="hidden sm:block w-full h-full relative">
            <Image
              src="/TrustImg.svg"
              alt="Image"
              fill
              className="object-cover"
            />

            <div className="absolute top-8 bottom-8 left-8 p-10 space-y-10 text-white h-auto w-[596px] bg-black/30 backdrop-blur-sm flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="font-medium text-4xl font-serif">
                Dr. M. D. Sachidananda Murthy Memorial Educational Trust
              </p>
              <p className="font-normal text-2xl max-w-lg">
                Founded in March 2013 by Dr. Arjun Sachidanand, the Dr. M. D.
                Sachidananda Murthy Memorial Educational Trust® began with a
                mission to improve education and has since expanded into
                healthcare. Recognized under Sections 12A and 80G of the Income
                Tax Act, the Trust organizes initiatives like Sudhanand Arogya
                Vahini, a mobile health service for underserved communities, and
                Cure+ Blood Bank, ensuring timely access to safe blood. The
                Trust remains committed to service, accessibility, and long-term
                impact in education and healthcare.
              </p>
            </div>
          </div>

          <div className="sm:hidden flex justify-center w-full h-[910px] relative">
            <div className="w-[90%] h-auto mx-auto">
              <Image
                src="/TrustMobileImg.svg"
                alt="Mobile Image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="relative group w-full h-[692px] overflow-hidden cursor-pointer">
          <div className="hidden sm:block w-full h-full relative">
            <Image
              src="/BloodBankImg.svg"
              alt="Image"
              fill
              className="object-cover"
            />

            <div className="absolute top-8 bottom-8 right-8 p-10 space-y-10 text-white h-auto w-[596px] bg-black/30 backdrop-blur-sm flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="font-medium text-4xl font-serif">
                CurePlus Blood Bank
              </p>
              <p className="font-normal text-2xl max-w-lg">
                Cure+ Blood Bank, an initiative by Dr. M. D. Sachidananda Murthy
                Memorial Educational Trust®, ensures the availability of blood
                across rural Karnataka. Based in Mysuru, it houses 2,000 units
                of blood, supporting Cure+ Hospitals in remote areas. Our mobile
                Sudhanand Arogya Vahinis (Mobile Pathology Labs and Health
                Centers) facilitate swift transportation, reducing the need for
                long-distance travel and improving access to life-saving
                healthcare services in underserved communities.
              </p>
            </div>
          </div>

          <div className="sm:hidden flex justify-center w-full h-[910px] relative">
            <div className="w-[90%] h-auto mx-auto">
              <Image
                src="/BloodBankMobileImg.svg"
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
              src="/ArogyaVahiniImg.svg"
              alt="Image"
              fill
              className="object-cover"
            />

            <div className="absolute top-8 bottom-8 left-8 p-10 space-y-10 text-white h-auto w-[596px] bg-black/30 backdrop-blur-sm flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="font-medium text-4xl font-serif">
                Sudhanand Arogya Vahini{" "}
              </p>
              <p className="font-normal text-2xl max-w-lg">
                In partnership with SAS Poorna Arogya Health Care and Cure+
                Hospitals, Dr. M. D. Sachidananda Murthy Memorial Trust launched
                the Sudhanand Arogya Vahini (SAV), a mobile healthcare unit
                serving rural communities. During the Covid-19 pandemic, SAV
                offered lab tests, telemedicine consultations, and data
                collection, helping patients avoid exposure and travel costs.
                The SAV played a crucial role in providing healthcare to those
                unable to access services due to travel restrictions or safety
                concerns.
              </p>
            </div>
          </div>

          <div className="sm:hidden flex justify-center w-full h-[910px] relative">
            <div className="w-[90%] h-auto mx-auto">
              <Image
                src="/ArogyaVahiniMobileImg.svg"
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
