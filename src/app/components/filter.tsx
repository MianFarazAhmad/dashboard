'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react'; // optional dropdown icon

export default function Filter() {
  return (
    <div className="flex justify-between items-center pt-5">
      {/* Left Side */}
      <div className="flex items-center">
        <p className="mr-4 font-semibold text-18">Filter by Company:</p>

        <div className="relative flex items-center w-fit">
          {/* Select Dropdown */}
          <select
            className="appearance-none border-2 border-[#191D3182] text-[#191D3182] text-xs py-2 px-4 rounded pr-8 bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          >
            <option>All Companies</option>
            <option>Company A</option>
            <option>Company B</option>
          </select>

          {/* Dropdown Icon */}
          <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
            <ChevronDown size={16} />
          </div>

          {/* Profile Images */}
          <div className="absolute bg-white px-1 py-1 rounded-t-full rounded-br-full -top-3 -right-10 flex space-x-[-8px]">
            <img
              src="/profile.png"
              alt="User 1"
              className="w-6 h-6 rounded-full border border-white shadow object-cover"
            />
            <img
              src="/profile.png"
              alt="User 2"
              className="w-6 h-6 rounded-full border border-white shadow object-cover"
            />
          </div>
        </div>

        {/* Optional: Secondary Button */}
      
      </div>

      {/* Right Side */}
      <p className="text-xs">Viewing Data for all Companies</p>
    </div>
  );
}
