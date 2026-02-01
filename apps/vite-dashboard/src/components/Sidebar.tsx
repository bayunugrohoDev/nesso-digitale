import React from "react";
import { NavLink } from "@nesso/shared-ui";

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4 min-h-screen">
      <div className="text-2xl font-bold mb-6">Nesso Dashboard</div>
      <nav>
        <ul>
          <li className="mb-2">
            <NavLink href="#" isActive={true}>
              Projects
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
