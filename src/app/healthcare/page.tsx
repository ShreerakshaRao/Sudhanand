"use client";

import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <div
        className="flex flex-col md:flex-row justify-between pt-24 min-w-0 h-[917px] md:h-[880px] bg-no-repeat bg-cover bg-[position:left] 
  bg-[url('/HealthcareMobileBg.svg')] md:bg-[url('/HealthcareBg.svg')]"
      ></div>

      <main className="flex flex-col items-center justify-center m-3 space-y-5 sm:m-20 sm:gap-10">
        <div className="relative group w-full h-[692px] overflow-hidden cursor-pointer">
          <div className="hidden sm:block w-full h-full relative">
            <Image
              src="/ShplImg.svg"
              alt="Image"
              fill
              className="object-cover"
            />

            <div className="absolute top-8 bottom-8 left-8 p-10 space-y-10 text-white h-auto w-[596px] bg-black/30 backdrop-blur-sm flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="font-medium text-4xl font-serif">
                Sudhanand Healthcare Solutions Pvt. Ltd.
              </p>
              <p className="font-normal text-2xl max-w-lg">
                Cureplus Hospitals is a growing network across Mysore,
                Chamarajanagar & Kodagu, led by the 40-bed NABH-accredited
                Cureplus Disha Hospital in Mysuru. The network includes 20-bed
                hospitals in T. Narasipura, Bherya, H.D. Kote, Halli Mysuru,
                Hosur, Ramapura & Terakanambi, plus facilities in
                Santhemarahalli, Kushalnagar & Bettadapura. Offering affordable,
                quality care with modern diagnostics, Cureplus combines clinical
                excellence with compassion across urban & rural communities.
              </p>
            </div>
          </div>

          <div className="sm:hidden flex justify-center w-full h-[910px] relative">
            <div className="w-[90%] h-auto mx-auto">
              <Image
                src="/ShplMobileImg.svg"
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
              src="/SpplImg.svg"
              alt="Image"
              fill
              className="object-cover"
            />

            <div className="absolute top-8 bottom-8 right-8 p-10 space-y-10 text-white h-auto w-[596px] bg-black/30 backdrop-blur-sm flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="font-medium text-4xl font-serif">
                Sudhanand Pharmacies Pvt. Ltd.
              </p>
              <p className="font-normal text-2xl max-w-lg">
                Sudhanand Pharmacies Pvt. Ltd. (SPPL), founded in 2023, is the
                pharmaceutical arm of the Sudhanand Group, committed to
                delivering high-quality, effective, and affordable medicines.
                Currently offering 31 products across key therapeutic areas,
                SPPL continues to expand its portfolio with more in development.
                Our focus is on balancing efficacy and affordability to make
                reliable healthcare accessible to all, reinforcing our mission
                to become a trusted name in the pharmaceutical industry.
              </p>
            </div>
          </div>

          <div className="sm:hidden flex justify-center w-full h-[910px] relative">
            <div className="w-[90%] h-auto mx-auto">
              <Image
                src="/SpplMobileImg.svg"
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
