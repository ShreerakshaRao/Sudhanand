import React from "react";

const Page = () => {
  return (
    <>
      <main>
        <div
          className="flex flex-col md:flex-row justify-between pt-24 min-w-0 h-[917px] md:h-[880px] bg-no-repeat bg-cover bg-[position:left] 
  bg-[url('/BgMobile3.svg')] md:bg-[url('/Bg3.svg')]"
        ></div>
        <div className="my-10 md:my-25 space-y-10 md:space-y-15">
          <div className="flex flex-col md:flex-row justify-between h-[600px] md:h-[612px] bg-no-repeat bg-cover bg-[position:left] md:bg-[position:right] bg-[url(/NewImg6.svg)] md:bg-[url(/Img6.svg)]"></div>

          <div className="flex flex-col md:flex-row justify-between h-[600px] md:h-[612px] bg-no-repeat bg-cover bg-[position:left] md:bg-[position:right] bg-[url(/NewImg7.svg)] md:bg-[url(/Img7.svg)]"></div>
        </div>
      </main>
    </>
  );
};

export default Page;
