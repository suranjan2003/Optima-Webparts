import React, { useState } from 'react';
import SideMenu from '../components/SideMenu';

const Spons = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    // Function to toggle the sidebar
    const toggleSidebar = () => {
      setIsSidebarOpen((prevState) => !prevState);
    };
  
    return (
      <div className="relative h-screen bg-[#170453] flex flex-col items-start pl-5 pt-16">
        <button 
          onClick={toggleSidebar} 
          className="bg-blue-500 text-white py-3 px-6 rounded transition duration-300 hover:bg-blue-600"
        >
          Years
        </button>
  
        {/* Include the SideMenu component */}
        <SideMenu isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
      </div>
    );
};

export default Spons;
