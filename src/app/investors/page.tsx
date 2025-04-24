import React from "react";

const Page = () => {
  return (
    <>
      <main>
        <div className="flex flex-col md:flex-row justify-between pt-24 bg-[url(/Bg3.svg)] h-[500px] md:h-[880px] bg-no-repeat bg-cover bg-[position:left] md:bg-[position:right]"></div>

        <div className="my-10 md:my-25 space-y-10 md:space-y-15">
          {/* First Image Section */}
          <div className="flex flex-col md:flex-row justify-between h-[600px] md:h-[612px] bg-no-repeat bg-cover bg-[position:left] md:bg-[position:right] bg-[url(/NewImg6.svg)] md:bg-[url(/Img6.svg)]"></div>

          {/* Second Image Section */}
          <div className="flex flex-col md:flex-row justify-between h-[600px] md:h-[612px] bg-no-repeat bg-cover bg-[position:left] md:bg-[position:right] bg-[url(/NewImg7.svg)] md:bg-[url(/Img7.svg)]"></div>
        </div>
      </main>
    </>
  );
};

export default Page;
