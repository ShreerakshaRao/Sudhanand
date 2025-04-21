"use client";

import React from "react";
import Image from "next/image";
const Page = () => {
  return (
    <>
      <main>
        <div className="flex justify-between pt-24 bg-[url(/Bg2.svg)] h-[880px] bg-no-repeat bg-cover bg-[position:right]"></div>

        <div className="m-25 space-y-7">
          <div className="flex">
            <div>
              <Image src="/Img3.svg" alt="Image" width={400} height={400} />
            </div>
            <div className="bg-[#F6F7F7] w-full pt-10 px-10 grid">
              <span className="font-bold text-3xl font-serif">Healthcare</span>
              <span className="text-xl font-normal text-[#0A0A0A] px-10 max-w-4xl">
                At Sudhanand Healthcare Solutions Pvt. Ltd. (SHPL) and Sudhanand
                Pharmacies Pvt. Ltd. (SPPL) are committed to providing advanced
                healthcare solutions, including hospitals, clinics, and medical
                equipment, to promote a healthier society.
              </span>
            </div>
          </div>

          <div className="flex">
            <div>
              <Image src="/Img4.svg" alt="Image" width={400} height={400} />
            </div>
            <div className="bg-[#F6F7F7] w-full pt-10 px-10 grid">
              <span className="font-bold text-3xl font-serif">Technology</span>
              <span className="text-xl font-normal text-[#0A0A0A] px-10 max-w-4xl">
                At Sudhanand Business Solutions Pvt. Ltd. (SBPL) and TiaMeds
                provide cutting-edge IT solutions, including software
                development, digital transformation, and cybersecurity, to
                empower businesses in the digital age.
              </span>
            </div>
          </div>

          <div className="flex">
            <div>
              <Image src="/Img5.svg" alt="Image" width={400} height={400} />
            </div>
            <div className="bg-[#F6F7F7] w-full pt-10 px-10 grid">
              <span className="font-bold text-3xl font-serif">Hospitality</span>
              <span className="text-xl font-normal text-[#0A0A0A] px-10 max-w-4xl">
                At Nova Candolim by Sudhanand in Goa and Sudhanand Four Seasons
                in Mysore focus on delivering world-class hospitality services,
                including hotels, resorts, and catering, to enhance customer
                experiences with top-tier service and comfort.
              </span>
            </div>
          </div>

          <div className="flex space-x-10 justify-center">
            <div className="bg-[#F6F7F7] w-[580px] h-[376px] flex flex-col px-10 pt-15">
              <span className="font-bold text-3xl font-serif ">
                Sports Infrastructure
              </span>
              <span className="text-xl font-normal text-[#0A0A0A] p-10 max-w-3xl">
                At ARC Sportzone, we build and operate modern sports facilities,
                stadiums, and training centers to promote fitness, wellness, and
                the development of athletic talent. Our goal is to create
                world-class infrastructure that nurtures athletes.
              </span>
            </div>

            <div className="bg-[#F6F7F7] w-[580px] h-[376px] flex flex-col px-10 pt-15">
              <span className="font-bold text-3xl font-serif ">Trust</span>
              <span className="text-xl font-normal text-[#0A0A0A] p-10 max-w-3xl">
                Our corporate social responsibility initiatives, led by
                Sudhanand Educational Trust and Cure Plus Blood Bank, focus on
                education, healthcare, and community development to create a
                positive social impact.
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
