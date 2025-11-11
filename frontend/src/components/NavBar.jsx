
// import React, { useState, useRef, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { assets } from "../assets/assets_frontend/assets";

// const NavBar = () => {
//   const navigate = useNavigate();
//   const [showMenu, setShowMenu] = useState(false);
//   const [showProfileDropdown, setShowProfileDropdown] = useState(false);
//   const [token, setToken] = useState(false); // Using state for login status demo

//   // Refs for click outside detection
//   const profileDropdownRef = useRef(null);
//   const mobileMenuRef = useRef(null);

//   // Close dropdowns when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
//         setShowProfileDropdown(false);
//       }
//       if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
//         setShowMenu(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Function to close the mobile menu
//   const closeMobileMenu = () => {
//     setShowMenu(false);
//   };

//   // Function to toggle profile dropdown
//   const toggleProfileDropdown = () => {
//     setShowProfileDropdown(!showProfileDropdown);
//   };

//   // Function to handle profile dropdown actions
//   const handleProfileAction = (action) => {
//     if (action === 'my-profile') navigate('my-profile');
//     if (action === 'my-appointments') navigate('my-appointments');
//     if (action === 'logout') setToken(false);
    
//     setShowProfileDropdown(false);
//     closeMobileMenu();
//   };

//   return (
//     <div className="relative">
//       <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
//         <img
//           src={assets.logo}
//           alt="Logo"
//           className="w-44 cursor-pointer"
//           onClick={() => navigate("/")}
//         />
        
//         {/* Desktop Navigation */}
//         <ul className="hidden md:flex items-start font-medium gap-5">
//           <NavLink to="/" className={({ isActive }) => "flex flex-col items-center" + (isActive ? " border-b-2 border-blue-400" : "")}>
//             <li className="py-1">HOME</li>
//           </NavLink>
//           <NavLink to="/doctors" className={({ isActive }) => "flex flex-col items-center" + (isActive ? " border-b-2 border-blue-400" : "")}>
//             <li className="py-1">ALL DOCTORS</li>
//           </NavLink>
//           <NavLink to="/about" className={({ isActive }) => "flex flex-col items-center" + (isActive ? " border-b-2 border-blue-400" : "")}>
//             <li className="py-1">ABOUT</li>
//           </NavLink>
//           <NavLink to="/contact" className={({ isActive }) => "flex flex-col items-center" + (isActive ? " border-b-2 border-blue-400" : "")}>
//             <li className="py-1">CONTACT</li>
//           </NavLink>
//         </ul>

//         <div className="flex items-center gap-4">
//           {token ? (
//             <div 
//               ref={profileDropdownRef}
//               className="flex items-center gap-2 cursor-pointer group relative"
//             >
//               <div 
//                 className="flex items-center gap-2"
//                 onClick={toggleProfileDropdown}
//               >
//                 <img src={assets.profile_pic} alt="Profile" className="w-8 rounded-full" />
//                 <img src={assets.dropdown_icon} alt="Dropdown" className="w-2.5" />
//               </div>
              
//               {/* Profile Dropdown - Updated for better mobile handling */}
//               {showProfileDropdown && (
//                 <div className="absolute top-full right-0 pt-2 text-base font-medium text-gray-600 z-30">
//                   <div className="min-w-48 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col gap-4 p-4">
//                     <p 
//                       onClick={() => handleProfileAction('my-profile')} 
//                       className="hover:text-black cursor-pointer py-1"
//                     >
//                       My Profile
//                     </p>
//                     <p 
//                       onClick={() => handleProfileAction('my-appointments')} 
//                       className="hover:text-black cursor-pointer py-1"
//                     >
//                       My Appointments
//                     </p>
//                     <p 
//                       onClick={() => handleProfileAction('logout')} 
//                       className="hover:text-black cursor-pointer py-1 border-t border-gray-200 pt-2"
//                     >
//                       Logout
//                     </p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <button 
//               onClick={() => navigate('/login')} 
//               className="bg-[#5f5FFF] text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer"
//             >
//               CREATE ACCOUNT
//             </button>
//           )}

