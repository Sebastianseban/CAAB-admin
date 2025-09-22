
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

  return (
    <aside className="w-full h-full flex flex-col py-6 px-1 bg-gradient-to-b from-[#3752fa] via-[#6040ba] to-[#4d78d0] shadow-2xl border-r-0">
      {/* Branding */}

      {/* Sidebar Menu */}
      <nav className="flex-1">
        {sidebarMenu.map((section, idx) => (
          <div key={idx} className="mb-4">
            <h1 className="px-8 pb-2 pt-4 text-[11px] font-bold tracking-wide uppercase text-[#c5cafa] opacity-70">
              {section.title}
            </h1>
            {section.items.map((item, i) => {
              const isActive =
                location.pathname === item.path ||
                (item.path !== "/" && location.pathname.includes(item.path));
              return (
                <Link to={item.path} key={i}>
                  <div
                    className={`mx-4 my-2 rounded-xl transition shadow-sm ${
                      isActive
                        ? "bg-white/80 text-[#3752fa] font-bold shadow-md"
                        : "bg-white/10 text-white hover:bg-white/40 hover:text-[#2135ad]"
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
