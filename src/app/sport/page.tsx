"use client";

import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between pt-24 bg-[url(/SportsBg.svg)] h-[500px] md:h-[880px] bg-no-repeat bg-cover bg-[position:left] md:bg-[position:right]"></div>

      <main className="flex flex-col items-center justify-center mx-10 my-20 gap-10">
        <div className="relative group w-full h-[692px] overflow-hidden cursor-pointer">
          <Image src="/ArcImg.svg" alt="Image" fill className="object-cover" />

          <div className="absolute top-8 bottom-8 left-8 p-10 space-y-10 text-white h-auto w-[596px] bg-black/30 backdrop-blur-sm flex flex-col opacity-0 group-hover:opacity-100 transition-all duration-300">
            <p className="font-medium text-4xl font-serif">ARC Sportzone</p>
            <p className="font-normal text-2xl max-w-lg">
              ARC SportZone is Mysore’s premier destination for sports, fitness,
              and community. More than just a sports club, we offer world-class
              facilities for basketball, football, badminton, tennis, cricket,
              and more. With expert coaches and programs focused on skill
              development, teamwork, endurance, and sportsmanship, we cater to
              all ages and skill levels. Recognized as the best in Mysore, ARC
              SportZone is where goals are set, friendships are made, and
              victories are celebrated.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
