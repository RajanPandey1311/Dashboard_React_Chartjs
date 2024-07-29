import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className='w-full flex h-20 bg-teal-500'>
      <div className='flex mx-16 items-center justify-between w-full'>
        <div className='flex items-center w-full justify-between'>
          <button onClick={toggleSidebar} className='text-white'>
            <FaBars size={24} />
          </button>
          <h1 className='ml-4 text-white text-2xl'>Hello,</h1>
        </div>
      </div>
      {sidebarOpen && (
        <div className='fixed top-0 left-0 w-64 h-full'>
          <Sidebar toggleSidebar={toggleSidebar} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
