'use client';
import Image from 'next/image';
import SidebarItem from './item';
import Link from 'next/link';

interface ISubItem {
  name: string;
  path: string;
}

interface ISidebarItem {
  
  name: string;
  path: string;
  icon: () => JSX.Element;
  items?: ISubItem[];
}

const items: ISidebarItem[] = [
  {
    name: 'Dashboard',
    path: '/',
    icon: DashboardIcon,
  },
  {
    name: 'Companies',
    path: '/companies',
    icon: CompanyIcon,
  },
  {
    name: 'Drivers',
    path: '/drivers',
    icon: DriverIcon,
  },
  {
    name: 'Vehicles',
    path: '/accounts',
    icon: VehIcon,
  },
  {
    name: 'Documents',
    path: '/accounts',
    icon: DocumentIcon,
  },
  {
    name: 'Compliances',
    path: '/accounts',
    icon: CompanyIcon,
  },
  {
    name: 'Alerts',
    path: '/accounts',
    icon: AlertIcon,
  },
  // {
  //   name: 'Settings',
  //   path: '/settings',
  //   icon: SettingsIcon,
  //   items: [
  //     { name: 'General', path: '/settings' },
  //     { name: 'Security', path: '/settings/security' },
  //     { name: 'Notifications', path: '/settings/notifications' },
  //   ],
  // },
];

const Sidebar = () => {
  return (
    <aside className="w-[15rem] bg-[#F0FAFE] h-screen flex flex-col justify-between fixed">
    {/* Top Logo Section */}
    <div>
      <div className="">
           <Link href={'/'}>
        <img src="/logo.png" alt="CTS Logo" className="" /></Link>
        <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[240px] border-l-transparent border-b-[20px] border-b-[#eaf8ff]"></div>
      </div>
        <div className="flex flex-col space-y-2 pt-4 ">
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </div>
      </div>
      <div className="border-t border-gray-300 p-4">
        <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 w-full">
          <LogoutIcon />
          Logout
        </button>
      </div>
    </aside>
    
  );
};

export default Sidebar;

// Icon Components
function DashboardIcon() {
  return <Image src="/icon/home.png" alt="Dashboard Icon" width={21} height={21} />;
}

function CompanyIcon() {
  return <Image src="/icon/company.png" alt="Transaction Icon" width={21} height={21} />;
}

function DriverIcon() {
  return <Image src="/icon/driver.png" alt="Payment Icon" width={21} height={21} />;
}

function VehIcon() {
  return <Image src="/icon/veh.png" alt="Accounts Icon" width={21} height={21} />;
}

function DocumentIcon() {
  return <Image src="/icon/doc.png" alt="Settings Icon" width={21} height={21} />;
}
function ComplianceIcon() {
  return (
    <Image
      src="/icon/comp.png"
      alt="Dashboard Icon"
      width={21}
      height={21}
    />
  );
}

function AlertIcon() {
  return (
    <Image
      src="/icon/alert.png"
      alt="Dashboard Icon"
      width={21}
      height={21}
    />
  );
}

function LogoutIcon() {
   return (
    <Image
      src="/icon/log.png"
      alt="Dashboard Icon"
      width={21}
      height={21}
    />
  );
}
