"use client";

import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <div
        className="flex flex-col md:flex-row justify-between pt-24 min-w-0 h-[917px] md:h-[880px] bg-no-repeat bg-cover bg-[position:left] 
  bg-[url('/HospitalityMobileBg.svg')] md:bg-[url('/HospitalityBg.svg')]"
      ></div>

      <main className="flex flex-col items-center justify-center m-3 space-y-5 sm:m-20 sm:gap-10">
        <div className="relative group w-full h-[692px] overflow-hidden cursor-pointer">
          <div className="hidden sm:block w-full h-full relative">
            <Image
              src="/CandolimImg.svg"
              alt="Image"
              fill
              className="object-cover"
            />
            <div className="absolute top-8 bottom-8 left-8 p-10 space-y-10 text-white h-auto w-[596px] bg-black/30 backdrop-blur-sm flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="font-medium text-4xl font-serif">
                Sudhanand Candolim In Goa
              </p>
              <p className="font-normal text-2xl max-w-lg">
                Nova Candolim by Sudhanand is a boutique hotel in North Goa,
                ideally located on Candolim Main Road near Fort Aguada and Baga
                Beach, with Candolim Beach just a short walk away. Our stylish,
                air-conditioned rooms offer cozy luxury with modern comforts.
                Guests can enjoy delicious meals at our pool-view restaurant,
                unwind at the vibrant outdoor restobar, or relax at our
                top-floor spa. Perfect for couples, families, or solo travelers,
                we offer a truly memorable Goan escape.
              </p>
            </div>
          </div>
          <div className="sm:hidden flex justify-center w-full h-[910px] relative">
            <div className="w-[90%] h-auto mx-auto">
              <Image
                src="/CandolimMobileImg.svg"
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
              src="/FourSeasonsImg.svg"
              alt="Image"
              fill
              className="object-cover"
            />

            <div className="absolute top-8 bottom-8 right-8 p-10 space-y-10 text-white h-auto w-[596px] bg-black/30 backdrop-blur-sm flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="font-medium text-4xl font-serif">
                Sudhanand Four Seasons in Mysore{" "}
              </p>
              <p className="font-normal text-2xl max-w-lg">
                Sudhanand Four Seasons is a deluxe boutique hotel in Mysore,
                offering luxury, comfort, and exceptional service. Located near
                Mysore Palace and Forum Mall, it’s ideal for both leisure and
                business travelers. Our stylish rooms provide a serene
                environment for a peaceful stay. We offer top amenities,
                including complimentary Wi-Fi, 24/7 room service, and in-house
                dining, ensuring the highest standards of hospitality for
                relaxation or exploration.
              </p>
            </div>
          </div>
          <div className="sm:hidden flex justify-center w-full h-[910px] relative">
            <div className="w-[90%] h-auto mx-auto">
              <Image
                src="/FourSeasonsMobileImg.svg"
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
