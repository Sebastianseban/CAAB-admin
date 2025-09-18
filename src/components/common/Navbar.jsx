// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className='bg-blue-600 h-full'>Navbar</div>
//   )
// }

// export default Navbarimport React from 'react';
// Place your CAAB logo SVG or PNG in the "public" folder or as an import.
import caabLogo from '/public/CAAB-logo-new-2.png'; // Or use "./assets/CAAB-logo-new-2.png" as per your setup

const Navbar = () => {
  return (
    <nav className="w-full bg-[#8043c9d5] shadow-md h-16 px-4 flex items-center justify-between">
      <div className="flex items-center">
        {/* Logo */}
        <img
          src={caabLogo}
          alt="CAAB Logo"
          className="h-10 w-10 mr-3 rounded-md bg-white p-1 shadow"
          style={{ objectFit: 'contain' }}
        />
        {/* Title */}
        <span className="text-white text-2xl font-bold tracking-wide">
          CAAB Portal
        </span>
      </div>
      <div className="flex items-center gap-6">
        {/* Add links or user actions here if needed */}
        {/* <a href="#" className="text-white font-medium hover:underline">Home</a> */}
      </div>
    </nav>
  );
};

export default Navbar;
