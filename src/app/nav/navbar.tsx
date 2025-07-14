'use client';
import Image from 'next/image';
import { useState } from 'react';
import SearchModal from '../components/model/searchModel';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavbarProps = {
  title: string;
};

export default function Navbar({ title }: NavbarProps) {
  const [showModal, setShowModal] = useState(false);
  const pathname = usePathname();

  return (
    <header className="h-16 w-full bg-white flex items-center justify-between px-6">
      {/* Left Section: Toggle + Title */}
      <div className="flex items-center gap-4">
        <button className="text-gray-600 hover:text-blue-500">
          <Image src="/icon/tab.svg" alt="Dashboard Icon" width={24} height={24} />
        </button>
        <h1 className="font-6 text-20 text-gray-800">{title}</h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* ✅ Search button only on "/" */}
        {pathname === '/' && (
          <>
            <button
              onClick={() => setShowModal(true)}
              className="text-gray-500 hover:text-blue-500"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </button>
            {/* Search Modal */}
            {showModal && <SearchModal onClose={() => setShowModal(false)} />}
          </>
        )}

        {/* Notification Icon with Badge */}
        <div className="relative">
          <button className="text-gray-500 mt-1 hover:text-blue-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <span className="absolute -top-2 -right-1 bg-orange-400 text-white text-10 font-7 rounded-full w-5 h-5 flex items-center justify-center">12</span>
        </div>

        {/* User Info */}
        <div className="flex items-center gap-2">
          <img
            src="/profile.png"
            alt="User"
            className="w-8 h-8 rounded-full object-cover mr-2"
          />
          <div className="text-left">
            <p className="text-15 font-7 text-gray-800">Erwin Smith</p>
            <p className="text-10 font-4 text-gray-500">Super Admin</p>
          </div>
          <Link href="/profile">
            <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5.25 7.75l4.5 4.5 4.5-4.5" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
