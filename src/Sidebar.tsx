//import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-200 p-4 pt-16 h-full fixed top-0 left-0 overflow-y-auto md:relative z-40">
      <nav className="flex flex-col space-y-1">
        <h2 className="font-bold mb-4 mt-8 md:mt-0 text-xl">Learn DSA</h2>

        <NavLink
          to="/dsa/arrays"
          className={({ isActive }) =>
            `block py-2 px-3 rounded hover:bg-gray-300 ${
              isActive ? "bg-blue-400 text-white" : ""
            }`
          }
        >
          Arrays
        </NavLink>

        <NavLink
          to="/dsa/linkedlist"
          className={({ isActive }) =>
            `block py-2 px-3 rounded hover:bg-gray-300 ${
              isActive ? "bg-blue-400 text-white" : ""
            }`
          }
        >
          Linked List
        </NavLink>

        <NavLink
          to="/dsa/trees"
          className={({ isActive }) =>
            `block py-2 px-3 rounded hover:bg-gray-300 ${
              isActive ? "bg-blue-400 text-white" : ""
            }`
          }
        >
          Trees
        </NavLink>

        <NavLink
          to="/dsa/graphs"
          className={({ isActive }) =>
            `block py-2 px-3 rounded hover:bg-gray-300 ${
              isActive ? "bg-blue-400 text-white" : ""
            }`
          }
        >
          Graphs
        </NavLink>

        <hr className="my-4" />

        <NavLink
          to="/"
          className="block py-2 px-3 rounded hover:bg-gray-300 text-sm font-semibold"
        >
          ← Back to All Topics
        </NavLink>
      </nav>
    </aside>
  );
}
