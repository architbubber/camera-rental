
import { BrowserRouter as  NavLink } from "react-router-dom";
import { Home, Add, Edit, CalendarToday, CheckCircle } from "@mui/icons-material";

const Sidebar = () =>{
    return (
                <aside className="w-64 bg-gray-800 text-white flex flex-col">
                <div className="text-center py-4 text-2xl font-bold border-b border-gray-600">
                  LCAktion
                </div>
                <nav className="flex flex-col mt-4 space-y-2">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-3 hover:bg-gray-700 transition ${
                        isActive ? "bg-gray-700" : ""
                      }`
                    }
                  >
                    <Home className="mr-2" />
                    Home
                  </NavLink>
                  <NavLink
                    to="/add-product"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-3 hover:bg-gray-700 transition ${
                        isActive ? "bg-gray-700" : ""
                      }`
                    }
                  >
                    <Add className="mr-2" />
                    Add Product
                  </NavLink>
                  <NavLink
                    to="/check-availability"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-3 hover:bg-gray-700 transition ${
                        isActive ? "bg-gray-700" : ""
                      }`
                    }
                  >
                    <CheckCircle className="mr-2" />
                    Check Availability
                  </NavLink>
                  <NavLink
                    to="/create-booking"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-3 hover:bg-gray-700 transition ${
                        isActive ? "bg-gray-700" : ""
                      }`
                    }
                  >
                    <CalendarToday className="mr-2" />
                    Create Booking
                  </NavLink>
                  <NavLink
                    to="/update-booking"
                    className={({ isActive }) =>
                      `flex items-center px-4 py-3 hover:bg-gray-700 transition ${
                        isActive ? "bg-gray-700" : ""
                      }`
                    }
                  >
                    <Edit className="mr-2" />
                    Update Booking
                  </NavLink>
                </nav>
              </aside>
    );
}

export default Sidebar;