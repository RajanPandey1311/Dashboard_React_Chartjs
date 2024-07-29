import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OrderStatus = () => {
  const handleUpdate = () => {
    toast.success("Status Changed Successfully.");
  };
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
    <ToastContainer />
      <h1 className="text-2xl font-bold mb-4">Order Status</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div className="bg-white text-black p-4 rounded shadow">
          <h2 className="text-xl bg-gray-500 text-white p-5 rounded">Pending</h2>
          <p className="mt-2 shadow-lg flex border p-6">Jeanette Russell <span className="ml-auto">#ORD-0023</span></p>
          <p className='shadow-lg flex border p-6'>Ken Brown <span className="ml-auto">#ORD-0022</span></p>
          <p className='shadow-lg flex border p-6'>Kristin Murray <span className="ml-auto">#ORD-0020</span></p>
        </div>
        <div className="bg-white text-black p-4 rounded shadow">
          <h2 className="text-xl bg-yellow-500 text-white p-5 rounded">Processing</h2>
          <p className="mt-2 shadow-lg flex border p-6">Kristin Murray <span className="ml-auto">#ORD-0025</span></p>
        </div>
        <div className="bg-white text-black p-4 rounded shadow">
          <h2 className="text-xl bg-blue-500 text-white p-5 rounded">Ready to Deliver</h2>
          <p className="mt-2 shadow-lg flex border p-6">Lynn Hicks <span className="ml-auto">#ORD-0024</span></p>
          <p className='shadow-lg flex border p-6'>Owen Ruiz <span className="ml-auto">#ORD-0021</span></p>
          <p className='shadow-lg flex border p-6'>Catherine Wheeler <span className="ml-auto">#ORD-0019</span></p>
        </div>
      </div>
      <button
        onClick={handleUpdate}
        className="mt-6 bg-teal-500 text-white p-2 rounded"
      >
        Click for Demo Status Update
      </button>
    </div>
  );
}

export default OrderStatus;
