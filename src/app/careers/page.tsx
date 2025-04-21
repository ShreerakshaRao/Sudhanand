import React from "react";

const Page = () => {
  return (
    <>
      <div className="flex justify-between pt-24 bg-[url(/Bg5.svg)] h-[880px] bg-no-repeat bg-cover bg-[position:right]"></div>

      <main className="m-25">
        <div className="font-bold text-3xl font-serif">No Job Openings at the Moment</div>
        <div className="mt-15 text-xl font-normal">
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
