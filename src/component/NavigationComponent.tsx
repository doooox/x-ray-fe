import { Link, Outlet } from "react-router-dom";
import { ROUTES } from "../utils/static";
import "./Navigation.css";

const NavigationComponent = () => {
  return (
    <>
      <nav className="navigation">
        <ul>
          <li>
            <Link to={ROUTES.DPRACTICE}>Dental practices</Link>
          </li>
          <li>
            <Link to={ROUTES.DOCTOR}>Doctor</Link>
          </li>
          <li>
            <Link to={ROUTES.PATIENT}>Patient</Link>
          </li>
        </ul>
        <ul>
          <Link to={ROUTES.LOGOUT}>Logout</Link>
        </ul>
      </nav>

      <div className="nav-children">
        <Outlet />
      </div>
    </>
  );
};

export default NavigationComponent;
