import React from 'react'
import Image from 'next/image'
export default function List() {
  return (
    <div>
       <div>
    <div className="bg-white rounded-lg shadow p-6 ">
      <div className="flex items-center mb-4">
        <h2 className="font-6 text-18 mb-4 flex-grow">Expiring Documents</h2>
        {/* Calendar icon */}
       

        <Image
                           src="/icon/bag.png"
                           alt="Dashboard Icon"
                           width={20}
                           height={20}
                         />
      </div>
      <ul className="space-y-6">
        <li className="flex justify-between items-start">
          <div className="space-y-1">
            <p className="text-14 font-6">John Smith</p>
            <p className="font-4 text-12 text-gray-500">Driver License • ABC Trucking</p>
          </div>
          <span className="w-[4rem] h-[1.5rem] flex items-center justify-center  text-12 font-6 text-red-500 bg-red-50 rounded-md">
            Urgent
          </span>
        </li>
        <li className="flex justify-between items-start">
          <div className="space-y-1">
            <p className="text-14 font-6">Robert Johnson</p>
            <p className="font-4 text-12 text-gray-500">Medical Certificate • XYZ Transport</p>
          </div>
          <span className="w-[4rem] h-[1.5rem] flex items-center justify-center  text-12 font-6  bg-brand1  text-[#653CF9]  rounded-md">
            Soon
          </span>
        </li>
        <li className="flex justify-between items-start">
          <div className="space-y-1">
            <p className="text-14 font-6">ABC Trucking</p>
            <p className="font-4 text-12 text-gray-500">New Driver • ABC Trucking</p>
          </div>
            <span className="w-[4rem] h-[1.5rem] flex items-center justify-center  text-12 font-6  bg-brand1  text-[#653CF9]  rounded-md">
            Soon
          </span>
        </li>
        <li className="flex justify-between items-start">
          <div className="space-y-1">
            <p className="text-14 font-6">Truck #T‑123</p>
            <p className="font-4 text-12 text-gray-500">Vehicle Inspection • XYZ Transport</p>
          </div>
            <span className="w-[4rem] h-[1.5rem] flex items-center justify-center  text-12 font-6  bg-brand1  text-[#653CF9]  rounded-md">
            Soon
          </span>
        </li>
      </ul>
    </div>
  </div>
    </div>
  )
}
