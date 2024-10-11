"use client";
import Header from "@/components/Layout/Header";
import axios from "axios";
import React, { useState } from "react";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const HeroSectionView = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [email, setEmail] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const data = {
        walletAddress,
        email,
        twitterLink,
      };

      const response = await axios.post("/api/user-data", data);

      setMessage("Submission successful: " + response.data.message);
      setWalletAddress("");
      setEmail("");
      setTwitterLink("");
    } catch (error) {
      // Handle errors
      console.error("Error submitting form:", error);
      setMessage("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="">
      <div className="fixed top-0 w-full z-10  bg-opacity-50 backdrop-blur-md">
        <Header />
      </div>
      <div className="overflow-hidden">
        <div className="relative flex flex-col items-center justify-center h-[60vh] text-center text-white overflow-hidden mt-8">
          <div className="absolute inset-0 w-full h-full bg-[#fc9804]"></div>

          <h1 className="relative z-10 text-4xl md:text-5xl lg:text-7xl font-bold mb-6 px-4 mt-20">
            Lorem Ipsum Dolor, <br /> Sit Amet Consectetur.
          </h1>

          <p className="relative z-10 text-base md:text-lg lg:text-4xl max-w-3xl px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            et risus at sapien placerat pharetra. Duis vehicula massa in felis
            aliquam, in mollis lacus egestas.
          </p>
        </div>

        <div className="relative h-[150vh] w-full overflow-hidden">
          <div className="text-white text-2xl">
            <img alt="" src="/assets/a.gif" className="object-contain w-full" />
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-between p-6 sm:p-8 md:p-12 lg:p-16 h-auto text-left text-black -mt-96">
          <div className="md:w-1/2 p-4 sm:px-6 lg:px-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6">
              Register for whitelist
            </h1>
            <form
              className="relative z-10 mt-6 flex flex-col items-center"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Share your wallet address"
                className="w-full max-w-md px-4 py-2 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-black mt-4"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full max-w-md px-4 py-2 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-black mt-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Have you engaged with our Twitter post? Share link."
                className="w-full max-w-md px-4 py-2 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-blue-500 text-black mt-4"
                value={twitterLink}
                onChange={(e) => setTwitterLink(e.target.value)}
              />
              <button
                type="submit"
                className="mt-4 px-6 py-2 bg-blue-600 text-black rounded-md hover:bg-blue-700"
              >
                Submit
              </button>
              {message && <p className="mt-4 text-green">{message}</p>}
            </form>
          </div>
          <div className="md:w-3/4 mt-6 md:mt-0 p-4">
            <div className="rounded-b-[4.5rem] rounded-t-[4.5rem] w-full sm:w-[80vw] md:w-[50vw] md:-mt-40 lg:w-[50vw] xl:w-[40vw] h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] bg-[#4d36f7] border-white shadow-lg overflow-hidden">
              <img
                alt="Description of the image"
                src="/assets/e.gif"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="relative h-full w-full -z-10 overflow-hidden rounded-b-[4.5rem]">
          <div className="h-[115vh] w-full rounded-b-[4.5rem] bg-[#34e4ec] flex items-center justify-center filter brightness-50">
            <img
              alt="Description of the image"
              src="/assets/d.png"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="absolute bottom-8 right-10 p-4 text-white font-extrabold text-xl md:text-5xl">
            <p className="mb-6 -mt-4 md:-mt-6 md:mr-8">
              {" "}
              Lorem ipsum dolor sit amet, consectetur .
            </p>
            <p className="mb-8 -mt-2 md:-mt-4 md:mr-8">
              {" "}
              Curabitur vel sapien eu augue hendrerit.
            </p>
          </div>
        </div>

        <div className="py-8 px-4">
          <div className="container mx-auto">
            <div className="space-y-20 ">
              <div className="flex flex-col md:flex-row md:items-center justify-center">
                <div className=" ">
                  <img
                    alt=""
                    src="/assets/IMG_5686.gif"
                    className="rounded-3xl w-36 h-36 md:w-52 md:h-52 mb-4 md:mb-0 bg-gray-300 mx-auto md:mx-0 flex items-center justify-center"
                  />
                </div>
                <div className="md:ml-40 text-center md:text-left">
                  <h2 className="text-purple-600 font-bold text-4xl md:text-5xl lg:text-6xl mb-4 -mt-16">
                    NFT
                  </h2>
                  <p className="text-xl md:text-4xl text-gray-700 max-w-xs md:max-w-sm mx-auto md:mx-0 font-thin">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum et risus at sapien placerat pharetra.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-center">
                <div className="text-center md:text-left">
                  <h2 className="text-purple-600 font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
                    PFP
                  </h2>
                  <p className="text-xl md:text-4xl text-gray-700 max-w-xs md:max-w-sm mx-auto md:mx-0 font-thin">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum et risus at sapien placerat pharetra.
                  </p>
                </div>
                <div className="">
                  <img
                    alt=""
                    src="/assets/IMG_5695.gif"
                    className=" md:ml-40 rounded-3xl w-36 h-36 md:w-52 md:h-52 mb-4 md:mb-0 bg-gray-300 mx-auto md:mx-0 flex items-center justify-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[80vh] sm:-mb-50 md:-mb-30 lg:h-[115vh] w-full -z-10 overflow-hidden">
          <div className="h-full w-full bg-[#ab2073] flex items-center justify-center">
            <img
              alt="Description of the image"
              src="/assets/b.png"
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <div className="p-12 text-center text-black">
          <h2 className="text-4xl font-extrabold mb-4">Let's stay in touch!</h2>
          <p className="text-xl mb-6">
            Follow our socials to stay up to date on all things Globkins.
          </p>
          <div className="flex justify-center space-x-14">
            <FaDiscord className="w-14 h-14" />
            <FaXTwitter className="w-14 h-14 " />
          </div>
        </div>

        <div className="relative h-[80vh] sm:-mb-50 md:-mb-30 lg:h-[115vh] w-full -z-10 overflow-hidden">
          <div className="h-full w-full bg-[#fd9905] flex items-center justify-center">
            <img
              alt="Description of the image"
              src="/assets/c.png"
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <div className="relative bg-black h-24 z-10">
          <div className="absolute inset-0 flex flex-col justify-between p-4 text-white px-20">
            <div className="flex flex-col md:flex-row md:justify-between items-center">
              <div className="flex flex-col items-start mb-4 md:mb-0">
                <div className="w-32 text-lg text-center md:text-left">
                  PlaceholderImage
                </div>
                <p className="text-xs md:text-sm text-right">
                  &copy; 2024 Globkins
                </p>{" "}
              </div>
              <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                <div className="text-sm md:text-xl flex items-center justify-center">
                  Privacy Policy
                </div>
                <div className="flex space-x-10 md:space-x-4">
                  <a
                    href="https://discord.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaDiscord className="w-8 h-8 md:w-14 md:h-14" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter className="w-8 h-8 md:w-14 md:h-14" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionView;