//           {/* Mobile Menu Button */}
//           <button 
//             ref={mobileMenuRef}
//             className="md:hidden w-6 z-30" 
//             onClick={() => setShowMenu(!showMenu)}
//           >
//             {showMenu ? (
//               <img src={assets.cross_icon} alt="Close Menu" />
//             ) : (
//               <img src={assets.menu_icon} alt="Open Menu" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {showMenu && (
//         <div 
//           ref={mobileMenuRef}
//           className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-20 py-5 border-t border-gray-200"
//         >
//           <ul className="flex flex-col items-center font-medium gap-5">
//             <NavLink 
//               to="/" 
//               onClick={closeMobileMenu} 
//               className={({ isActive }) => "py-2" + (isActive ? " text-blue-500 font-semibold" : "")}
//             >
//               HOME
//             </NavLink>
//             <NavLink 
//               to="/doctors" 
//               onClick={closeMobileMenu} 
//               className={({ isActive }) => "py-2" + (isActive ? " text-blue-500 font-semibold" : "")}
//             >
//               ALL DOCTORS
//             </NavLink>
//             <NavLink 
//               to="/about" 
//               onClick={closeMobileMenu} 
//               className={({ isActive }) => "py-2" + (isActive ? " text-blue-500 font-semibold" : "")}
//             >
//               ABOUT
//             </NavLink>
//             <NavLink 
//               to="/contact" 
//               onClick={closeMobileMenu} 
//               className={({ isActive }) => "py-2" + (isActive ? " text-blue-500 font-semibold" : "")}
//             >
//               CONTACT
//             </NavLink>
            
//             {/* Mobile Profile Options - Only show when logged in */}
//             {token && (
//               <>
//                 <div className="w-full border-t border-gray-200 pt-4 mt-2">
//                   <p className="text-gray-500 text-xs mb-2">ACCOUNT</p>
//                   <button 
//                     onClick={() => handleProfileAction('my-profile')} 
//                     className="py-2 hover:text-blue-500 w-full text-left"
//                   >
//                     My Profile
//                   </button>
//                   <button 
//                     onClick={() => handleProfileAction('my-appointments')} 
//                     className="py-2 hover:text-blue-500 w-full text-left"
//                   >
//                     My Appointments
//                   </button>
//                   <button 
//                     onClick={() => handleProfileAction('logout')} 
//                     className="py-2 hover:text-red-500 w-full text-left mt-2"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               </>
//             )}
            
//             {!token && (
//               <li className="w-full px-4">
//                 <button 
//                   onClick={() => { navigate('/login'); closeMobileMenu(); }} 
//                   className="bg-[#5f5FFF] text-white px-8 py-3 rounded-full font-light mt-4 w-full"
//                 >
//                   CREATE ACCOUNT
//                 </button>
//               </li>
//             )}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NavBar;




















