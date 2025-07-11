import React from 'react'
import Image from 'next/image';
function cards() {
  return (
    <div  className='' >
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 pt-5 gap-4 ">
  
  <div className="bg-white rounded-lg flex flex-col p-5">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-gray-600 text-sm font-medium">Active Clients</h3>
    <Image
                    src="/icon/client.png"
                    alt="Dashboard Icon"
                    width={24}
                    height={24}
                  />
      
    </div>
    <div className="text-2xl font-bold border-t pt-2 border-[#191D3133] text-gray-800 ">
      24+</div>
  </div>

 
  <div className="bg-white rounded-lg flex flex-col p-5">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-gray-600 text-sm font-medium">Active Vehicles</h3>
        <Image
                    src="/icon/vech1.png"
                    alt="Dashboard Icon"
                    width={24}
                    height={24}
                  />
    </div>
    <div className="text-2xl font-bold border-t border-[#191D3133] pt-2 text-gray-800">12+</div>
  </div>


  <div className="bg-white rounded-lg flex flex-col p-5">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-gray-600 text-sm font-medium">Active Drivers</h3>
      <Image
                    src="/icon/driver1.png"
                    alt="Dashboard Icon"
                    width={24}
                    height={24}
                  />
    </div>
    <div className="text-2xl font-bold border-t pt-2 border-[#191D3133] text-gray-800">50+</div>
  </div>

  <div className="bg-white rounded-lg flex flex-col p-5">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-gray-600 text-sm font-medium">Active Users</h3>
      <Image
                    src="/icon/light.png"
                    alt="Dashboard Icon"
                    width={24}
                    height={24}
                  />
    </div>
    <div className="text-2xl font-bold border-t pt-2 border-[#191D3133] text-gray-800">22+</div>
  </div>
</div>

    </div>
  )
}

export default cards
