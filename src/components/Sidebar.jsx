import React from 'react';
import { FaTimes, FaTachometerAlt, FaShoppingCart, FaClipboardList, FaList, FaMoneyBillAlt, FaUsers, FaConciergeBell, FaChartLine, FaCog } from 'react-icons/fa';

const Sidebar = ({ toggleSidebar }) => {
  return (
    <div className="h-screen w-64 bg-teal-700 text-white">
      <div className="p-4 text-xl font-bold flex justify-between items-center">
       <a href='/'> <span><b className='text-black'>YB</b> LAUNDRY</span></a>
        <button onClick={toggleSidebar} className="text-white focus:outline-none">
          <FaTimes size={24} />
        </button>
      </div>
      <ul className="mt-4">
        <a href='/'>
        <li className="p-4 hover:bg-teal-600 cursor-pointer flex items-center">
          <FaTachometerAlt className="mr-2" /> Dashboard
        </li>
        </a>
        <li className="p-4 hover:bg-teal-600 cursor-pointer flex items-center">
          <FaShoppingCart className="mr-2" /> Pos
        </li>
        <li className="p-4 hover:bg-teal-600 cursor-pointer flex items-center">
          <FaClipboardList className="mr-2" /> Orders
        </li>
        <a href="/order-status">
        <li className="p-4 hover:bg-teal-600 cursor-pointer flex items-center">
          <FaList className="mr-2" /> Orders Status Screen
        </li>
        </a>
        <li className="p-4 hover:bg-teal-600 cursor-pointer flex items-center">
          <FaMoneyBillAlt className="mr-2" /> Expenses
        </li>
        <li className="p-4 hover:bg-teal-600 cursor-pointer flex items-center">
          <FaUsers className="mr-2" /> Customers
        </li>
        <li className="p-4 hover:bg-teal-600 cursor-pointer flex items-center">
          <FaConciergeBell className="mr-2" /> Services
        </li>
        <li className="p-4 hover:bg-teal-600 cursor-pointer flex items-center">
          <FaChartLine className="mr-2" /> Reports
        </li>
        <li className="p-4 hover:bg-teal-600 cursor-pointer flex items-center">
          <FaCog className="mr-2" /> Settings
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
