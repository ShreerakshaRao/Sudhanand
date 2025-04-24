import React from "react";

const Page = () => {
  return (
    <>
      <div className="flex justify-between pt-24 bg-[url(/Bg5.svg)] h-[400px] sm:h-[880px] bg-no-repeat bg-cover bg-[position:left] sm:bg-[position:right]"></div>

      <main className="mx-5 sm:mx-25">
        <div className="font-bold text-2xl mt-20 sm:text-3xl font-serif text-center sm:text-left">
          No Job Openings at the Moment
        </div>
        <div className="mt-7 sm:mt-15 text-base sm:text-xl font-normal text-center sm:text-left">
          Thank you for your interest in joining our team. Currently, there are
          no job openings available or our career opportunities are yet to be
          updated. We encourage you to check back soon or follow us for the
          latest updates.
        </div>
      </main>
    </>
  );
};

export default Page;
