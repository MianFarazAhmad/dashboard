'use client'
import { useState,useEffect } from "react";
import Image from "next/image";
import Cards from "./components/cards";
import Filter from "./components/filter";
import MobileSidebar from "./components/mobileSidebar";
import List from "./components/list";
import ComplianceChart from "./components/chart";
import Activity from "./components/activity";
import ReminderJobsPanel from "./components/upcoming";
import { useNavbarTitle } from './nav/NavbarTitleContext';
export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
    const { setTitle } = useNavbarTitle();

  useEffect(() => {
    setTitle('Dashboard');
  }, []);
  return (
    <div className="px-6" >
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
          <div className="  font-medium text-22 pl-4">  Dashboard  </div>
        </button>

        <MobileSidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>
      <div className='xs-d-none '>
        <Filter />
      </div>
      <Cards />
      <div className="grid grid-cols-1 md:grid-cols-5 pt-5 gap-2">
        <div className="md:col-span-3">
          <ComplianceChart />
        </div>
        <div className="md:col-span-2">
          <List />
        </div>
      </div>

      <Activity />

      <ReminderJobsPanel />

    </div>
  );
}
