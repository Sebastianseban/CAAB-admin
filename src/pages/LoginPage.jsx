
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useLogin } from "../hooks/useAuth";
// import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

// function LoginPage() {
//   const [user, setUser] = useState({ user_name: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();
//   const { mutate: login, isLoading, isError, error } = useLogin();

//   const handleInputChange = (field, value) => {
//     setUser(prev => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Basic validation
//     if (!user.user_name.trim() || !user.password) {
//       return;
//     }

//     login(user, {
//       onSuccess: () => {
//         navigate("/admin/dashboard");
//       },
//     });
//   };

//   const isFormValid = user.user_name.trim() && user.password;

//   return (
//     <div className="flex justify-center items-center min-h-screen w-full bg-gradient-to-br from-blue-50 to-blue-100">
//       <div className="bg-white p-8 rounded-2xl shadow-2xl w-96 max-w-md mx-4">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
//             <FaLock className="text-blue-600 text-xl" />
//           </div>
//           <h2 className="text-2xl font-bold text-gray-800 mb-2">
//             Welcome Back
//           </h2>
//           <p className="text-gray-600 text-sm">
//             Sign in to access your admin dashboard
//           </p>
//         </div>

//         <form className="space-y-6" onSubmit={handleSubmit} noValidate>
//           {/* Username Field */}
//           <div>
//             <label 
//               htmlFor="user_name" 
//               className="block text-sm font-medium text-gray-700 mb-2"
//             >
//               Username
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                 <FaUser className="text-gray-400 text-sm" />
//               </div>
//               <input
//                 id="user_name"
//                 type="text"
//                 placeholder="Enter your username"
//                 autoComplete="username"
//                 required
//                 value={user.user_name}
//                 onChange={(e) => handleInputChange('user_name', e.target.value)}
//                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
//                 disabled={isLoading}
//               />
//             </div>
//           </div>

//           {/* Password Field */}
//           <div>
//             <label 
//               htmlFor="password" 
//               className="block text-sm font-medium text-gray-700 mb-2"
//             >
//               Password
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                 <FaLock className="text-gray-400 text-sm" />
//               </div>
//               <input
//                 id="password"
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter your password"
//                 autoComplete="current-password"
//                 required
//                 value={user.password}
//                 onChange={(e) => handleInputChange('password', e.target.value)}
//                 className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
//                 disabled={isLoading}
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 focus:outline-none"
//                 disabled={isLoading}
//               >
//                 {showPassword ? <FaEyeSlash className="text-sm" /> : <FaEye className="text-sm" />}
//               </button>
//             </div>
//           </div>

//           {/* Error Message */}
//           {isError && (
//             <div className="bg-red-50 border border-red-200 rounded-lg p-3">
//               <p className="text-red-700 text-sm text-center">
//                 {error?.response?.data?.message || "Invalid username or password. Please try again."}
//               </p>
//             </div>
//           )}

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={isLoading || !isFormValid}
//             className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//           >
//             {isLoading ? (
//               <span className="flex items-center justify-center">
//                 <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                 </svg>
//                 Signing in...
//               </span>
//             ) : (
//               "Sign In"
//             )}
//           </button>
//         </form>

//         {/* Footer */}
//         <div className="mt-6 text-center">
//           <p className="text-xs text-gray-500">
//             Protected by enterprise security
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useAuth";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

function LoginPage() {
  const [user, setUser] = useState({ user_name: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { mutate: login, isLoading, isError, error } = useLogin();

  const handleInputChange = (field, value) => {
    setUser(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.user_name.trim() || !user.password) {
      return;
    }
    login(user, {
      onSuccess: () => {
        navigate("/admin/dashboard");
      },
    });
  };

  const isFormValid = user.user_name.trim() && user.password;

  return (
    <div className="flex min-h-screen w-full bg-white">
      {/* Left branding section */}
      <div className="flex flex-col justify-center items-center w-1/2 bg-gradient-to-br from-[#3752fa] via-[#4264ec] to-[#4d78d0] text-white p-10  shadow-xl">
        <div className="flex flex-col items-center pt-40">
          {/* Logo */}
          <div className="size-24 p-2 flex bg-white items-center justify-center rounded-full mb-4">
            {/* Replace with your actual logo if available */}
          <img src="/CAAB-logo-new-2.png" alt="" />
          </div>
          <h1 className="text-4xl font-bold mb-2 tracking-tight">Hello caab!<span className="ml-1">👋</span></h1>
          <p className="text-md text-white/80">
           Empowering Businesses: Check Compliance,<br/> Grade Law, Grow Confidently.
          </p>
        </div>
        <div className="mt-auto text-xs opacity-60">
          © 2025 caab. All rights reserved.
        </div>
      </div>

      {/* Login Form section */}
      <div className="flex flex-col justify-center items-center w-1/2 bg-white px-10">
        <div className="max-w-md w-full p-8 bg-white rounded-3xl shadow-xl">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
            <p className="text-gray-600 text-sm">
                Empowering Businesses: Check Compliance,<br/> Grade Law, Grow Confidently.
            </p>
          </div>
          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            {/* Username Field */}
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaUser className="text-gray-400 text-sm" />
                </div>
                <input
                  id="user_name"
                  type="text"
                  placeholder="Enter your email"
                  autoComplete="username"
                  required
                  value={user.user_name}
                  onChange={(e) => handleInputChange('user_name', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                  disabled={isLoading}
                />
              </div>
            </div>
            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaLock className="text-gray-400 text-sm" />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  value={user.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 focus:outline-none"
                  disabled={isLoading}
                >
                  {showPassword ? <FaEyeSlash className="text-sm" /> : <FaEye className="text-sm" />}
                </button>
              </div>
            </div>
            {/* Error Message */}
            {isError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-700 text-sm text-center">
                  {error?.response?.data?.message || "Invalid username or password. Please try again."}
                </p>
              </div>
            )}
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !isFormValid}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </span>
              ) : (
                "Login Now"
              )}
            </button>
          </form>
 
   
        
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
