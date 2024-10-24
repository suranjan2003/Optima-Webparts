import React from 'react';

const SideMenu = ({ isSidebarOpen, toggleSidebar }) => {
  const years = [2025, 2023, 'Previous']; // Array of years

  const handleYearClick = (year) => {
    toggleSidebar(); // Close the sidebar first
    console.log(`Selected Year: ${year}`); // Handle year selection here (replace with your logic)
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-200 w-1/3 md:w-1/4 lg:w-1/6 transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full' // Change for left side opening
        }`}
        style={{ zIndex: 100 }}
      >
        {/* Sidebar Content */}
        <div className="p-4">
          <h1 className="pt-8 text-3xl font-bold">Years</h1> {/* Updated heading */}
          <hr className="my-2 border-gray-400" /> {/* Line after heading */}
          <ul className="px-4 mt-2 text-xl space-y-2">
            {years.map((year, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-red-700"
                onClick={() => handleYearClick(year)} // Pass year to the click handler
              >
                {year}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay for clicking outside the sidebar to close it */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={toggleSidebar}
          style={{ zIndex: 99 }}
        ></div>
      )}
    </>
  );
};

export default SideMenu;
