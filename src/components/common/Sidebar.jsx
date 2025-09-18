
import React from "react";
import { Link, useLocation } from "react-router-dom";

const sidebarMenu = [
  {
    title: "HOME",
    items: [
      { name: "Home", path: "/admin-dashboard/add-sector" },
    ],
  },
  {
    title: "MANAGE CLIENT",
    items: [
      { name: "Manage Company", path: "/admin-dashboard/manage-company" },
      { name: "Generate Report", path: "/admin-dashboard/generate-report" },
    ],
  },
  {
    title: "MANAGE DATA",
    items: [
      { name: "Add Department", path: "add-department" },
      { name: "Add Business Type", path: "add-business-type" },
      { name: "Employee Category", path: "yy" },
      { name: "Add Act", path: "add-act" },
      { name: "Add Depts. to Sector", path: "add-sector" },
      { name: "Add Acts to Depts.", path: "/admin-dashboard/add-acts-to-depts" },
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

  return (
    <aside className="w-full min-h-screen bg-gradient-to-b from-[#f7f7fa] via-[#e9eefd] to-[#f1f1f4] shadow-xl flex flex-col py-6 border-r border-[#dbeafe]">
      {/* Sidebar Menu */}
      <nav className="flex-1">
        {sidebarMenu.map((section, idx) => (
          <div key={idx} className="mb-2">
            <h1 className="px-7 pb-2 pt-6 text-xs font-bold tracking-[.18em] uppercase text-[#7079da]">
              {section.title}
            </h1>
            {section.items.map((item, i) => {
              const isActive =
                location.pathname === item.path ||
                (item.path !== "/" && location.pathname.includes(item.path));
              return (
                <Link to={item.path} key={i}>
                  <div
                    className={`mx-4 my-1 rounded-xl ${
                      isActive
                        ? "bg-gradient-to-r from-[#8dc6fb] to-[#b7b3fa] text-[#262760] font-bold shadow-md"
                        : "text-[#6d7aba] hover:bg-[#f8fafc] hover:text-[#4154d7] transition"
                    }`}
                  >
                    <p className="py-2 px-7 text-[15px] select-none">
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
