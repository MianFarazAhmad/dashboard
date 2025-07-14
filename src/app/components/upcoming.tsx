'use client';
import Image from "next/image";
export default function ReminderJobsPanel() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[60%_40%] pt-5 gap-2">
      {/* Upcoming Reminders */}
      <div className=" p-6 bg-white  rounded shadow">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-6 text-18   flex-grow ">Upcoming Reminders</h2>
        
        <div className="mx-5 xs-d-none">
                <Image
                                   src="/icon/bag.png"
                                   alt="Dashboard Icon"
                                   width={20}
                                   height={20}
                                 />  </div><button className="flex xs-d-none  items-center bg-gray-800 text-white px-3 h-8 text-sm rounded hover:bg-gray-700">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Reminder
          </button>
        </div>

        <div className="space-y-4">
          {/* Reminder 1 - Overdue */}
         <div className="flex items-start border border-red-200 rounded border-l-[5px] border-l-red-400 bg-white p-3 rounded-l-lg">
  <div className="text-red-400 mr-3">
    <Image
      src="/icon/bellred.svg"
      alt="Dashboard Icon"
      width={32}
      height={32}
    />
  </div>
  <div className="flex-1">
    <p className="text-sm font-medium text-red-400">
      OVERDUE: Renew DOT Permit
    </p>
    <p className="text-xs text-gray-600">
      ABC Trucking DOT permit needs renewal
    </p>
  </div>
  <span className="text-xs bg-red-50 px-1 py-1 rounded text-red-400">
    Yesterday
  </span>
</div>


          {/* Reminder 2 */}
          <div className="flex items-start border border-gray-200 p-3 rounded bg-white">
            <div className="text-yellow-500 mr-3">
               <Image
                                   src="/icon/bellinfo.svg"
                                   alt="Dashboard Icon"
                                   width={32}
                                   height={32}
                                 /> 
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">John Smith’s license expires in 2 days</p>
              <p className="text-xs text-gray-600">Driver License Renewal</p>
            </div>
            <span className="text-xs text-gray-500 xs-d-none bg-brand2 px-1 py-1 rounded">Today</span>
          </div>

          {/* Reminder 3 */}
          <div className="flex items-start border border-gray-200 p-3 rounded bg-white">
            <div className="text-blue-500 mr-3">
             <Image
                                   src="/icon/primary.svg"
                                   alt="Dashboard Icon"
                                   width={32}
                                   height={32}
                                 /> 
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Schedule inspection for Truck #T-123</p>
              <p className="text-xs text-gray-600">Vehicle Inspection Due</p>
            </div>
            <span className="text-xs text-gray-500 xs-d-none px-1 py-1 rounded bg-brand2">Today</span>
          </div>
        </div>
      </div>

      {/* Pending Jobs */}
      <div className=" p-6 bg-white  rounded shadow">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-6 text-18  flex-grow ">Pending Jobs</h2>
          <button className="flex items-center bg-gray-800 text-white px-3 h-8 text-sm rounded hover:bg-gray-700">
            + Add New Job
          </button>
        </div>

        <div className="space-y-4">
          {/* Job 1 */}
          <div className="border   p-2 rounded">
            <div className="flex justify-between items-center mb-1">
              <p className="text-15 font-medium">Add new driver to Trucking</p>
              <span className="text-xs text-blue-600 font-medium cursor-pointer hover:underline bg-brand1 rounded px-1 py-1">Inspection</span>
            </div>
            <p className="text-xs text-gray-600 mb-2">Client called to add a new driver. Need to collect documents and add to system.</p>
            <div className="flex items-center justify-between">
              <div className="text-10 text-gray-600">
                <span className=" px-2 py-0.5 rounded bg-brand2">JD</span> Assigned to: Jane Doe
              </div>
              <div className="space-x-2">
                <button className="text-xs border border-[#68CFF7] text-[#68CFF7]   px-3 py-1 rounded hover:bg-gray-300">Reassign</button>
                <button className="text-xs bg-[#68CFF7] text-white px-3 py-1 rounded hover:bg-[#68CFF7]">Complete</button>
              </div>
            </div>
          </div>

          {/* Job 2 - Overdue */}
          <div className="border border-red-200  p-2 rounded">
            <div className="flex justify-between items-center mb-1">
              <p className="text-15 font-medium text-red-400">Process payment for XYZ</p>
              <span className="text-xs text-red-400 bg-red-50 px-1 py-1 rounded font-medium">Overdue</span>
            </div>
            <p className="text-xs text-gray-600 mb-2">Client made a payment via check. Need to process and update account.</p>
            <div className="flex items-center justify-between">
              <div className="text-10 text-gray-600">
                <span className=" px-2 py-0.5 rounded bg-brand2">JD</span> Assigned to: Current User
              </div>
              <div className="space-x-2">
                <button className="text-xs border text-[#68CFF7] border-[#68CFF7]  px-3 py-1 rounded hover:bg-gray-300">Reassign</button>
                <button className="text-xs bg-[#68CFF7] text-white px-3 py-1 rounded hover:bg-[#68CFF7]">Complete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
