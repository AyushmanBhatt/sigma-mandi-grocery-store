import "../css/AdminSidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import EditNotificationsIcon from "@mui/icons-material/EditNotifications";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const AdminSidebar = () => {
  const { user } = useAuthContext()
  return (
    <div className="adminsidebar">
      <div className="top">
        <span className="logo">{user.firstName}</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <NavLink to="/">
            <li>
              <HomeIcon />
              <span>Home</span>
            </li>
          </NavLink>
          <NavLink to="/Adminpage">
            <li>
              <DashboardIcon />
              <span>Dashboard</span>
            </li>
          </NavLink>

          <p className="title">LISTS</p>
          <li>
            <ProductionQuantityLimitsIcon />
            <span>Products</span>
          </li>
          <NavLink to="/deliveryorder">
            <li>
              <DeliveryDiningIcon />
              <span>Orders & Delivery</span>
            </li>
          </NavLink>
          <p className="title">USEFUL</p>
          <li>
            <EditNotificationsIcon />
            <span>Notifications</span>
          </li>
          <NavLink to="/vegetable">
            <li>
            <QueryStatsIcon />
              <span>Prediction</span>
            </li>
          </NavLink>
          <p className="title">SERVICES</p>
          <li>
            <SettingsIcon />
            <span>Settings</span>
          </li>
          <NavLink to="/aboutpage">
            <li>
              <InfoIcon />
              <span>About Us</span>
            </li>
          </NavLink>
          <NavLink to="/contactpage">
            <li>
              <ContactsIcon />
              <span>Contact Us</span>
            </li>
          </NavLink>
          <NavLink to="/login">
            <li>
              <ExitToAppIcon />
              <span>Logout</span>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
