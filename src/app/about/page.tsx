import React from "react";

const Page = () => {
  return (
    <>
      <div className="flex justify-between pt-24 bg-[url(/Bg4.svg)] h-[880px] bg-no-repeat bg-cover bg-[position:right]"></div>

      <main className="mx-25 ">
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
      </main>
    </>
  );
};

export default Page;
