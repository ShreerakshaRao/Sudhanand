"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  IoLocationSharp,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoMail,
} from "react-icons/io5";
import { IoIosCall, IoLogoRss } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGooglePlusG } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Footer = () => {
  const navLinks = [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "/" },
        { label: "Business Verticals", href: "/business" },
        { label: "Investors", href: "/investors" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
      ],
    },
  ];

  const socialIcons = [
    <IoLogoFacebook key="facebook" />,
    <IoLogoTwitter key="twitter" />,
    <TiSocialLinkedin key="linkedin" />,
    <IoLogoInstagram key="instagram" />,
    <FaGooglePlusG key="googleplus" />,
    <FaPinterest key="pinterest" />,
    <IoLogoRss key="rss" />,
  ];

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

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
    <footer className="px-6 md:px-30 pt-15 pb-5 space-y-3 bg-primaryBlue text-white overflow-x-hidden max-w-full">
      <div className="space-y-7 w-full flex flex-col md:flex-row justify-between md:items-start gap-8">
        <div className="flex-shrink-0">
          <Image
            src="/SudhanandLogo.svg"
            alt="Company Logo"
            width={130}
            height={130}
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-12 gap-8 sm:gap-16">
          {navLinks.map(({ title, links }) => (
            <div key={title} className="flex-1">
              {" "}
              <h3 className="text-xl font-medium mb-2">{title}</h3>
              <div className="space-y-2 text-base">
                {links.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="block hover:underline whitespace-nowrap"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="flex items-start space-x-3">
            <IoLocationSharp />
            <div className="text-sm font-normal">
              Sy. No. 59, 2nd Floor, Dakshina Murthy Towers, Devanooru,
              <span className="hidden sm:block">
                Rajeevnagara 2nd Stage, Udayagiri, Mysore 570019.
              </span>
              <span className="sm:hidden">
                Rajeevnagara 2nd Stage, Udayagiri, Mysore 570019.
              </span>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center space-x-3">
              <IoIosCall />
              <div className="text-sm font-normal">+91 8214280152</div>
            </div>

            <div className="flex items-center space-x-3">
              <IoMail />
              <div className="text-sm font-normal">info@tiameds.ai</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b-2 border-gray-400" />

      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
        <div className="text-sm font-normal space-x-4 sm:space-x-10 flex">
          <div>Privacy Policy</div>
          <div>Disclaimer</div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <span>Social Media</span>
          {socialIcons.map((icon, idx) => (
            <div key={idx} className="text-lg">
              {icon}
            </div>
          ))}
        </div>

        <div className="text-sm font-normal text-center">
          Copyright © 2025. All rights are reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
