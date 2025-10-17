
import React from "react";
import { Link, useLocation } from "react-router-dom";
import useUIStore from "../../store/useUIStore";
const sidebarMenu = [
  {
    title: "HOME",
    items: [{ name: "Home", path: "/admin-dashboard/add-sector" }],
  },
  {
    title: "MANAGE CLIENT",
    items: [
      { name: "Manage Company", path: "manage-company" },
      { name: "Generate Report", path: "/admin-dashboard/generate-report" },
    ],
  },
  {
    title: "MANAGE DATA",
    items: [
      { name: "Add Department", path: "add-department" },
      { name: "Add Business Type", path: "add-business-type" },
      { name: "Add Act", path: "add-act" },
      { name: "Add Questionnaire", path: "add-questionnaire" },
    ],
  },
  {
    title: "MANAGE EMPLOYEE",
    items: [
      { name: "Create Role", path: "/admin-dashboard/roles" },
      { name: "Create Employee", path: "/admin-dashboard/employees" },
    ],
  },
];

function Sidebar() {
  const location = useLocation();
  const { setPageTitle } = useUIStore();

  const handleClick = (name) => {
    setPageTitle(name);
  };

  return (
    <aside className="w-full h-full flex flex-col py-6 px-1 bg-[#224167] shadow-2xl border-r-0">
      <img className="mb-4" src="/Logo.png" alt="" />

      <nav className="flex-1">
        {sidebarMenu.map((section, idx) => (
          <div key={idx} className="mb-4">
            <h1 className="px-8 pb-2 pt-4 text-[14px] font-bold tracking-wide uppercase text-[#c5cafa] opacity-70">
              {section.title}
            </h1>
            {section.items.map((item, i) => {
              const isActive =
                location.pathname === item.path ||
                (item.path !== "/" && location.pathname.includes(item.path));
              return (
                <Link
                  to={item.path}
                  key={i}
                  onClick={() => handleClick(item.name)}
                >
                  <div
                    className={`my-2 rounded-xl transition ${
                      isActive
                        ? "bg-[#0076D2] text-white font-bold shadow-md"
                        : "text-white hover:bg-white/80 hover:text-[#2135ad]"
                    }`}
                  >
                    <p className="py-2 px-8 text-[15px] select-none">
                      {item.name}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
