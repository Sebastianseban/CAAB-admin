
import useUIStore from "../../store/useUIStore";

const Navbar = ({ onLogout }) => {
  const { pageTitle } = useUIStore();

  return (
    <nav className="w-full h-20 px-8 flex items-center justify-between bg-[#F1F3FC] shadow-2xl">
      <h1 className="text-[20px] font-semibold text-[#404753] tracking-wide">
        {pageTitle}
      </h1>

      <button
        onClick={onLogout}
        className="bg-white text-blue-600 font-medium py-2 px-6 rounded-lg shadow-md hover:bg-blue-100 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;