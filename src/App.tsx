import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import Array from "./DSA/Array";
import Graph from "./DSA/Graph";
import LikedLists from "./DSA/LinkedLists"; 

const topics = [
  { name: "Array", path: "/array" },
  { name: "Graph", path: "/graph" },
  { name: "Liked Lists", path: "/likedlists" },
];

const ResponsiveSidebarWrapper: React.FC<{
  showSidebar: boolean;
  toggleSidebar: () => void;
}> = ({ showSidebar, toggleSidebar }) => {
  return (
    <>
      {/* Overlay for mobile when sidebar is open */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden ${
          showSidebar ? "block" : "hidden"
        }`}
        onClick={toggleSidebar}
      ></div>

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-100 z-30 transform transition-transform duration-300 ease-in-out
          ${
            showSidebar ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:static md:flex md:flex-col`}
      >
        <div className="p-6">
          <h2 className="text-xl font-bold mb-6">DSA Topics</h2>
          <ul>
            {topics.map((topic) => (
              <li key={topic.path} className="mb-4">
                <NavLink
                  to={topic.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded hover:bg-blue-200 ${
                      isActive ? "bg-blue-400 text-white font-semibold" : ""
                    }`
                  }
                >
                  {topic.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

const App: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar((prev) => !prev);

  return (
    <Router>
      {/* Hamburger button - visible on small screens */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-40 p-2 rounded-md bg-blue-600 text-white md:hidden"
        aria-label="Toggle sidebar"
      >
        ☰
      </button>

      <div className="p-6 flex space-x-6 min-h-[calc(100vh-120px)] relative">
        {/* Responsive Sidebar */}
        <ResponsiveSidebarWrapper showSidebar={showSidebar} toggleSidebar={toggleSidebar} />

        {/* Main content */}
        <main className={`flex-1 w-full min-h-screen ${!showSidebar ? "" : "md:ml-64"}`}>
          <Routes>
            <Route path="/array" element={<Array />} />
            <Route path="/graph" element={<Graph />} />
            <Route path="/likedlists" element={<LikedLists />} />
            <Route path="/" element={<div>Please select a DSA topic from the sidebar.</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
