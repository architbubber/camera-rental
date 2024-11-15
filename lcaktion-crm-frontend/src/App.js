import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Home, Add, Edit, CalendarToday, CheckCircle,ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, IconButton } from '@mui/material';
import ProductForm from "./components/ProductForm";
import BookingForm from "./components/BookingForm";
import BookingUpdateForm from "./components/BookingUpdateForm";
import AvailabilityChecker from "./components/AvailabilityChecker";
import BookingsForDate from "./components/BookingsForDate";
import Header from "./components/common/header";

const App = () => {

  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar/>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
        <Header/>

          {/* Content */}
          <main className="p-6 bg-gray-100 flex-1">
            <Routes>
              <Route path="/" element={<BookingsForDate />} />
              <Route path="/add-product" element={<ProductForm />} />
              <Route path="/check-availability" element={<AvailabilityChecker />} />
              <Route path="/create-booking" element={<BookingForm />} />
              <Route path="/update-booking" element={<BookingUpdateForm />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;


const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true); // Sidebar collapse state

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed); // Toggle the sidebar state
  };

  return (
    <aside
      className={`w-${isCollapsed ? '20' : '64'} bg-gray-900 dient-to-b from-gray-900 via-gray-600 to-gray-900 text-white flex flex-col p-4 shadow-lg transition-all duration-300 relative`}
    >
      {/* Sidebar Toggle Button (placed outside the sidebar) */}


      {/* Logo / Branding (Only show when expanded) */}
      <div className="text-center py-4 text-2xl font-bold border-b border-gray-600 flex justify-between items-center">
  {/* Box that will stay centered */}
  <div className="flex justify-center items-center w-full">
    { (
      <Box
        component="img"
        src={require('./favicon/android-chrome-512x512.png')}
        alt="LCAktion"
        sx={{
          width: {
            xs: '30px',   // small size on extra small screens
            sm: '40px',   // medium size on small screens
            md: '50px',   // larger size on medium screens
            lg: '60px',   // larger size on large screens
          },
          height:  {
            xs: '25px',   // small size on extra small screens
            sm: '35px',   // medium size on small screens
            md: '45px',   // larger size on medium screens
            lg: '55px',   // larger size on large screens
          },
          alignSelf: 'center',
          // marginInlineStart:2
        }}
        className="m-auto p-0"
      />)
    // ) : (
    //   <Box className="w-full max-w-xs m-auto shadow-lg object-cover">
    //     <h2>Lights Camera<br></br> Aktion</h2>
    //   </Box>
    // )
    }
  </div>

  {/* IconButton aligned to the rightmost */}
  <IconButton
    onClick={toggleSidebar}
    className="text-white-1000 transform bg-white shadow-lg hover:bg-gray-100 transition text-3xl p-3 ml-auto"
  >
    {isCollapsed ? (
      <ChevronRight className="text-gray-100 text-xl transform translate-x-1 shadow-lg hover:text-gray-400 transition" />
    ) : (
      <ChevronLeft className="text-gray-100 text-xl transform translate-x-1 shadow-lg hover:text-gray-400 transition" />
    )}
  </IconButton>
</div>


      {/* Navigation Links */}
      <nav className="flex flex-col mt-4 space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center px-4 py-3 hover:bg-gray-700 transition ${
              isActive ? 'bg-gray-700' : ''
            }`
          }
        >
          <Home className="mr-2" />
          {!isCollapsed && 'Home'}
        </NavLink>

        <NavLink
          to="/add-product"
          className={({ isActive }) =>
            `flex items-center px-4 py-3 hover:bg-gray-700 transition ${
              isActive ? 'bg-gray-700' : ''
            }`
          }
        >
          <Add className="mr-2" />
          {!isCollapsed && 'Add Product'}
        </NavLink>

        <NavLink
          to="/check-availability"
          className={({ isActive }) =>
            `flex items-center px-4 py-3 hover:bg-gray-700 transition ${
              isActive ? 'bg-gray-700' : ''
            }`
          }
        >
          <CheckCircle className="mr-2" />
          {!isCollapsed && 'Check Availability'}
        </NavLink>

        <NavLink
          to="/create-booking"
          className={({ isActive }) =>
            `flex items-center px-4 py-3 hover:bg-gray-700 transition ${
              isActive ? 'bg-gray-700' : ''
            }`
          }
        >
          <CalendarToday className="mr-2" />
          {!isCollapsed && 'Create Booking'}
        </NavLink>

        <NavLink
          to="/update-booking"
          className={({ isActive }) =>
            `flex items-center px-4 py-3 hover:bg-gray-700 transition ${
              isActive ? 'bg-gray-700' : ''
            }`
          }
        >
          <Edit className="mr-2" />
          {!isCollapsed && 'Update Booking'}
        </NavLink>
      </nav>
    </aside>
  );
};
