import "./sidebar.scss";
import AlarmIcon from '@mui/icons-material/Alarm';
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";


const Sidebar = () => {
  const handleLogout = () => {
		localStorage.removeItem("token");
		window.location = "/login";
	};

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span className="logo">PM Web</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">LISTS</p>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <li>
            <DashboardIcon className="icon" />
              <span>Project</span>
            </li>
          </Link>
          <Link to="/accounts" style={{ textDecoration: "none" }}>
            <li>
            <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/milestone" style={{ textDecoration: "none" }}>
          <li>
            <AlarmIcon className="icon" />
            <span>Milestone</span>
          </li>
          </Link>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li  onClick={() => handleLogout()}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        {/* <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div> */}
        {/* <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div> */}
      </div>
    </div>
  );
};

export default Sidebar;
