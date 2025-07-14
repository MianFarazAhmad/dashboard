'use client'
import React, { useState, useEffect } from 'react';
import { useNavbarTitle } from '../nav/NavbarTitleContext';
import { ChevronDown, LucideIcon } from "lucide-react";
import MobileSidebar from '../components/mobileSidebar';
import Image from 'next/image';
type CompanyStatus = 'Active' | 'In-Active' | 'In Progress';

interface Company {
    name: string;
    dot: string;
    mc: string;
    caMcp: string;
    expiry: string;
    alerts: string;
    status: CompanyStatus;
}

const CompaniesList: React.FC = () => {
    const { setTitle } = useNavbarTitle();
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        setTitle('Companies');
    }, []);
    const initialCompanies: Company[] = [
        {
            name: 'ABC Trucking',
            dot: '12345678',
            mc: 'MC-987654',
            caMcp: 'CA-123456',
            expiry: '8-Nov-25',
            alerts: '02',
            status: 'Active',
        },
        {
            name: 'TransCargo',
            dot: '87654321',
            mc: 'MC-987654',
            caMcp: 'CA-123456',
            expiry: '8-Nov-25',
            alerts: '02',
            status: 'In-Active',
        },
        {
            name: 'Allied Services',
            dot: '87654321',
            mc: 'MC-987654',
            caMcp: 'CA-123456',
            expiry: '8-Nov-25',
            alerts: '02',
            status: 'Active',
        },
        {
            name: 'Demi Transport',
            dot: '83487388',
            mc: 'MC-987654',
            caMcp: 'CA-123456',
            expiry: '8-Nov-25',
            alerts: '02',
            status: 'In Progress',
        },
        {
            name: 'Services Trans',
            dot: '83487388',
            mc: 'MC-987654',
            caMcp: 'CA-123456',
            expiry: '8-Nov-25',
            alerts: '02',
            status: 'Active',
        },
    ];
    const statusDotColors: Record<CompanyStatus, string> = {
        Active: 'bg-green-500',
        'In-Active': 'bg-red-500',
        'In Progress': 'bg-yellow-500',
    };

    const [companies, setCompanies] = useState<Company[]>(initialCompanies);
    const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);

    const handleStatusChange = (index: number, newStatus: CompanyStatus) => {
        const updatedCompanies = [...companies];
        updatedCompanies[index].status = newStatus;
        setCompanies(updatedCompanies);
    };

    const statusStyles: Record<CompanyStatus, string> = {
        Active: 'bg-green-100 text-green-600',
        'In-Active': 'bg-red-100 text-red-600',
        'In Progress': 'bg-yellow-100 text-yellow-600',
    };

    const handleAction = (action: string, company: Company) => {
        alert(`${action} clicked for ${company.name}`);
        setOpenDropdownIndex(null);
    };

    return (
        <div>
            <div className="flex md-hidden">
                <button
                    className="p-4  flex items-center "
                    onClick={() => setSidebarOpen(true)}
                >
                    <Image
                        src="/icon/solid.svg"
                        alt="Dashboard Icon"
                        width={38}
                        height={38}
                    />
                    <div className="  font-medium text-22 pl-4">  Companies  </div>
                </button>

                <MobileSidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
            </div>

            <div className=" p-6">
                <div className="flex flex-col md:flex-row md:items-center rounded-t-md justify-between px-6 py-4 bg-white shadow-sm">
                    {/* Left Section: Title and Description */}
                    <div className="flex items-center space-x-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                            {/* Icon Placeholder */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 39 39" fill="none">
                                <path d="M0 19.175C0 8.58496 8.58496 0 19.175 0C29.7651 0 38.3501 8.58496 38.3501 19.175C38.3501 29.7651 29.7651 38.3501 19.175 38.3501C8.58496 38.3501 0 29.7651 0 19.175Z" fill="#68CFF7" fill-opacity="0.22" />
                                <path d="M21.652 9.53406H13.2629C12.7685 9.53406 12.2943 9.73047 11.9447 10.0801C11.5951 10.4297 11.3987 10.9039 11.3987 11.3983V26.3122C11.3987 26.8067 11.5951 27.2808 11.9447 27.6304C12.2943 27.9801 12.7685 28.1765 13.2629 28.1765H24.4484C24.9428 28.1765 25.417 27.9801 25.7666 27.6304C26.1162 27.2808 26.3126 26.8067 26.3126 26.3122V14.1947L21.652 9.53406Z" stroke="#68CFF7" stroke-width="1.49139" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M20.7195 9.53406V13.2625C20.7195 13.757 20.9159 14.2311 21.2655 14.5808C21.6151 14.9304 22.0893 15.1268 22.5837 15.1268H26.3122" stroke="#68CFF7" stroke-width="1.49139" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.8555 18.8551V24.4478" stroke="#68CFF7" stroke-width="1.49139" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21.6518 21.6515L18.8554 18.8551L16.0591 21.6515" stroke="#68CFF7" stroke-width="1.49139" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold text-gray-900">Companies List</h1>
                            <p className="text-11 text-gray-500">Manage transportation companies and their details</p>
                        </div>
                        <button className="bg-gray-900 md-hidden  text-white px-4 py-2 rounded-md hover:bg-gray-800">
                            + <span className='xs-d-none'> Add Company</span>
                        </button>
                    </div>

                    {/* Right Section: Controls */}
                    <div className="flex  justify-end items-center mt-4 md:mt-0 space-x-3">
                        {/* Search Box */}
                        <div className="relative xs-d-none ">
                            <input
                                type="text"

                                className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                            <div className="absolute  left-3 top-2.5 text-gray-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"></path></svg>
                            </div>
                        </div>

                        {/* Filter Dropdown */}
                        <div className="relative flex items-center w-fit">
                            {/* Select Dropdown */}
                            <select
                                className="appearance-none border-2 border-[#191D3182] text-[#191D3182] text-xs py-2 px-4 rounded pr-8 bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option>All Status</option>
                                <option>Status A</option>
                                <option>Status B</option>
                            </select>

                            {/* Dropdown Icon */}
                            <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
                                <ChevronDown size={16} />
                            </div>

                            {/* Profile Images */}
                            <div className="absolute xs-d-none bg-white px-1 py-1 rounded-t-full rounded-br-full -top-3 -right-10 flex space-x-[-8px]">
                                <img
                                    src="/profile.png"
                                    alt="User 1"
                                    className="w-6 h-6 rounded-full border border-white shadow object-cover"
                                />

                            </div>
                        </div>
                        {/* Add Company Button */}
                        <button className="bg-gray-900 xs-d-none  text-white px-4 py-2 rounded-md hover:bg-gray-800">
                            + <span className='xs-d-none'> Add Company</span>
                        </button>

                        {/* Avatar Circle */}

                    </div>
                </div>

                <div className="bg-white shadow rounded-b-lg overflow-x-auto">
                    <table className="min-w-full text-sm text-left whitespace-nowrap">
                        <thead className="">
                            <tr>
                                <th className="px-6 py-4 font-medium ">Company Name</th>
                                <th className="px-6 py-4 font-medium ">DOT Number</th>
                                <th className="px-6 py-4 font-medium ">MC Number</th>
                                <th className="px-6 py-4 font-medium ">CA-MCP Number</th>
                                <th className="px-6 py-4 font-medium ">Permit Expiry</th>
                                <th className="px-6 py-4 font-medium ">Alerts</th>
                                <th className="px-6 py-4 font-medium ">Status</th>
                                <th className="px-6 py-4 font-medium ">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {companies.map((company, index) => (
                                <tr key={index} className="border-t hover:bg-gray-50 relative">
                                    <td className="px-6 font-6  text-[#191D3199] py-4 hover:text-blue-500  hover:underline cursor-pointer">
                                        {company.name}
                                    </td>
                                    <td className="px-6 py-4 text-gray-500">{company.dot}</td>
                                    <td className="px-6 py-4 text-gray-500">{company.mc}</td>
                                    <td className="px-6 py-4 text-gray-500">{company.caMcp}</td>
                                    <td className="px-6 py-4 text-gray-500">{company.expiry}</td>
                                    <td className="px-6 py-4 text-gray-500">{company.alerts}</td>
                                    <td className="px-6 py-4 text-gray-500">
                                        <div className="relative inline-block">
                                            <select

                                                value={company.status}
                                                onChange={(e) => handleStatusChange(index, e.target.value as CompanyStatus)}
                                                className="pl-6 pr-3 w-[7.375rem]   py-1 border  -32 z-10 border-gray-300 rounded-full text-sm text-gray-700 appearance-none bg-white focus:outline-none"
                                            >
                                                <option className='font-12 ' value="Active">Active</option>
                                                <option className='font-12' value="In-Active">In-Active</option>
                                                <option className='font-12 ' value="In Progress">In Progress</option>
                                            </select>
                                            <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
                                                <ChevronDown size={16} />
                                            </div>
                                            <span
                                                className={`absolute top-1/2 left-2 transform -translate-y-1/2 w-2 h-2 rounded-full ${statusDotColors[company.status]}`}
                                            ></span>
                                        </div>
                                    </td>

                                    <td className="px-6 py-4 relative">
                                        <button
                                            onClick={() =>
                                                setOpenDropdownIndex(openDropdownIndex === index ? null : index)
                                            }
                                            className="text-gray-500 hover:brand"
                                        >
                                            ⋮
                                        </button>
                                        {openDropdownIndex === index && (
                                            <div className=" grid absolute right-4 top-10 bg-white border rounded shadow w-32 z-10">
                                                <button
                                                    onClick={() => handleAction('View', company)}
                                                    className=" flex items-center  w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className='mr-2' width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <path d="M8 3.89502C12.447 3.89502 14.5 8.00002 14.5 8.00002C14.5 8.00002 12.447 12.105 8 12.105C3.553 12.105 1.5 8.00002 1.5 8.00002C1.5 8.00002 3.553 3.89502 8 3.89502Z" stroke="#68CFF7" stroke-width="0.929" stroke-linejoin="round" />
                                                        <path d="M9.93993 8C9.94589 8.26634 9.89857 8.53119 9.80076 8.77899C9.70296 9.02679 9.55663 9.25256 9.37037 9.44303C9.18411 9.63351 8.96167 9.78485 8.71611 9.88817C8.47056 9.99149 8.20684 10.0447 7.94043 10.0447C7.67402 10.0447 7.4103 9.99149 7.16475 9.88817C6.91919 9.78485 6.69675 9.63351 6.51049 9.44303C6.32423 9.25256 6.1779 9.02679 6.0801 8.77899C5.98229 8.53119 5.93497 8.26634 5.94093 8C5.94093 7.46957 6.15164 6.96086 6.52672 6.58579C6.90179 6.21071 7.4105 6 7.94093 6C8.47136 6 8.98007 6.21071 9.35514 6.58579C9.73022 6.96086 9.94093 7.46957 9.94093 8H9.93993Z" stroke="#68CFF7" stroke-width="0.929" stroke-linejoin="round" />
                                                    </svg>    View
                                                </button>
                                                <button
                                                    onClick={() => handleAction('Edit', company)}
                                                    className="w-full flex items-center px-4 py-2 text-left text-sm hover:bg-gray-100"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className='mr-2' width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <path d="M2.66675 14H13.3334M3.77741 8.79131C3.49316 9.07621 3.33349 9.4622 3.33341 9.86465V12H5.48208C5.88475 12 6.27075 11.84 6.55541 11.5546L12.8887 5.21798C13.1729 4.93305 13.3325 4.54706 13.3325 4.14465C13.3325 3.74224 13.1729 3.35625 12.8887 3.07131L12.2634 2.44465C12.1224 2.30355 11.9549 2.19163 11.7706 2.11529C11.5863 2.03895 11.3888 1.99969 11.1893 1.99976C10.9898 1.99982 10.7923 2.0392 10.608 2.11565C10.4237 2.1921 10.2564 2.30413 10.1154 2.44531L3.77741 8.79131Z" stroke="#68CFF7" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>   Edit
                                                </button>
                                                <button
                                                    onClick={() => handleAction('Delete', company)}
                                                    className="w-full flex   items-center px-4 py-2 text-left text-sm hover:bg-gray-100 "
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className='mr-2' width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.51592 4.26667L5.05725 13.3653C5.0654 13.5009 5.12499 13.6283 5.22385 13.7215C5.32272 13.8146 5.45341 13.8666 5.58925 13.8667H10.4106C10.5464 13.8666 10.6771 13.8146 10.776 13.7215C10.8748 13.6283 10.9344 13.5009 10.9426 13.3653L11.4839 4.26667H4.51592ZM12.2859 4.26667L11.7413 13.4127C11.721 13.7519 11.572 14.0706 11.3247 14.3037C11.0774 14.5368 10.7504 14.6666 10.4106 14.6667H5.58925C5.24942 14.6666 4.92243 14.5368 4.67512 14.3037C4.4278 14.0706 4.27881 13.7519 4.25859 13.4127L3.71392 4.26667H2.33325V3.8C2.33325 3.71159 2.36837 3.62681 2.43088 3.5643C2.4934 3.50179 2.57818 3.46667 2.66659 3.46667H13.3333C13.4217 3.46667 13.5064 3.50179 13.569 3.5643C13.6315 3.62681 13.6666 3.71159 13.6666 3.8V4.26667H12.2859ZM9.33325 2C9.42166 2 9.50644 2.03512 9.56895 2.09763C9.63147 2.16014 9.66658 2.24493 9.66658 2.33333V2.8H6.33325V2.33333C6.33325 2.24493 6.36837 2.16014 6.43088 2.09763C6.49339 2.03512 6.57818 2 6.66658 2H9.33325ZM6.33325 6H7.13325L7.46658 12H6.66658L6.33325 6ZM8.86659 6H9.66658L9.33325 12H8.53325L8.86659 6Z" fill="#68CFF7" />
                                                    </svg>  Delete
                                                </button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex justify-between items-center xs-d-none mt-6">
                    <button className="px-4 py-2 border rounded text-sm text-gray-600">← Previous</button>
                    <div className="space-x-2 text-sm text-gray-600">
                        {[1, 2, 3, '...', 9, 10].map((item, i) => (
                            <button
                                key={i}
                                className={`px-3 py-1 rounded ${item === 1 ? 'bg-gray-800 text-white' : 'hover:bg-gray-200'}`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                    <button className="px-4 py-2 border rounded text-sm text-gray-600">Next →</button>
                </div>
            </div></div>
    );
};

export default CompaniesList;
