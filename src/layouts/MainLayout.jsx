import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";


export default function MainLayout() {
  return (
   <div>

     <div >
      <Navbar/>
     </div>
    <div className="flex ">
      <div className="w-[240px]">
        <Sidebar/>
      </div>
      <div>
        <Outlet/>
      </div>

    </div>
   </div>
  );
}