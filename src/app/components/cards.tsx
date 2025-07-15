'use client';

import React from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';

function Cards() {
  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 pt-5 gap-4">
        {/* Active Clients */}
        <div className="bg-white rounded-lg flex flex-col p-5">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-gray-600 text-14 font-6">Active Clients</h3>
            <Image
              src="/icon/client.png"
              alt="Dashboard Icon"
              width={24}
              height={24}
            />
          </div>
          <div className="text-25 font-bold border-t pt-2 border-[#191D3133] text-gray-800">
            <CountUp start={0} end={24} duration={1.5} />+
          </div>
        </div>

        {/* Active Vehicles */}
        <div className="bg-white rounded-lg flex flex-col p-5">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-gray-600 text-14 font-6">Active Vehicles</h3>
            <Image
              src="/icon/vech1.png"
              alt="Dashboard Icon"
              width={24}
              height={24}
            />
          </div>
          <div className="text-25 font-bold border-t pt-2 border-[#191D3133] text-gray-800">
            <CountUp start={0} end={12} duration={1.5} />+
          </div>
        </div>

        {/* Active Drivers */}
        <div className="bg-white rounded-lg flex flex-col p-5">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-gray-600 text-14 font-6">Active Drivers</h3>
            <Image
              src="/icon/driver1.png"
              alt="Dashboard Icon"
              width={24}
              height={24}
            />
          </div>
          <div className="text-25 font-bold border-t pt-2 border-[#191D3133] text-gray-800">
            <CountUp start={0} end={50} duration={1.5} />+
          </div>
        </div>

        {/* Active Users */}
        <div className="bg-white rounded-lg flex flex-col p-5">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-gray-600 text-14 font-6">Active Users</h3>
            <Image
              src="/icon/light.png"
              alt="Dashboard Icon"
              width={24}
              height={24}
            />
          </div>
          <div className="text-25 font-bold border-t pt-2 border-[#191D3133] text-gray-800">
            <CountUp start={0} end={22} duration={1.5} />+
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
