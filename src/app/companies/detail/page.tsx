'use client';
import { useNavbarTitle } from '../../nav/NavbarTitleContext';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
export const icons = {
  facebook: '/icon/fb.svg',

};

const tabs = ['Information', 'IFTA', 'Alerts', 'Vehicles', 'Drivers', 'Documents'];

export default function CompanyTabs() {
  const { setTitle } = useNavbarTitle();

  const [activeTab, setActiveTab] = useState('Information');
  useEffect(() => {
    setTitle('Companies Details');
  }, []);
  return (
    <div className='p-6 mdv:p-2 '>
      <div className=" bg-white min-h-screen rounded p-4  mdv:p-2 space-y-6">
        {/* Header */}
        <div className="flex  items-end justify-between w-full bg-white p-4 rounded-lg">
          <div >
<div className='flex items-center   space-x-2'>
        <div className="bg-blue-100  p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 39 39" fill="none"><path d="M0 19.175C0 8.58496 8.58496 0 19.175 0C29.7651 0 38.3501 8.58496 38.3501 19.175C38.3501 29.7651 29.7651 38.3501 19.175 38.3501C8.58496 38.3501 0 29.7651 0 19.175Z" fill="#68CFF7" fill-opacity="0.22"></path><path d="M21.652 9.53406H13.2629C12.7685 9.53406 12.2943 9.73047 11.9447 10.0801C11.5951 10.4297 11.3987 10.9039 11.3987 11.3983V26.3122C11.3987 26.8067 11.5951 27.2808 11.9447 27.6304C12.2943 27.9801 12.7685 28.1765 13.2629 28.1765H24.4484C24.9428 28.1765 25.417 27.9801 25.7666 27.6304C26.1162 27.2808 26.3126 26.8067 26.3126 26.3122V14.1947L21.652 9.53406Z" stroke="#68CFF7" stroke-width="1.49139" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.7195 9.53406V13.2625C20.7195 13.757 20.9159 14.2311 21.2655 14.5808C21.6151 14.9304 22.0893 15.1268 22.5837 15.1268H26.3122" stroke="#68CFF7" stroke-width="1.49139" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.8555 18.8551V24.4478" stroke="#68CFF7" stroke-width="1.49139" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.6518 21.6515L18.8554 18.8551L16.0591 21.6515" stroke="#68CFF7" stroke-width="1.49139" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>    <div className='flex  justify-between'><h2 className="text-xl font-semibold text-gray-800">
            ABC Trucking</h2>
              <div className='border border-1 px-3 ml-8 rounded text-gray-500'> 
                <span className=" py-1 font-5 text-xs rounded-full   text-[#2FCE21]">●</span> Active</div> 
                </div>

         </div>   <p className="text-sm text-gray-500 ml-12">View and manage Company Information</p>


          </div>



          <div className="flex items-center gap-2">

            <button className="px-4 mdv:px-2 flex items-center py-2 mdv:py-1 text-sm text-white bg-[#111827] hover:bg-gray-800 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M7.52258 7.22729H6.52258C5.99215 7.22729 5.48344 7.43801 5.10837 7.81308C4.7333 8.18815 4.52258 8.69686 4.52258 9.22729V18.2273C4.52258 18.7577 4.7333 19.2664 5.10837 19.6415C5.48344 20.0166 5.99215 20.2273 6.52258 20.2273H15.5226C16.053 20.2273 16.5617 20.0166 16.9368 19.6415C17.3119 19.2664 17.5226 18.7577 17.5226 18.2273V17.2273" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.5226 5.2274L19.5226 8.2274M20.9076 6.8124C21.3014 6.41856 21.5227 5.88438 21.5227 5.3274C21.5227 4.77042 21.3014 4.23625 20.9076 3.8424C20.5137 3.44856 19.9796 3.22729 19.4226 3.22729C18.8656 3.22729 18.3314 3.44856 17.9376 3.8424L9.52258 12.2274V15.2274H12.5226L20.9076 6.8124Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
              </svg> <span className='xs-d-none'> Edit Company</span>
            </button>
          </div>
        </div>
<div className="flex px-3 items-center space-x-2">
 
  <div className="w-10 h-2 bg-brand rounded"></div>

  <div className="w-10 h-2 bg-brand rounded"></div>

  <div className="w-10 h-2 bg-brand rounded"></div>

  <div className="w-10 h-2 bg-brand rounded"></div>
 
  <div className="w-10 h-2 bg-gray-200 rounded"></div>
 
  <div className="w-10 h-2 bg-gray-200 rounded"></div>

  <div className="w-10 h-2 bg-gray-200 rounded"></div>
</div>
        {/* Tab Navigation */}
        <div className='mdv:p-3'>
        <div className="flex space-x-4  bg-brand2 py-3  overflow-x-auto rounded-md">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 px-4 mx-3 py-2 text-sm font-medium rounded ${activeTab === tab ? 'bg-brand text-white' : 'text-gray-600 hover:text-gray-800'
                }`}
            >
              {tab}
            </button>
          ))}
        </div></div>

        {/* Dynamic Tab Content */}
        <div className="">
          {activeTab === 'Information' &&  <InformationTab />}
          {activeTab === 'IFTA' && <p className="text-gray-500">IFTA info will be here</p>}
          {activeTab === 'Alerts' && <p className="text-gray-500">Alerts info will be here</p>}
          {activeTab === 'Vehicles' && <p className="text-gray-500">Vehicle list here</p>}
          {activeTab === 'Drivers' && <p className="text-gray-500">Driver list here</p>}
          {activeTab === 'Documents' && <p className="text-gray-500">Document upload section</p>}
        </div>
      </div></div>
  );
}

// Info tab content
const InformationTab = () => {
  return (
    <div className="space-y-6">
      {/* Company Info */}
      <Section
        title="Company Information"
        fields={[
          { label: 'DOT Number', value: '12345678' },
          { label: 'MC Number', value: 'MC-987654' },
          { label: 'CA Motor Carrier Permit Number', value: 'CA-123456' },
          { label: 'Physical Address', value: '123 Main St, Los Angeles, CA 90001' },
          { label: 'Mailing Address', value: 'PO Box 1234, Los Angeles, CA 90001' },
        ]}
      />

      {/* Form E */}
      <Section
        title="Form E"
        fields={[
          { label: 'Id Number', value: 'E-789012' },
          { label: 'IFTA Base Jurisdiction', value: 'CA' },
          { label: 'Website', value: 'www.abctrucking.com' },
          { label: 'Username', value: 'abcadmin' },
          { label: 'Password', value: '--------' },
          { label: 'Description', value: 'Write Description...' },
        ]}
      />
      <AccessReportSection />
      {/* Website & Login Information */}
      <div className="relative border rounded-lg p-5 bg-white shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Website & Login Information</h2>

        <div className="absolute -top-4 right-16 bg-yellow-400 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-md">
          M
        </div>

        <button className="absolute top-4 right-4 w-10 h-10 bg-gray-900 text-white text-2xl rounded-md flex items-center justify-center">
          +
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Website</label>
            <input
              type="text"
              defaultValue="www.abctrucking.com"
              className="w-full border rounded px-3 py-2 text-sm"
            />
            <label className="block text-sm font-medium mt-2">Description</label>
            <input
              type="text"
              placeholder="Write Description..."
              className="w-full  border rounded px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              defaultValue="abcadmin"
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value="--------"
              className="w-full border rounded px-3 py-2 text-sm"
              readOnly
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Website</label>
            <input
              type="text"
              defaultValue="www.abctrucking.com"
              className="w-full border rounded px-3 py-2 text-sm"
            />
            <label className="block text-sm font-medium mt-2">Description</label>
            <input
              type="text"
              placeholder="Write Description..."
              className="w-full  border rounded px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              defaultValue="abcadmin"
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value="--------"
              className="w-full border rounded px-3 py-2 text-sm"
              readOnly
            />
          </div>
        </div>
      </div>

      {/* ✅ New Custom Fields Section */}
      <CustomFieldsSection />

    </div>
  );
};

const Section = ({
  title,
  fields,
}: {
  title: string;
  fields: { label: string; value: string }[];
}) => (
  <div>
    <div className="border rounded-lg p-4 space-y-4">
      <h3 className="text-md font-semibold text-gray-700">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {fields.map((field, idx) => (
          <div key={idx}>
            <label className="text-xs text-gray-500">{field.label}</label>
            <input
              type="text"
              readOnly
              value={field.value}
              className="mt-1 w-full text-sm px-3 py-2 border rounded-md bg-gray-50 text-gray-800"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ✅ Custom Fields Section Component
const CustomFieldsSection = () => {
  const [status, setStatus] = useState('Active');

  return (
    <div className="p-6 rounded-lg border space-y-4 w-full  mx-auto bg-white shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800">Custom Fields</h2>

      <div className="flex flex-wrap gap-4">
        {/* Account Manager */}
        <div className="bg-gray-50 px-4 py-3 rounded-lg flex-1 min-w-[200px]">
          <p className="text-sm font-medium text-gray-700">Account Manager</p>
          <p className="text-sm text-gray-600">John Smith</p>
        </div>

        {/* Contract Renewal */}
        <div className="bg-gray-50 px-4 py-3 rounded-lg flex-1 min-w-[200px]">
          <p className="text-sm font-medium text-gray-700">Contract Renewal</p>
          <p className="text-sm text-gray-600">2025-12-31</p>
        </div>

        {/* Status */}
        <div className="flex  items-center  justify-between bg-gray-50 px-4 py-3 rounded-lg flex-1 min-w-[200px]">
          <p className="text-sm font-medium text-gray-700 mb-1">Status</p>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="px-3 py-1 border rounded focus:outline-none"
          >
            <option value="Active">🟢 Active</option>
            <option value="Inactive">🔴 Inactive</option>
          </select>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-2 mt-4">
        <button className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100">
          Cancel
        </button>
        <button className="px-4 py-2 rounded bg-gray-900 text-white flex items-center gap-2 hover:bg-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
            <path d="M16.4318 21.2273V16.4623C16.4315 16.2533 16.39 16.0465 16.3098 15.8535C16.2295 15.6606 16.112 15.4854 15.9639 15.3379C15.8159 15.1904 15.6402 15.0735 15.447 14.994C15.2538 14.9145 15.0467 14.8738 14.8378 14.8743H9.52576C9.31679 14.8738 9.10977 14.9145 8.91653 14.994C8.72329 15.0735 8.54763 15.1904 8.39958 15.3379C8.25154 15.4854 8.13402 15.6606 8.05375 15.8535C7.97348 16.0465 7.93202 16.2533 7.93176 16.4623V21.2273M16.4318 3.51231V5.8743C16.4315 6.08328 16.39 6.29014 16.3098 6.48308C16.2295 6.67602 16.112 6.85124 15.9639 6.99873C15.8159 7.14621 15.6402 7.26307 15.447 7.34261C15.2538 7.42216 15.0467 7.46283 14.8378 7.46231H9.52576C9.31679 7.46283 9.10977 7.42216 8.91653 7.34261C8.72329 7.26307 8.54763 7.14621 8.39958 6.99873C8.25154 6.85124 8.13402 6.67602 8.05375 6.48308C7.97348 6.29014 7.93202 6.08328 7.93176 5.8743V3.2273M16.4318 3.51231C16.017 3.32449 15.567 3.22733 15.1118 3.2273H7.93176M16.4318 3.51231C16.7758 3.66831 17.0928 3.88631 17.3658 4.15731L19.7478 6.5323C20.0435 6.82662 20.2783 7.17644 20.4386 7.56169C20.5988 7.94694 20.6815 8.36004 20.6818 8.77731V18.0493C20.6815 18.4673 20.5988 18.8812 20.4385 19.2672C20.2781 19.6533 20.0432 20.0039 19.7472 20.2991C19.4512 20.5943 19.0999 20.8282 18.7134 20.9874C18.3269 21.1467 17.9128 21.2282 17.4948 21.2273H6.86976C6.45174 21.2284 6.03761 21.147 5.65107 20.9878C5.26452 20.8287 4.91315 20.5949 4.61705 20.2998C4.32095 20.0047 4.08594 19.6542 3.92545 19.2682C3.76496 18.8822 3.68216 18.4683 3.68176 18.0503V6.40331C3.68229 5.98536 3.76519 5.57163 3.92574 5.18575C4.08628 4.79987 4.32132 4.44943 4.6174 4.15446C4.91349 3.85949 5.26482 3.62578 5.6513 3.46669C6.03778 3.3076 6.45182 3.22625 6.86976 3.2273H7.93176" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          Save Changes
        </button>
      </div>
    </div>
  );
};
const AccessReportSection = () => {

  return (
   <div className="p-6 rounded-lg border space-y-4 w-full bg-white shadow-sm">

  <div className="max-w-xl p-4 ">
    {/* Title */}
    <h2 className="text-lg font-semibold text-gray-900 mb-2">Access Report</h2>
    {/* Subheader (optional) */}
   
    {/* Scrollable Log Box */}
    <div className="bg-gray-100 rounded-lg p-3 max-h-24 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
      <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
        <li>John Viewed Password on 02-02-2024</li>
        <li>IBC Resets Password on 02-02-2024</li>
      </ul>
    </div>
  </div>
</div>

  );
};
