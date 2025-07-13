'use client';
import { FC } from 'react';
import { X, Search } from 'lucide-react';

// ✅ Define the prop types
interface SearchModalProps {
  onClose: () => void;
}

// ✅ Optional: Define the structure of your result items
interface ResultItem {
  title: string;
  location: string;
}

// ✅ Main Component
const SearchModal: FC<SearchModalProps> = ({ onClose }) => {
  const results: ResultItem[] = [
    { title: 'Vehicles', location: 'In Companies Dashboard' },
    { title: 'Vehicles Maintenance', location: "In Driver's Dashboard" },
    { title: 'Vehicles Records', location: 'In Admin Dashboard' },
    { title: 'Vehicles Alerts', location: 'In Companies Alerts' },
    { title: 'Vehicles Documents', location: 'In Companies Dashboard' },
  ];

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white w-[600px] max-w-full rounded-lg shadow-lg relative px-6 py-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Heading */}
        <h2 className="text-20 font-6 mb-4">Search</h2>

        {/* Search Input */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search keywords..."
            className="w-full border border-gray-300 font-6 rounded-md py-2 pl-10 bg-brand2 pr-4 text-16 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
         
        </div>

        {/* Results List */}
        <ul className="max-h-64 overflow-y-auto divide-y divide-gray-100">
          {results.map((item, idx) => (
            <li
              key={idx}
              className="py-3 px-2 hover:bg-gray-50 cursor-pointer transition"
            >
              <p className="text-16 font-6 text-gray-800">
                {idx + 1}. {item.title}
              </p>
              <p className="text-12 font-4 text-gray-500">{item.location}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchModal;
