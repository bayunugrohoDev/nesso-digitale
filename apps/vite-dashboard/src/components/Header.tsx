import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm h-16 flex items-center px-6">
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
      </div>
      {/* Could add user info or other header elements here */}
      <div>
        <span className="text-gray-600">Welcome, Admin!</span>
      </div>
    </header>
  );
};
