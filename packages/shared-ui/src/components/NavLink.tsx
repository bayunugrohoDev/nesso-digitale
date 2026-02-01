import React from 'react';

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ children, isActive, className, ...props }) => {
  return (
    <a
      className={`block px-4 py-2 rounded-md text-sm font-medium ${
        isActive
          ? 'bg-gray-200 text-gray-900'
          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
      } ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};
