import Sidebar from './sidebar';
import Image from 'next/image';
// components/Sidebar.js
export default function MobileSidebar({ isOpen, onClose }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-[240px] bg-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
        <div className=" relative bg-amber-400 z-10">
      <button className=" text-white  right-0 mr-5 mt-2 absolute" onClick={onClose}>
        
          <Image
              src="/icon/icon.png"
              alt="Dashboard Icon"
              width={22}
              height={22}
            />
        
        
        </button></div>
      <div className="">

        <Sidebar/>
      </div>
    </div>
  );
}
