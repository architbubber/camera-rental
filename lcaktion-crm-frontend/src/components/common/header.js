
import React from "react";
import {useLocation } from "react-router-dom";

const Header = () =>{
    const location = useLocation(); // Track location changes

    // Define the route names and map them to the paths
    const routeNames = {
      '/': 'Home',
      '/add-product': 'Add Product',
      '/check-availability': 'Check Availability',
      '/create-booking': 'Create Booking',
      '/update-booking': 'Update Booking',
    };
    // Get the route name based on the current path
    const activatedRoute = routeNames[location.pathname] || 'Error';
  
    return (
        <header className="bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 text-white px-6 py-4 flex items-center justify-between">
            <h1 className="text-xl font-bold">{activatedRoute}</h1>
          </header>
    );
}

export default Header;