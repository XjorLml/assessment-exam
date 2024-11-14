import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    toast.success('Logged out successfully!');
    navigate('/login');
  };

  const confirmLogout = () => {
    setShowModal(true);
  };

  const cancelLogout = () => {
    setShowModal(false);
  };

  const token = localStorage.getItem('token');
  if (!token) {
    navigate('/login');
    return null;
  }

  const user = JSON.parse(localStorage.getItem('user'));  
  const username = user ? user.username : 'Guest'; 

  return (
    <div className="h-screen bg-cyan-50 overflow-hidden flex items-center justify-center">
      <div className="container h-screen flex items-center justify-center px-8 mx-auto">
        <div className="w-1/2 flex flex-col items-start">
          <h4 className="text-4xl font-bold mb-4">Welcome Back, {username}!</h4>
          <p className="text-lg mb-8">You are logged in and ready to go.</p>
        </div>
        <div className="w-1/3 p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-semibold mb-6 text-center">Homepage</h1>
          <button 
            onClick={confirmLogout} 
            className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-1/3 md:w-1/4 lg:w-1/5">
            <h3 className="text-xl font-semibold mb-4 text-center">Are you sure you want to log out?</h3>
            <div className="flex justify-between mt-4">
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
              >
                Yes
              </button>
              <button
                onClick={cancelLogout}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Home;
