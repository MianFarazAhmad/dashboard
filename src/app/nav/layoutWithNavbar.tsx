// app/nav/LayoutWithNavbar.tsx
'use client';

import { useNavbarTitle } from './NavbarTitleContext';
import Navbar from './navbar';
import Sidebar from '../components/sidebar';

export default function LayoutWithNavbar({ children }: { children: React.ReactNode }) {
  const { title } = useNavbarTitle();

  return (
    <>
      <div className="xs-d-none">
        <Sidebar />
      </div>
      <main className="lg:ml-[15rem] bg-[#F4F4F4] min-h-screen">
        <div className="xs-d-none">
          <Navbar title={title} />
        </div>
        {children}
      </main>
    </>
  );
}
