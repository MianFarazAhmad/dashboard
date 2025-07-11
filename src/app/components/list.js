import React from 'react'
import Image from 'next/image'
export default function List() {
  return (
    <div>
       <div>
    <div className="bg-white rounded-lg shadow p-6 ">
      <div className="flex items-center mb-4">
        <h2 className="text-lg font-medium mb-4 flex-grow">Expiring Documents</h2>
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
            <p className="text-sm font-medium">John Smith</p>
            <p className="text-sm text-gray-500">Driver License • ABC Trucking</p>
          </div>
          <span className="px-3 py-1.5 text-xs font-semibold text-red-500 rounded-full">
            Urgent
          </span>
        </li>
        <li className="flex justify-between items-start">
          <div className="space-y-1">
            <p className="text-sm font-medium">Robert Johnson</p>
            <p className="text-sm text-gray-500">Medical Certificate • XYZ Transport</p>
          </div>
          <span className="px-3 py-1.5 text-xs font-semibold  text-[#653CF9]  rounded-full">
            Soon
          </span>
        </li>
        <li className="flex justify-between items-start">
          <div className="space-y-1">
            <p className="text-sm font-medium">ABC Trucking</p>
            <p className="text-sm text-gray-500">New Driver • ABC Trucking</p>
          </div>
          <span className="px-3 py-1.5 text-xs font-semibold  text-[#653CF9] rounded-full">
            Soon
          </span>
        </li>
        <li className="flex justify-between items-start">
          <div className="space-y-1">
            <p className="text-sm font-medium">Truck #T‑123</p>
            <p className="text-sm text-gray-500">Vehicle Inspection • XYZ Transport</p>
          </div>
          <span className="px-3 py-1.5 text-xs font-semibold text-[#653CF9] rounded-full">
            Soon
          </span>
        </li>
      </ul>
    </div>
  </div>
    </div>
  )
}
