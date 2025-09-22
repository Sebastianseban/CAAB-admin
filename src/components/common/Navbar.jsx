
// import caabLogo from '/public/CAAB-logo-new-2.png'; // Or use "./assets/CAAB-logo-new-2.png" as per your setup

// const Navbar = () => {
//   return (
//     <nav className="w-full bg-[#8043c9d5] shadow-md h-16 px-4 flex items-center justify-between">
//       <div className="flex items-center">
//         {/* Logo */}
//         <img
//           src={caabLogo}
//           alt="CAAB Logo"
//           className="h-10 w-10 mr-3 rounded-md bg-white p-1 shadow"
//           style={{ objectFit: 'contain' }}
//         />
//         {/* Title */}
//         <span className="text-white text-2xl font-bold tracking-wide">
//           CAAB Portal
//         </span>
//       </div>
//       <div className="flex items-center gap-6">
//         {/* Add links or user actions here if needed */}
//         {/* <a href="#" className="text-white font-medium hover:underline">Home</a> */}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import caabLogo from "/public/CAAB-logo-new-2.png"; // Use your setup's path

const Navbar = ({ onLogout }) => {
  return (
    <nav className="w-full h-20 px-8 flex items-center justify-between bg-gradient-to-br from-[#3752fa] to-[#4d78d0] shadow-2xl ">
      {/* Branding */}
      <div className="flex items-center">
        <img
          src={caabLogo}
          alt="CAAB Logo"
          className="h-12 w-12 mr-4 rounded-xl bg-white p-2 shadow-lg"
          style={{ objectFit: 'contain' }}
        />
        <span className="text-white text-3xl font-bold tracking-tight drop-shadow-sm">
          CAAB Portal
        </span>
      </div>
      {/* Actions */}
      <div className="flex items-center gap-6">
        <button
          onClick={onLogout}
          className="bg-white text-blue-600 font-medium py-2 px-6 rounded-lg shadow-md hover:bg-blue-100 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
