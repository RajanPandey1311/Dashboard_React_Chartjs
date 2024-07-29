import React from "react";
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { GiProgression } from "react-icons/gi";
import { FaRegThumbsUp,FaShoppingBag } from "react-icons/fa";
import { MdOutlineDoneOutline } from "react-icons/md";
const Dashboard = () => {
    const data = {
        labels: ['Pending', 'Processing', 'Ready to Deliver', 'Delivered', 'Returned'],
        datasets: [
          {
            data: [4, 0, 3, 0, 0],
            backgroundColor: ['#4B5563', '#FFCE56', '#36A2EB', '#4CAF50', '#FF0000'],
          },
        ],
      };
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-teal-500 text-white p-4 rounded shadow flex justify-between items-center">
          <div>
            <h2 className="text-4xl font-bold">4</h2>
            <p>Pending Orders</p>
          </div>
          <FaShoppingBag size={50}/>
        </div>
        <div className="bg-teal-500 text-white p-4 rounded shadow flex justify-between items-center">
          <div>
            <h2 className="text-4xl font-bold">0</h2>
            <p>Processing Order</p>
          </div>
          <GiProgression size={50}/>
        </div>
        <div className="bg-teal-500 text-white p-4 rounded shadow flex justify-between items-center">
          <div>
            <h2 className="text-4xl font-bold">3</h2>
            <p>Ready to Deliver</p>
          </div>
          <FaRegThumbsUp size={50}/>
        </div>
        <div className="bg-teal-500 text-white p-4 rounded shadow flex justify-between items-center">
          <div>
            <h2 className="text-4xl font-bold">0</h2>
            <p>Delivered Orders</p>
          </div>
          <MdOutlineDoneOutline size={50}/>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow lg:col-span-2">
          <h3 className="text-lg text-teal-400 font-bold mb-2 shadow-xl p-3">Today's Delivery</h3>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg text-teal-400 font-bold mb-2 shadow-xl p-3">Orderview</h3>
          <Pie data={data} height={300} width={300} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
