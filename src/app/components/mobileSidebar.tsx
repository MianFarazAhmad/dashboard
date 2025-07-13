import Sidebar from './sidebar';
import Image from 'next/image';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[240px] bg-white shadow-lg transform transition-transform duration-300 z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="relative bg-amber-400 z-10">
          <button
            className="text-white right-0 mr-5 mt-2 absolute"
            onClick={onClose}
          >
            <Image
              src="/icon/icon.png"
              alt="Dashboard Icon"
              width={22}
              height={22}
            />
          </button>
        </div>
        <div>
          <Sidebar />
        </div>
      </div>
    </>
  );
}
