"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import WalletButton from "../Wallet/WalletButton";


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header className={`p-2 border-b border-gray-700 h-20 ${isScrolled ? 'bg-black bg-opacity-40' : 'bg-black'}`}>

      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="p-2 text-white">
          <img
            src="https://www.globkins.lol/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.df0e30df.png&w=3840&q=75"
            alt="Globkins Logo"
            className="h-8 md:h-10 border bottom-10" 
          />
        </Link>
        <Link href="/" className="text-2xl font-extrabold p-2 text-white ">
          Home
        </Link>
        {/* <div className="flex">
          <WalletButton />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
