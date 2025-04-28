"use client";

import React, { useState } from "react";
import { IoIosCall } from "react-icons/io";
import { IoLocationSharp, IoMail } from "react-icons/io5";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Page = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [, setResponseMessage] = useState("");

  //   const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage("Your message has been sent successfully.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage(
          "Failed to send the message. Please try again later."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("An error occurred while sending the message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="flex flex-col md:flex-row justify-between pt-24 min-w-0 h-[917px] md:h-[880px] bg-no-repeat bg-cover bg-[position:left] 
  bg-[url('/BgMobile6.svg')] md:bg-[url('/Bg6.svg')]"
      ></div>

      <main className="space-y-3">
        <div
          className="lg:mx-25 lg:my-15 my-2 space-y-5 flex flex-col lg:flex-row w-full max-w-full overflow-x-hidden 
  lg:w-[1300px] h-auto lg:h-[625px] bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
        >
          <div className="w-full lg:basis-[60%]">
            <div className="w-full max-w-[95%] mx-auto space-y-7 py-10 px-4 sm:px-6">

              <form className="space-y-10" onSubmit={handleSubmit}>
                <div className="relative w-full">
                  <label
                    htmlFor="name"
                    className={`block mb-1 text-sm font-medium transition-colors ${
                      formData.name ? "text-[#0A72BB]" : "text-gray-500"
                    }`}
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-3 outline-none border-b-2 transition-colors ${
                      formData.name
                        ? "border-[#0A72BB]"
                        : "border-[#939090] text-gray-500"
                    }`}
                  />
                </div>

                <div className="relative w-full">
                  <label
                    htmlFor="email"
                    className={`block mb-1 text-sm font-medium transition-colors ${
                      formData.email ? "text-[#0A72BB]" : "text-gray-500"
                    }`}
                  >
                    Email ID
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 outline-none border-b-2 transition-colors ${
                      formData.email
                        ? "border-[#0A72BB]"
                        : "border-[#939090] text-gray-500"
                    }`}
                  />
                </div>

                <div className="relative w-full">
                  <label
                    htmlFor="message"
                    className={`block mb-1 text-sm font-medium transition-colors ${
                      formData.message ? "text-[#0A72BB]" : "text-gray-500"
                    }`}
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Write your message here"
                    className={`w-full p-3 outline-none border-b-2 transition-colors ${
                      formData.message
                        ? "border-[#0A72BB]"
                        : "border-[#939090] text-gray-500"
                    }`}
                    rows={6}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={
                    loading ||
                    !formData.name ||
                    !formData.email ||
                    !formData.message
                  }
                  className="w-full bg-[#0A72BB] text-white p-3 cursor-pointer"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          <div className="bg-[#02263E] text-white w-full max-w-full lg:basis-[40%] sm:m-6 sm:px-10 px-0 m-0 space-y-12 relative overflow-hidden">

            <div className="mt-10 max-w-[90%] mx-auto">

              <div className="font-medium text-xl">Mail Us</div>
              <div className="font-normal text-sm">
                Mail us your query - we will reply within 48 hours
              </div>
              <div className="flex space-x-2 font-medium text-base items-center pt-3 break-words">
                <IoMail />
                <span className="underline">info@tiameds.ai</span>
              </div>

              <div className="mt-10">
                <div className="font-medium text-xl">Call Us</div>
                <div className="font-normal text-sm">
                  Call our team Mon-Sat from 9am to 7pm
                </div>
                <div className="flex space-x-2 font-medium text-base items-center pt-3 break-words">
                  <IoIosCall />
                  <span className="underline">+91 821 428 0152</span>
                </div>
              </div>

              <div className="mt-10">
                <div className="font-medium text-xl">Visit Us</div>
                <div className="font-normal text-sm">
                  Visit our office Mon-Sat from 9am to 8pm
                </div>
                <div className="flex space-x-2 font-medium text-base items-center pt-3 break-words">
                  <IoLocationSharp />
                  <span className="underline">
                    Sy. No. 59, 2nd Floor, Dakshina Murthy Towers,
                    <br /> Devanooru, Rajeevnagara 2nd Stage,
                    <br /> Udayagiri, Mysore 570019.
                  </span>
                </div>
              </div>
            </div>

            <div className="hidden sm:block absolute bottom-0 right-0 w-40 h-40 rounded-tl-full bg-gradient-to-br from-[#E8F6F6] to-[#02263E]"></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
