import React from "react";
import Image from "next/image";
export default function activity() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[60%_40%]  pt-5 gap-2">
      {/* Recent Activity Section */}
      <div><div className="flex bg-white border   rounded-t-[10px] border-[#191D311A] items-center ">
          <h2 className="font-6 text-18  flex-grow px-6 pt-2 pb-1">
            Recent Activity
          </h2>

          <img
            src="/icon/vav1.png"
            alt="User"
            className="w-9 h-11 rounded-full object-cover"
          />
        </div>
        <div className=" bg-white   rounded-b-[0.25rem] shadow p-6">
        
        <div className="   divide-y divide-gray-200">

          {/* Activity Item 1 */}
          <div className="flex py-4 items-center justify-between">
            <div className="flex  space-x-3">
              <img
                src="/icon/lang.png"
                alt="User"
                className="w-5 h-5 rounded-full object-cover"
              />
              <div>
                <p className="text-14 font-5">
                  Uploaded a new medical certificate
                </p>
                <p className="text-gray-500 font-4 text-12">
                  for <span className="">Robert Johnson</span>
                </p>
                <div className="text-xs text-[#68CFF7] hover:underline cursor-pointer">
                  <div className="flex items-center">
                    <img
                      src="/profile.png"
                      alt="User"
                      className="w-8 mr-2 mt-2 h-8 rounded-full object-cover"
                    />
                    Admin User
                  </div>
                </div>
              </div>
            </div>
            <div className=" items-centers  xs-d-none space-x-3">
              <div className="flex justify-end  mb-3">
                <button className=" flex bg-gray-900 mr-0 text-white px-3 py-1 rounded text-xs hover:bg-gray-700">
                  Accept
                </button>
              </div>

              <div className="flex">
                <span className="text-xs flex text-gray-400">
                  {" "}
                  <img
                    src="/icon/cal.png"
                    alt="User"
                    className="w-4 h-4 mr-2 rounded-full  object-cover"
                  />
                  7-2023
                </span>
                <span className="text-xs flex text-gray-400">
                  {" "}
                  <img
                    src="/icon/mes.png"
                    alt="User"
                    className="w-4 h-4 ml-2 mr-2 rounded-full object-cover"
                  />
                  15 min ago
                </span>
              </div>
            </div>
          </div>
          {/* Activity Item 2 */}
          <div className="flex py-4 items-center justify-between">
            <div className="flex  space-x-3">
              <img
                src="/icon/lang.png"
                alt="User"
                className="w-5 h-5 mt-2 rounded-full object-cover"
              />
              <div>
                <p className="text-14 font-5">Added a new driver</p>
                <p className="text-gray-500 font-4 text-12">James Wilson to ABC Tru</p>
                <div className="text-xs text-[#68CFF7] hover:underline cursor-pointer">
                  <div className="flex items-center">
                    <img
                      src="/profile.png"
                      alt="User"
                      className="w-8 mr-2  mt-2 h-8 rounded-full object-cover"
                    />
                    Admin User
                  </div>
                </div>
              </div>
            </div>

            <div className=" items-center xs-d-none space-x-3">
              <div className="flex justify-end mb-3">
                <span className="text-xs text-brand font-7 text-12 border border-brand bg-brand1 rounded px-2 py-0.5">Accepted by Maria Garcia</span>
              </div>
              <div className="flex">
                <span className="text-xs flex text-gray-400">
                  {" "}
                  <img
                    src="/icon/cal.png"
                    alt="User"
                    className="w-4  h-4  mr-2 rounded-full object-cover"
                  />
                  7-2023
                </span>
                <span className="text-xs ml-2 flex text-gray-400">
                  {" "}
                  <img
                    src="/icon/mes.png"
                    alt="User"
                    className="w-4 h-4  mr-2 rounded-full object-cover"
                  />
                  15 min ago
                </span></div>
            </div>
          </div>
          {/* Activity Item 3 */}
          <div className="flex py-4 items-center justify-between">
            <div className="flex  space-x-3">
              <img
                src="/icon/lang.png"
                alt="User"
                className="w-5 h-5 rounded-full object-cover"
              />
              <div>
                <p className="text-14 font-5">Added a new driver</p>
                <p className="text-gray-500 font-4 text-12">James Wilson to ABC Tru</p>
                <div className="text-xs text-[#68CFF7] hover:underline cursor-pointer">
                  <div className="flex items-center">
                    <img
                      src="/profile.png"
                      alt="User"
                      className="w-8 mt-2 mr-2 h-8 rounded-full object-cover"
                    />
                    Admin User
                  </div>
                </div>
              </div>
            </div>
            <div className=" items-centers xs-d-none space-x-3">
              <div className="flex justify-end mb-3">
                <button className=" flex bg-gray-900 mr-0 text-white px-3 py-1 rounded text-xs hover:bg-gray-700">
                  Upload
                </button>
              </div>

              <div className="flex">
                <span className="text-xs flex text-gray-400">
                  {" "}
                  <img
                    src="/icon/cal.png"
                    alt="User"
                    className="w-4 h-4  mr-2 rounded-full object-cover"
                  />
                  7-2023
                </span>
                <span className="font-5 text-12 flex text-gray-400">
                  {" "}
                  <img
                    src="/icon/mes.png"
                    alt="User"
                    className="w-4 font-5 text-12 h-4 ml-2 mr-2 rounded-full object-cover"
                  />
                  15 min ago
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
        
        </div>
      
      {/* WhatsApp Integration Section */}
      <div className=" bg-white  rounded  p-6  shadow">
        <div className="flex items-center mb-4">
          <h2 className="font-6 text-18 mb-4 flex-grow">
            WhatsApp Integration
          </h2>
          {/* Calendar icon */}

          <Image
            src="/icon/sea.png"
            alt="Dashboard Icon"
            width={50}
            height={50}
          />
        </div>

        <div className="mb-4 bg-light rounded-xl border border-[#191D310D] py-2 px-2 flex space-x-7  ">
          <button className="bg-[#68CFF7] text-white rounded px-4 text-sm py-2 border ">
            Recent Messages
          </button>
          <button className="text-gray-500  text-14 font-6 pb-1">Contacts</button>
        </div>
        <div className="space-y-3 max-h-72 ">
          {/* Message item repeated */}
          <div className="flex items-center  space-x-3">
            <img
              src="/profile.png"
              alt="User"
              className="w-8  h-8 rounded-full object-cover"
            />
            <div className="w-[55%] truncate">
              <p className="text-14 font-5">John Smith (ABC Tru)</p>
              <p className="text-gray-500 font-4 text-12 truncate w-60">
                I need to add a new{" "}
              </p>
            </div>
            <span className=" flex items-center xs-d-none ml-auto text-xs text-gray-400">
              59 minutes ago <span className="bg-brand rounded ml-1 w-2 h-2 block"></span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <img
              src="/profile.png"
              alt="User"
              className="w-8  h-8 rounded-full object-cover"
            />
            <div className="w-[55%] truncate">
              <p className="text-14 font-5">John Smith (ABC Tru)</p>
              <p className="text-gray-500 font-4 text-12 truncate w-60">
                I need to add a new{" "}
              </p>
            </div>
            <span className=" flex items-center xs-d-none ml-auto text-xs text-gray-400">
              59 minutes ago <span className="bg-brand rounded ml-1 w-2 h-2 block"></span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <img
              src="/profile.png"
              alt="User"
              className="w-8  h-8 rounded-full object-cover"
            />
            <div className="w-[55%] truncate">
              <p className="text-14 font-5">John Smith (ABC Tru)</p>
              <p className="text-gray-500 font-4 text-12 truncate w-60">
                I need to add a new{" "}
              </p>
            </div>
            <span className=" flex items-center xs-d-none ml-auto text-xs text-gray-400">
              59 minutes ago <span className="bg-brand rounded ml-1 w-2 h-2 block"></span>
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <img
              src="/profile.png"
              alt="User"
              className="w-8  h-8 rounded-full object-cover"
            />
            <div className="w-[55%] truncate">
              <p className="text-14 font-5">John Smith (ABC Tru)</p>
              <p className="text-gray-500 font-4 text-12 truncate w-60">
                I need to add a new{" "}
              </p>
            </div>
            <span className=" flex items-center xs-d-none ml-auto text-xs text-gray-400">
              59 minutes ago <span className="bg-brand rounded ml-1 w-2 h-2 block"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
