'use client'
import React, { useState,useEffect } from 'react';
import { useNavbarTitle } from '../nav/NavbarTitleContext';
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
    <div className=" p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-semibold">Companies List</h1>
          <p className="text-sm text-gray-500">Manage transportation companies and their details</p>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">+ Add Company</button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="min-w-full text-sm text-left whitespace-nowrap">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 font-medium text-gray-500">Company Name</th>
              <th className="px-6 py-4 font-medium text-gray-500">DOT Number</th>
              <th className="px-6 py-4 font-medium text-gray-500">MC Number</th>
              <th className="px-6 py-4 font-medium text-gray-500">CA-MCP Number</th>
              <th className="px-6 py-4 font-medium text-gray-500">Permit Expiry</th>
              <th className="px-6 py-4 font-medium text-gray-500">Alerts</th>
              <th className="px-6 py-4 font-medium text-gray-500">Status</th>
              <th className="px-6 py-4 font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company, index) => (
              <tr key={index} className="border-t hover:bg-gray-50 relative">
                <td className="px-6 py-4 hover:text-blue-500 font-medium hover:underline cursor-pointer">
                  {company.name}
                </td>
                <td className="px-6 py-4">{company.dot}</td>
                <td className="px-6 py-4">{company.mc}</td>
                <td className="px-6 py-4">{company.caMcp}</td>
                <td className="px-6 py-4">{company.expiry}</td>
                <td className="px-6 py-4">{company.alerts}</td>
               <td className="px-6 py-4">
  <div className="relative inline-block">
    <select
      value={company.status}
      onChange={(e) => handleStatusChange(index, e.target.value as CompanyStatus)}
      className="pl-6 pr-3 py-1 border border-gray-300 rounded-full text-sm text-gray-700 appearance-none bg-white focus:outline-none"
    >
      <option value="Active">Active</option>
      <option value="In-Active">In-Active</option>
      <option value="In Progress">In Progress</option>
    </select>
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
                    className="text-gray-500 hover:text-gray-800"
                  >
                    ⋮
                  </button>
                  {openDropdownIndex === index && (
                    <div className=" grid absolute right-4 top-10 bg-white border rounded shadow w-32 z-10">
                      <button
                        onClick={() => handleAction('View', company)}
                        className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleAction('Edit', company)}
                        className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleAction('Delete', company)}
                        className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 text-red-600"
                      >
                        Delete
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
      <div className="flex justify-between items-center mt-6">
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
    </div>
  );
};

export default CompaniesList;
