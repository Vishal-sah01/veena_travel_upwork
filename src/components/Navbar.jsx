'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Backpack } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [searchPlaceholder, setSearchPlaceholder] = useState("Search 'Gulmarg'");
  
  const destinations = [
    "Gulmarg",
    "Ladakh",
    "Kerala",
    "Rajasthan",
    "Sikkim",
    "Andaman",
    "Kashmir",
    "Manali"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * destinations.length);
      setSearchPlaceholder(`Search '${destinations[randomIndex]}'`);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="bg-[#161234] px-4 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Backpack className="w-6 h-6 text-white mr-2" />
          <span className="text-white text-xl font-bold">VEENA WORLD</span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder={searchPlaceholder}
              className="w-full px-4 py-2 rounded-full bg-gray-100 focus:outline-none"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* Phone Number with Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full">
              <svg
                className="w-5 h-5 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>1800 22 7979</span>
              <svg 
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="p-6 space-y-6">
                {/* You can also call on section */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-medium">You can also call on:</span>
                  </div>
                  <div className="ml-7 space-y-1">
                    <p className="text-gray-800 font-medium">+91 22 2101 7979</p>
                    <p className="text-gray-800 font-medium">+91 22 2101 6969</p>
                  </div>
                </div>

                {/* Foreign Nationals section */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 104 0 2 2 0 012-2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    </svg>
                    <span className="font-medium">Foreign Nationals/NRIs travelling</span>
                  </div>
                  <div className="ml-7 space-y-1">
                    <p className="text-gray-600">Within India <span className="text-gray-800 font-medium">+91 915 200 4511</span></p>
                    <p className="text-gray-600">Outside India <span className="text-gray-800 font-medium">+91 887 997 2221</span></p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">Business hours</span>
                  </div>
                  <div className="ml-7">
                    <p className="text-gray-800 font-medium">10am - 7pm</p>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:travel@veenaworld.com" className="text-blue-600 hover:underline">travel@veenaworld.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sign In Button */}
          <button className="flex items-center gap-2 text-white">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>Sign In</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
