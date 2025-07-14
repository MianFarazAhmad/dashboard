import React from "react";
import Image from "next/image";
export default function activity() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[60%_40%]  pt-5 gap-2">
      {/* Recent Activity Section */}
      <div><div className="flex bg-white border   rounded-t-[0.625rem] border-[#191D311A] items-center ">
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
                src="/icon/lang.svg"
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
                    src="/icon/cal.svg"
                    alt="User"
                    className="w-4 h-4 mr-2 rounded-full  object-cover"
                  />
                  7-2023
                </span>
                <span className="text-xs flex text-gray-400">
                  {" "}
                  <img
                    src="/icon/mes.svg"
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
                src="/icon/lang.svg"
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
                <span className="text-xs flex items-center text-brand font-7 text-12 border border-brand bg-brand1 rounded px-2 py-0.5">
                  
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="13" height="13" viewBox="0 0 13 13" fill="none">
<path d="M10.5801 3.45361L5.08008 8.95361L2.58008 6.45361" stroke="#68CFF7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>  Accepted by Maria Garcia</span>
              </div>
              <div className="flex">
                <span className="text-xs flex text-gray-400">
                  {" "}
                  <img
                    src="/icon/cal.svg"
                    alt="User"
                    className="w-4  h-4  mr-2 rounded-full object-cover"
                  />
                  7-2023
                </span>
                <span className="text-xs ml-2 flex text-gray-400">
                  {" "}
                  <img
                    src="/icon/mes.svg"
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
                src="/icon/lang.svg"
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
                    src="/icon/cal.svg"
                    alt="User"
                    className="w-4 h-4  mr-2 rounded-full object-cover"
                  />
                  7-2023
                </span>
                <span className="font-5 text-12 flex text-gray-400">
                  {" "}
                  <img
                    src="/icon/mes.svg"
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
          className="mr-4"
            src="/icon/searchprim.svg"
            alt="Dashboard Icon"
            width={20}
            height={20}
          />  <Image
            src="/icon/mes1.svg"
            alt="Dashboard Icon"
            width={20}
            height={20}
          />
        </div>

        <div className="mb-4 bg-light rounded-xl border border-[#191D310D] py-2 px-2 flex space-x-7  ">
          <button className="bg-[#68CFF7] flex   items-center  text-white rounded px-4 text-sm py-2 border ">
       <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
<path d="M6.69037 0.631348C10.0863 0.631348 12.839 3.38409 12.839 6.77997C12.839 10.1759 10.0863 12.9286 6.69037 12.9286C3.29449 12.9286 0.541748 10.1759 0.541748 6.77997C0.541748 3.38409 3.29449 0.631348 6.69037 0.631348ZM6.68422 5.55025H6.07551C5.91879 5.55042 5.76806 5.61043 5.6541 5.71801C5.54015 5.82559 5.47157 5.97263 5.46239 6.12908C5.4532 6.28552 5.5041 6.43957 5.60469 6.55975C5.70527 6.67993 5.84795 6.75716 6.00357 6.77567L6.07551 6.77997V9.84814C6.07551 10.1679 6.31777 10.4323 6.62889 10.4655L6.69652 10.4691H6.9978C7.12712 10.4692 7.25314 10.4284 7.35795 10.3526C7.46276 10.2769 7.54103 10.17 7.58161 10.0473C7.6222 9.92448 7.62304 9.79204 7.58402 9.66875C7.545 9.54546 7.4681 9.43762 7.36426 9.36055L7.30524 9.32181V6.17126C7.30524 5.85153 7.06298 5.58714 6.75186 5.55394L6.68422 5.55025ZM6.69037 3.70566C6.5273 3.70566 6.37091 3.77044 6.2556 3.88575C6.14029 4.00106 6.07551 4.15745 6.07551 4.32052C6.07551 4.48359 6.14029 4.63999 6.2556 4.7553C6.37091 4.8706 6.5273 4.93539 6.69037 4.93539C6.85344 4.93539 7.00984 4.8706 7.12515 4.7553C7.24046 4.63999 7.30524 4.48359 7.30524 4.32052C7.30524 4.15745 7.24046 4.00106 7.12515 3.88575C7.00984 3.77044 6.85344 3.70566 6.69037 3.70566Z" fill="white"/>
</svg>     Recent Messages
          </button>
          <button className="text-gray-500  flex items-center  text-14 font-6 pb-1">
            
     <svg xmlns="http://www.w3.org/2000/svg" className="mr-1" width="11" height="11" viewBox="0 0 21 21" fill="currentColor">
<path d="M13.125 11.8125V16.0781C13.125 17.325 13.8469 18.5063 15.0281 19.0312L16.4062 19.6875L17.7844 19.0312C18.9 18.5063 19.6875 17.325 19.6875 16.0781V11.8125H13.125ZM18.375 16.0781C18.375 16.8656 17.9156 17.5219 17.2594 17.85L16.4062 18.2437L15.5531 17.85C14.8969 17.5219 14.4375 16.8 14.4375 16.0781V13.125H18.375V16.0781ZM10.5 13.125C9.05625 13.125 7.875 11.9437 7.875 10.5C7.875 9.05625 9.05625 7.875 10.5 7.875C11.9437 7.875 13.125 9.05625 13.125 10.5H11.8125C11.8125 9.77812 11.2219 9.1875 10.5 9.1875C9.77812 9.1875 9.1875 9.77812 9.1875 10.5C9.1875 11.2219 9.77812 11.8125 10.5 11.8125V13.125Z" fill="#555555" fill-opacity="0.7"/>
<path d="M10.5 16.4062C7.21875 16.4062 4.59375 13.7812 4.59375 10.5C4.59375 7.21875 7.21875 4.59375 10.5 4.59375C13.7812 4.59375 16.4062 7.21875 16.4062 10.5H15.0938C15.0938 7.94062 13.0594 5.90625 10.5 5.90625C7.94062 5.90625 5.90625 7.94062 5.90625 10.5C5.90625 13.0594 7.94062 15.0938 10.5 15.0938V16.4062Z" fill="#555555" fill-opacity="0.7"/>
<path d="M10.5 19.6875C5.44688 19.6875 1.3125 15.5531 1.3125 10.5C1.3125 5.44688 5.44688 1.3125 10.5 1.3125C15.5531 1.3125 19.6875 5.44688 19.6875 10.5H18.375C18.375 6.16875 14.8313 2.625 10.5 2.625C6.16875 2.625 2.625 6.16875 2.625 10.5C2.625 14.8313 6.16875 18.375 10.5 18.375V19.6875Z" fill="#555555" fill-opacity="0.7"/>
</svg>        Contacts</button>
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