import React, { useState, useRef, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";
import { AppContext } from "../context/AppContext";

const NavBar = () => {
  const navigate = useNavigate();
  const { user, token, logout, isAuthenticated } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  // Refs for click outside detection
  const profileDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to close the mobile menu
  const closeMobileMenu = () => {
    setShowMenu(false);
  };

  // Function to toggle profile dropdown
  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  // Function to handle profile dropdown actions
  const handleProfileAction = (action) => {
    if (action === 'my-profile') navigate('/my-profile');
    if (action === 'my-appointments') navigate('/my-appointments');
    if (action === 'logout') {
      logout();
      navigate('/');
    }
    
    setShowProfileDropdown(false);
    closeMobileMenu();
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
        <img
          src={assets.logo}
          alt="Logo"
          className="w-44 cursor-pointer"
          onClick={() => navigate("/")}
        />
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-start font-medium gap-5">
          <NavLink to="/" className={({ isActive }) => "flex flex-col items-center" + (isActive ? " border-b-2 border-blue-400" : "")}>
            <li className="py-1">HOME</li>
          </NavLink>
          <NavLink to="/doctors" className={({ isActive }) => "flex flex-col items-center" + (isActive ? " border-b-2 border-blue-400" : "")}>
            <li className="py-1">ALL DOCTORS</li>
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => "flex flex-col items-center" + (isActive ? " border-b-2 border-blue-400" : "")}>
            <li className="py-1">ABOUT</li>
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => "flex flex-col items-center" + (isActive ? " border-b-2 border-blue-400" : "")}>
            <li className="py-1">CONTACT</li>
          </NavLink>
        </ul>

        <div className="flex items-center gap-4">
          {isAuthenticated() && user ? (
            <div 
              ref={profileDropdownRef}
              className="flex items-center gap-2 cursor-pointer group relative"
            >
              <div 
                className="flex items-center gap-2"
                onClick={toggleProfileDropdown}
              >
                <img src={assets.profile_pic} alt="Profile" className="w-8 h-8 rounded-full object-cover" />
                <span className="hidden md:block text-gray-700 font-medium">{user.name}</span>
                <img src={assets.dropdown_icon} alt="Dropdown" className="w-2.5" />
              </div>
              
              {/* Profile Dropdown */}
              {showProfileDropdown && (
                <div className="absolute top-full right-0 pt-2 text-base font-medium text-gray-600 z-30">
                  <div className="min-w-48 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col gap-4 p-4">
                    <div className="pb-2 border-b border-gray-200">
                      <p className="font-semibold text-gray-800">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                    <p 
                      onClick={() => handleProfileAction('my-profile')} 
                      className="hover:text-[#5f5FFF] cursor-pointer py-1 transition-colors"
                    >
                      My Profile
                    </p>
                    <p 
                      onClick={() => handleProfileAction('my-appointments')} 
                      className="hover:text-[#5f5FFF] cursor-pointer py-1 transition-colors"
                    >
                      My Appointments
                    </p>
                    <p 
                      onClick={() => handleProfileAction('logout')} 
                      className="hover:text-red-500 cursor-pointer py-1 border-t border-gray-200 pt-2 transition-colors"
                    >
                      Logout
                    </p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button 
              onClick={() => navigate('/login')} 
              className="bg-[#5f5FFF] text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer hover:bg-[#4a4aff] transition-colors"
            >
              CREATE ACCOUNT
            </button>
          )}

          {/* Mobile Menu Button */}
          <button 
            ref={mobileMenuRef}
            className="md:hidden w-6 z-30" 
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              <img src={assets.cross_icon} alt="Close Menu" />
            ) : (
              <img src={assets.menu_icon} alt="Open Menu" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div 
          ref={mobileMenuRef}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-20 py-5 border-t border-gray-200"
        >
          <ul className="flex flex-col items-center font-medium gap-5">
            <NavLink 
              to="/" 
              onClick={closeMobileMenu} 
              className={({ isActive }) => "py-2" + (isActive ? " text-blue-500 font-semibold" : " text-gray-700")}
            >
              HOME
            </NavLink>
            <NavLink 
              to="/doctors" 
              onClick={closeMobileMenu} 
              className={({ isActive }) => "py-2" + (isActive ? " text-blue-500 font-semibold" : " text-gray-700")}
            >
              ALL DOCTORS
            </NavLink>
            <NavLink 
              to="/about" 
              onClick={closeMobileMenu} 
              className={({ isActive }) => "py-2" + (isActive ? " text-blue-500 font-semibold" : " text-gray-700")}
            >
              ABOUT
            </NavLink>
            <NavLink 
              to="/contact" 
              onClick={closeMobileMenu} 
              className={({ isActive }) => "py-2" + (isActive ? " text-blue-500 font-semibold" : " text-gray-700")}
            >
              CONTACT
            </NavLink>
            
            {/* Mobile Profile Options - Only show when logged in */}
            {isAuthenticated() && user && (
              <>
                <div className="w-full border-t border-gray-200 pt-4 mt-2 px-4">
                  <p className="text-gray-500 text-xs mb-2">ACCOUNT</p>
                  <div className="mb-3 pb-2 border-b border-gray-200">
                    <p className="font-semibold text-gray-800">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                  <button 
                    onClick={() => handleProfileAction('my-profile')} 
                    className="py-2 hover:text-[#5f5FFF] w-full text-left transition-colors"
                  >
                    My Profile
                  </button>
                  <button 
                    onClick={() => handleProfileAction('my-appointments')} 
                    className="py-2 hover:text-[#5f5FFF] w-full text-left transition-colors"
                  >
                    My Appointments
                  </button>
                  <button 
                    onClick={() => handleProfileAction('logout')} 
                    className="py-2 hover:text-red-500 w-full text-left mt-2 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              </>
            )}
            
            {!isAuthenticated() && (
              <li className="w-full px-4">
                <button 
                  onClick={() => { navigate('/login'); closeMobileMenu(); }} 
                  className="bg-[#5f5FFF] text-white px-8 py-3 rounded-full font-light mt-4 w-full hover:bg-[#4a4aff] transition-colors"
                >
                  CREATE ACCOUNT
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;