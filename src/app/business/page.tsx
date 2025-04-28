"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const cardData = [
  {
    href: "/healthcare",
    img: "/Img3.svg",
    industry: "Industry",
    title: "Healthcare",
    description:
      "At Sudhanand Healthcare Solutions Pvt. Ltd. (SHPL) and Sudhanand Pharmacies Pvt. Ltd. (SPPL) are committed to providing advanced healthcare solutions, including hospitals, clinics, and medical equipment, to promote a healthier society.",
    layout: "row",
  },
  {
    href: "/technology",
    img: "/Img4.svg",
    industry: "Industry",
    title: "Technology",
    description:
      "At Sudhanand Business Solutions Pvt. Ltd. (SBPL) and TiaMeds provide cutting-edge IT solutions, including software development, digital transformation, and cybersecurity, to empower businesses in the digital age.",
    layout: "row",
  },
  {
    href: "/hospitality",
    img: "/Img5.svg",
    industry: "Industry",
    title: "Hospitality",
    description:
      "At Nova Candolim by Sudhanand in Goa and Sudhanand Four Seasons in Mysore focus on delivering world-class hospitality services, including hotels, resorts, and catering, to enhance customer experiences with top-tier service and comfort.",
    layout: "row",
  },
];

const gridCards = [
  {
    href: "/sport",
    industry: "Industry",
    title: "Sports Infrastructure",
    description:
      "At ARC Sportzone, we build and operate modern sports facilities, stadiums, and training centers to promote fitness, wellness, and the development of athletic talent. Our goal is to create world-class infrastructure that nurtures athletes.",
  },
  {
    href: "/trust",
    industry: "Social Sector",
    title: "Charitable Trust",
    description:
      "Our corporate social responsibility initiatives, led by Sudhanand Educational Trust and Cure Plus Blood Bank, focus on education, healthcare, and community development to create a positive social impact.",
  },
];

const Page = () => {
  return (
    <main>
      <div
        className="flex flex-col md:flex-row justify-between pt-24 min-w-0 h-[917px] md:h-[880px] bg-no-repeat bg-cover bg-[position:left] 
  bg-[url('/BgMobile2.svg')] md:bg-[url('/Bg2.svg')]"
      ></div>

      <div className="m-5 md:m-25 space-y-7">
        {cardData.map((card, idx) => (
          <Link href={card.href} key={idx} className="block">
            <div className="flex flex-col md:flex-row cursor-pointer">
              <div className="flex justify-center md:justify-start">
                <Image src={card.img} alt="Image" width={400} height={400} />
              </div>
              <div className="bg-[#F6F7F7] w-full px-5 md:px-10 flex flex-col">
                <span className="font-normal text-lg pt-10 text-primaryGray">
                  {card.industry}
                </span>
                <span className="font-bold text-3xl font-serif pt-3 text-secondaryBlue">
                  {card.title}
                </span>
                <span className="text-xl font-normal text-[#0A0A0A] md:px-10 max-w-4xl pt-8">
                  {card.description}
                </span>
              </div>
            </div>
          </Link>
        ))}

        {/* Grid Cards */}
        <div className="flex flex-col md:flex-row md:space-x-10 space-y-5 md:space-y-0 justify-center">
          {gridCards.map((card, idx) => (
            <Link
              href={card.href}
              key={idx}
              className="block w-full md:w-[580px]"
            >
              <div className="bg-[#F6F7F7] h-auto md:h-[376px] flex flex-col px-5 md:px-10 cursor-pointer">
                <span className="font-normal text-lg pt-10 text-primaryGray">
                  {card.industry}
                </span>
                <span className="font-bold text-3xl font-serif pt-3 text-secondaryBlue">
                  {card.title}
                </span>
                <span className="text-xl font-normal text-[#0A0A0A] p-5 md:p-10 max-w-3xl">
                  {card.description}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
